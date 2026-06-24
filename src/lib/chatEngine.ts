// =============================================================================
// Chat Engine — Smart NLP-like matching for the portfolio chatbot
// Handles: keyword matching, synonym mapping, fuzzy matching, follow-ups,
//          contextual fallback generation, and typing simulation
// =============================================================================

import { chatbotKnowledge, categoryLabels, type QAPair } from "@/data/chatbotKnowledge";

// ---------------------------------------------------------------------------
// STOP WORDS — common words that don't carry meaning for matching
// ---------------------------------------------------------------------------
const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "need", "dare", "ought",
  "used", "to", "of", "in", "for", "on", "with", "at", "by", "from",
  "as", "into", "through", "during", "before", "after", "above", "below",
  "between", "out", "off", "over", "under", "again", "further", "then",
  "once", "here", "there", "when", "where", "why", "how", "all", "each",
  "every", "both", "few", "more", "most", "other", "some", "such", "no",
  "nor", "not", "only", "own", "same", "so", "than", "too", "very",
  "just", "don", "now", "i", "me", "my", "myself", "we", "our", "ours",
  "you", "your", "yours", "he", "him", "his", "she", "her", "hers", "it",
  "its", "they", "them", "their", "theirs", "what", "which", "whom",
  "this", "that", "these", "those", "am", "and", "but", "if", "or",
  "because", "while", "about", "until", "up", "down", "please", "tell",
  "give", "show", "know", "think", "like", "want", "get", "got", "say",
  "said", "make", "go", "going", "see", "look", "find", "let", "us",
]);

// ---------------------------------------------------------------------------
// GREETING PATTERNS
// ---------------------------------------------------------------------------
const GREETING_PATTERNS = [
  "hello", "hi", "hey", "good morning", "good afternoon", "good evening",
  "howdy", "yo", "sup", "greetings", "hola", "namaste", "hii", "hiii",
  "helloo", "heyyy", "hiiii", "what's up", "whats up",
];

const GREETING_RESPONSES = [
  "Hey! 👋 I'm Dikshant's personal AI assistant. I can answer questions about his skills, projects, education, certifications, and more. What would you like to know?",
  "Hi there! 👋 Welcome! I'm here to help you learn about Dikshant — his technical skills, projects, experience, and career goals. Fire away!",
  "Hello! 👋 Great to see you! Ask me anything about Dikshant's background — from his College ERP project to his full stack expertise!",
];

// ---------------------------------------------------------------------------
// THANKS/BYE PATTERNS
// ---------------------------------------------------------------------------
const THANKS_PATTERNS = ["thank", "thanks", "thx", "ty", "appreciate"];
const BYE_PATTERNS = ["bye", "goodbye", "see you", "cya", "later", "farewell", "good night"];

const THANKS_RESPONSES = [
  "You're welcome! 😊 Feel free to ask anything else about Dikshant's profile.",
  "Glad I could help! 🙌 Let me know if you have more questions.",
  "Happy to help! 😄 Don't hesitate to ask more questions about Dikshant's skills, projects, or experience.",
];

const BYE_RESPONSES = [
  "Goodbye! 👋 It was great chatting. Feel free to come back anytime!",
  "See you! 👋 Good luck, and don't forget to check out Dikshant's projects on GitHub!",
  "Bye! 😊 Thanks for stopping by. Reach out anytime at dikshant.r.athawale@gmail.com!",
];

// ---------------------------------------------------------------------------
// TEXT PROCESSING UTILITIES
// ---------------------------------------------------------------------------

/** Normalize and tokenize user input */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s+#./-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

/** Extract meaningful tokens (remove stop words) */
function extractKeywords(text: string): string[] {
  return tokenize(text).filter((w) => !STOP_WORDS.has(w));
}

/** Simple Levenshtein distance for fuzzy matching */
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/** Check if word A is fuzzy-close to word B */
function isFuzzyMatch(a: string, b: string, threshold = 2): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > threshold) return false;
  return levenshtein(a, b) <= threshold;
}

// ---------------------------------------------------------------------------
// SCORING ENGINE
// ---------------------------------------------------------------------------

interface ScoredResult {
  qa: QAPair;
  score: number;
}

function scoreMatch(query: string, qa: QAPair): number {
  const lower = query.toLowerCase().trim();
  const queryTokens = tokenize(lower);
  const queryKeywords = extractKeywords(lower);

  let score = 0;

  // 1. Exact question match (highest priority)
  if (lower === qa.question.toLowerCase()) {
    score += 100;
  }

  // 2. Query contains the question or vice versa
  if (lower.includes(qa.question.toLowerCase()) || qa.question.toLowerCase().includes(lower)) {
    score += 50;
  }

  // 3. Alias matching — check if query closely matches any alias
  for (const alias of qa.aliases) {
    const aliasLower = alias.toLowerCase();
    if (lower === aliasLower) {
      score += 90;
    } else if (lower.includes(aliasLower) || aliasLower.includes(lower)) {
      score += 45;
    } else {
      // Check word overlap with alias
      const aliasWords = tokenize(aliasLower);
      const overlap = aliasWords.filter((w) => queryTokens.includes(w)).length;
      if (overlap > 0 && overlap >= aliasWords.length * 0.6) {
        score += 30 + overlap * 5;
      }
    }
  }

  // 4. Keyword matching — highest weight for exact matches
  for (const keyword of qa.keywords) {
    const kwLower = keyword.toLowerCase();
    const kwTokens = kwLower.split(/\s+/);

    // Multi-word keyword phrase match
    if (kwTokens.length > 1 && lower.includes(kwLower)) {
      score += 25;
    }

    // Single keyword token matches
    for (const kwt of kwTokens) {
      for (const qt of queryKeywords) {
        if (qt === kwt) {
          score += 15;
        } else if (qt.includes(kwt) || kwt.includes(qt)) {
          score += 8;
        } else if (isFuzzyMatch(qt, kwt, 1)) {
          score += 5;
        }
      }
    }
  }

  // 5. Question word overlap
  const questionWords = extractKeywords(qa.question);
  const wordOverlap = questionWords.filter((w) =>
    queryKeywords.some((qk) => qk === w || isFuzzyMatch(qk, w, 1))
  ).length;
  score += wordOverlap * 3;

  return score;
}

// ---------------------------------------------------------------------------
// CONTEXTUAL FALLBACK — when no great match, use category context
// ---------------------------------------------------------------------------

function generateContextualFallback(query: string): string {
  const lower = query.toLowerCase();

  // Try to find the best category match
  const categoryKeywords: Record<string, string[]> = {
    personal: ["name", "email", "phone", "contact", "about", "who", "introduce", "self"],
    education: ["education", "college", "school", "degree", "study", "university", "academic", "hsc", "ssc"],
    skills: ["skill", "technology", "language", "frontend", "backend", "database", "tool", "know", "proficient"],
    projects: ["project", "built", "developed", "created", "work", "erp", "portfolio"],
    certifications: ["certification", "certificate", "course", "aws", "coursera", "certified"],
    experience: ["experience", "internship", "job", "work", "industry", "professional", "extracurricular"],
    strengths: ["strength", "weakness", "strong", "weak", "improve", "good at"],
    career: ["career", "goal", "future", "plan", "aspiration", "ambition"],
    hobbies: ["hobby", "interest", "fun", "passion", "free time"],
    summary: ["summary", "overview", "resume", "profile", "cv"],
  };

  let bestCategory = "";
  let bestCatScore = 0;

  for (const [cat, keys] of Object.entries(categoryKeywords)) {
    const catScore = keys.filter((k) => lower.includes(k)).length;
    if (catScore > bestCatScore) {
      bestCatScore = catScore;
      bestCategory = cat;
    }
  }

  if (bestCategory && bestCatScore > 0) {
    // Return a merged answer from all QAs in that category
    const categoryQAs = chatbotKnowledge.filter((qa) => qa.category === bestCategory);
    if (categoryQAs.length > 0) {
      const label = categoryLabels[bestCategory] || bestCategory;
      const topAnswer = categoryQAs[0].answer;
      return `Here's what I know about Dikshant's ${label.toLowerCase()}:\n\n${topAnswer}`;
    }
  }

  return `That's a great question! While I don't have a specific answer for that, here's a quick overview of Dikshant:\n\nHe's a Full Stack Developer (React, Node.js, Express.js, MySQL) graduating in 2026 from HVPM College, Amravati. His flagship project is a College ERP system with real-time sync, JWT auth, and a polished React + TypeScript UI.\n\nTry asking about his **skills**, **projects**, **education**, **certifications**, **career goals**, or **contact info** for detailed answers! 😊`;
}

// ---------------------------------------------------------------------------
// PUBLIC API — main entry point
// ---------------------------------------------------------------------------

/** Conversation context for follow-up handling */
let lastCategory = "";

export function getChatResponse(userInput: string): string {
  const trimmed = userInput.trim();
  if (!trimmed) return "Could you say that again? I didn't catch anything. 🤔";

  const lower = trimmed.toLowerCase();

  // --- Check greetings ---
  for (const greeting of GREETING_PATTERNS) {
    if (lower === greeting || lower.startsWith(greeting + " ") || lower.startsWith(greeting + "!")) {
      return GREETING_RESPONSES[Math.floor(Math.random() * GREETING_RESPONSES.length)];
    }
  }

  // --- Check thanks ---
  for (const thanks of THANKS_PATTERNS) {
    if (lower.includes(thanks)) {
      return THANKS_RESPONSES[Math.floor(Math.random() * THANKS_RESPONSES.length)];
    }
  }

  // --- Check bye ---
  for (const bye of BYE_PATTERNS) {
    if (lower.includes(bye)) {
      return BYE_RESPONSES[Math.floor(Math.random() * BYE_RESPONSES.length)];
    }
  }

  // --- Score all Q&A pairs ---
  const scored: ScoredResult[] = chatbotKnowledge
    .map((qa) => ({ qa, score: scoreMatch(trimmed, qa) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  // --- If good match found ---
  if (scored.length > 0 && scored[0].score >= 10) {
    const best = scored[0];
    lastCategory = best.qa.category;
    return best.qa.answer;
  }

  // --- Follow-up detection: if last message was in a category, check same category ---
  if (lastCategory) {
    const categoryQAs = chatbotKnowledge.filter((qa) => qa.category === lastCategory);
    const categoryScored = categoryQAs
      .map((qa) => ({ qa, score: scoreMatch(trimmed, qa) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score);

    if (categoryScored.length > 0 && categoryScored[0].score >= 5) {
      return categoryScored[0].qa.answer;
    }
  }

  // --- Contextual fallback ---
  const fallback = generateContextualFallback(trimmed);
  return fallback;
}

/**
 * Get suggested quick-reply buttons based on context
 */
export function getSuggestions(lastBotCategory?: string): string[] {
  const defaults = [
    "Tell me about yourself",
    "What are your skills?",
    "Your projects",
    "Education",
    "Certifications",
    "Contact info",
  ];

  if (!lastBotCategory) return defaults.slice(0, 4);

  // Suggest related follow-up questions
  const followUps: Record<string, string[]> = {
    personal: ["What are your skills?", "Your projects", "Career goals"],
    education: ["Which college?", "Your degree", "Certifications"],
    skills: ["Frontend skills", "Backend skills", "Database skills", "Your projects"],
    projects: ["College ERP details", "Authentication", "Real-time features", "Tech stack"],
    certifications: ["AWS certification", "AI certifications", "Python course"],
    experience: ["Extracurricular activities", "Your projects", "Career goals"],
    strengths: ["Your weaknesses", "Career goals", "Why hire you?"],
    career: ["Why CS?", "Open to opportunities?", "Your strengths"],
    hobbies: ["Tech interests", "Your skills", "Career goals"],
    summary: ["Your projects", "Technical skills", "Why hire you?"],
  };

  return followUps[lastBotCategory] || defaults.slice(0, 4);
}

/** Get current conversation category for suggestion context */
export function getLastCategory(): string {
  return lastCategory;
}
