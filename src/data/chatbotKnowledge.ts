// =============================================================================
// Chatbot Knowledge Base
// Extracted from: resume_qa.pdf & Dikshant_Athawale_Resume_FullStack.pdf
// Covers: Personal Info, Education, Skills, Projects, Certifications,
//         Experience, Strengths/Weaknesses, Career Goals, Hobbies
// =============================================================================

export interface QAPair {
  id: string;
  category: string;
  /** Primary question text */
  question: string;
  /** Alternate phrasings / synonyms that should trigger the same answer */
  aliases: string[];
  /** Keywords that help match user input to this Q&A */
  keywords: string[];
  /** The answer — conversational, human-like tone */
  answer: string;
}

// ---------------------------------------------------------------------------
// PERSONAL INTRODUCTION
// ---------------------------------------------------------------------------
const personalIntro: QAPair[] = [
  {
    id: "intro-1",
    category: "personal",
    question: "Tell me about yourself",
    aliases: [
      "introduce yourself",
      "who are you",
      "describe yourself",
      "about you",
      "what should i know about you",
      "give me an introduction",
      "self introduction",
      "walk me through your background",
      "brief introduction",
      "about dikshant",
      "who is dikshant",
    ],
    keywords: ["tell", "about", "yourself", "introduce", "who", "background", "introduction"],
    answer:
      "I'm Dikshant Ramesh Athawale — a Full Stack Developer and final-year Computer Science Engineering student at HVPM College, Amravati (affiliated to SGBAU, 2022–2026). I build end-to-end web applications using React, Node.js, Express.js, and MySQL. My flagship project is a College ERP system — a role-based academic management platform featuring real-time sync with Socket.IO, JWT authentication, and a polished React + TypeScript frontend. I'm passionate about clean architecture, scalable APIs, and writing maintainable code across the entire stack.",
  },
  {
    id: "intro-2",
    category: "personal",
    question: "What is your full name?",
    aliases: ["your name", "what's your name", "name please", "what do people call you"],
    keywords: ["name", "full name", "called"],
    answer: "My full name is Dikshant Ramesh Athawale.",
  },
  {
    id: "intro-3",
    category: "personal",
    question: "What is your current role?",
    aliases: [
      "what do you do",
      "your designation",
      "your title",
      "job title",
      "your role",
      "what is your profession",
      "what are you working as",
    ],
    keywords: ["role", "designation", "title", "profession", "do you do", "working as"],
    answer:
      "I'm a Full Stack Developer. I specialize in building complete web applications — from responsive React interfaces on the frontend to RESTful APIs and relational databases on the backend — using technologies like Node.js, Express.js, and MySQL.",
  },
  {
    id: "intro-4",
    category: "personal",
    question: "What is your email address?",
    aliases: ["email", "mail id", "email id", "how can i email you", "contact email"],
    keywords: ["email", "mail"],
    answer: "You can reach me at dikshant.r.athawale@gmail.com.",
  },
  {
    id: "intro-5",
    category: "personal",
    question: "What is your phone number?",
    aliases: ["phone", "mobile number", "contact number", "call you", "phone number"],
    keywords: ["phone", "mobile", "number", "call"],
    answer: "My phone number is +91-7719876877.",
  },
  {
    id: "intro-6",
    category: "personal",
    question: "Which city are you from?",
    aliases: [
      "where are you from",
      "your location",
      "where do you live",
      "hometown",
      "city",
      "based in",
      "where are you based",
      "your address",
    ],
    keywords: ["city", "location", "where", "from", "live", "hometown", "based", "address"],
    answer: "I'm from Amravati, India.",
  },
  {
    id: "intro-7",
    category: "personal",
    question: "How can I contact you?",
    aliases: [
      "contact info",
      "contact details",
      "how to reach you",
      "get in touch",
      "reach you",
      "connect with you",
    ],
    keywords: ["contact", "reach", "touch", "connect"],
    answer:
      "You can reach me via email at dikshant.r.athawale@gmail.com, or call me at +91-7719876877. I'm also on LinkedIn (linkedin.com/in/dikshant-athawale-374763213) and GitHub (github.com/DIkshant-Athawale). Feel free to connect!",
  },
  {
    id: "intro-8",
    category: "personal",
    question: "What is your LinkedIn profile?",
    aliases: ["linkedin", "linkedin url", "linkedin link"],
    keywords: ["linkedin"],
    answer:
      "You can find me on LinkedIn at linkedin.com/in/dikshant-athawale-374763213 — feel free to connect!",
  },
  {
    id: "intro-9",
    category: "personal",
    question: "What is your GitHub profile?",
    aliases: ["github", "github url", "github link", "github account"],
    keywords: ["github"],
    answer:
      "My GitHub is github.com/DIkshant-Athawale — you can check out my projects and contributions there!",
  },
];

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------
const educationQA: QAPair[] = [
  {
    id: "edu-1",
    category: "education",
    question: "What is your educational background?",
    aliases: [
      "tell me about your education",
      "education details",
      "academic background",
      "qualifications",
      "your studies",
      "where did you study",
      "educational qualifications",
    ],
    keywords: ["education", "study", "academic", "qualification", "school", "college", "degree", "studied"],
    answer:
      "I'm pursuing a B.E. in Computer Science Engineering (CSE) from HVPM College of Engineering and Technology, affiliated to Sant Gadge Baba Amravati University (SGBAU), graduating in 2026. Before that, I completed my Higher Secondary Certificate (HSC) in Science from Vidyabharti Mahavidyalaya, Amravati in March 2022, and my Secondary School Certificate (SSC) from Golden Kids High School, Amravati in March 2020.",
  },
  {
    id: "edu-2",
    category: "education",
    question: "What is your degree?",
    aliases: ["what degree are you pursuing", "your degree", "engineering degree", "bachelor degree"],
    keywords: ["degree", "bachelor", "engineering", "be", "btech"],
    answer:
      "I'm pursuing a Bachelor of Engineering (B.E.) in Computer Science Engineering (CSE) from HVPM College of Engineering and Technology, affiliated to Sant Gadge Baba Amravati University (SGBAU).",
  },
  {
    id: "edu-3",
    category: "education",
    question: "Which college did you attend?",
    aliases: [
      "your college",
      "college name",
      "which college",
      "where are you studying",
      "engineering college",
    ],
    keywords: ["college", "institute", "institution"],
    answer:
      "I'm studying at HVPM College of Engineering and Technology, Amravati — it's affiliated to Sant Gadge Baba Amravati University (SGBAU).",
  },
  {
    id: "edu-4",
    category: "education",
    question: "Which university is your college affiliated with?",
    aliases: ["your university", "university name", "affiliated university"],
    keywords: ["university", "affiliated", "sgbau"],
    answer: "My college is affiliated to Sant Gadge Baba Amravati University (SGBAU).",
  },
  {
    id: "edu-5",
    category: "education",
    question: "When did your degree start and end?",
    aliases: [
      "graduation year",
      "when do you graduate",
      "year of graduation",
      "batch",
      "passing year",
      "when will you graduate",
    ],
    keywords: ["graduate", "graduation", "batch", "passing", "year", "start", "end"],
    answer:
      "My B.E. program runs from 2022 to 2026. I'm currently in my final year and will be graduating in 2026.",
  },
  {
    id: "edu-6",
    category: "education",
    question: "Which school did you complete HSC from?",
    aliases: ["hsc school", "12th school", "higher secondary", "12th grade", "hsc details"],
    keywords: ["hsc", "12th", "higher secondary", "twelfth"],
    answer:
      "I completed my Higher Secondary Certificate (HSC) in Science from Vidyabharti Mahavidyalaya, Amravati in March 2022.",
  },
  {
    id: "edu-7",
    category: "education",
    question: "Which school did you complete SSC from?",
    aliases: ["ssc school", "10th school", "secondary school", "10th grade", "ssc details"],
    keywords: ["ssc", "10th", "secondary school", "tenth"],
    answer:
      "I completed my Secondary School Certificate (SSC) from Golden Kids High School, Amravati in March 2020.",
  },
];

// ---------------------------------------------------------------------------
// TECHNICAL SKILLS
// ---------------------------------------------------------------------------
const skillsQA: QAPair[] = [
  {
    id: "skill-1",
    category: "skills",
    question: "What are your technical skills?",
    aliases: [
      "your skills",
      "what skills do you have",
      "technical expertise",
      "tech stack",
      "what technologies do you know",
      "what can you do technically",
      "skill set",
      "your abilities",
    ],
    keywords: ["skills", "technical", "expertise", "technologies", "tech stack", "abilities", "skillset"],
    answer:
      "I have a well-rounded full stack skill set:\n\n• **Languages**: Java, JavaScript (ES6+), Python, C\n• **Frontend**: React, HTML5, CSS3, TailwindCSS, TypeScript\n• **Backend**: Node.js, Express.js, RESTful API Design, JWT Authentication, Socket.IO\n• **Databases**: MySQL, SQL, JDBC, Database Design & Query Optimization\n• **Tools & DevOps**: Git, GitHub, VS Code, Docker (fundamentals), Antigravity\n• **CS Fundamentals**: Data Structures & Algorithms, OOP, Computer Networks, Operating Systems\n• **Soft Skills**: Problem Solving, Team Collaboration, Communication",
  },
  {
    id: "skill-2",
    category: "skills",
    question: "What programming languages do you know?",
    aliases: [
      "languages you know",
      "coding languages",
      "programming languages",
      "which languages",
    ],
    keywords: ["programming", "languages", "coding", "language"],
    answer:
      "I'm proficient in Java, JavaScript (ES6+), Python, and C. JavaScript is my primary language for full stack development, while Java is my go-to for DSA and OOP concepts.",
  },
  {
    id: "skill-3",
    category: "skills",
    question: "What frontend technologies do you know?",
    aliases: [
      "frontend skills",
      "front end",
      "client side",
      "ui technologies",
      "what do you use for frontend",
    ],
    keywords: ["frontend", "front-end", "front end", "client", "ui", "react", "html", "css"],
    answer:
      "On the frontend, I work with React, TypeScript, HTML5, CSS3, TailwindCSS, and modern JavaScript (ES6+). I also use tools like shadcn/ui (Radix primitives), Framer Motion for animations, and Recharts for data visualization. I focus on building responsive, mobile-first interfaces with smooth UX.",
  },
  {
    id: "skill-4",
    category: "skills",
    question: "What backend technologies do you know?",
    aliases: [
      "backend skills",
      "back end",
      "server side",
      "api skills",
      "what do you use for backend",
    ],
    keywords: ["backend", "back-end", "back end", "server", "api", "node", "express"],
    answer:
      "On the backend, I work with Node.js, Express.js, RESTful API design, MySQL schema design, query optimization, JWT authentication with httpOnly refresh-token cookies and bcrypt hashing, and Socket.IO for real-time features. I build scalable, secure server-side applications with clean architecture.",
  },
  {
    id: "skill-5",
    category: "skills",
    question: "Which databases do you know?",
    aliases: [
      "database skills",
      "db knowledge",
      "sql skills",
      "database experience",
      "which database",
    ],
    keywords: ["database", "db", "sql", "mysql", "jdbc"],
    answer:
      "I work primarily with MySQL and SQL for relational database management. I have experience with JDBC for Java-based database connectivity, and I'm skilled in database design, schema optimization, and query optimization using techniques like indexing and connection pooling.",
  },
  {
    id: "skill-6",
    category: "skills",
    question: "What DevOps tools do you know?",
    aliases: [
      "devops skills",
      "tools you use",
      "development tools",
      "docker experience",
      "git experience",
    ],
    keywords: ["devops", "docker", "git", "tools", "version control"],
    answer:
      "I use Git and GitHub for version control and collaboration. I have fundamental knowledge of Docker for containerized environments. My primary IDE is VS Code, and I also use tools like Antigravity for AI-assisted development.",
  },
  {
    id: "skill-7",
    category: "skills",
    question: "What soft skills do you have?",
    aliases: [
      "interpersonal skills",
      "non-technical skills",
      "communication skills",
      "teamwork",
    ],
    keywords: ["soft skills", "interpersonal", "communication", "teamwork", "collaboration"],
    answer:
      "My key soft skills include Problem Solving (I enjoy breaking down complex problems into manageable components), Team Collaboration (I thrive in code-review-driven engineering teams), and Communication Skills (I can clearly articulate technical concepts to both technical and non-technical audiences).",
  },
  {
    id: "skill-8",
    category: "skills",
    question: "Do you know TypeScript?",
    aliases: ["typescript experience", "ts", "typescript skills"],
    keywords: ["typescript", "ts"],
    answer:
      "Yes! I use TypeScript extensively, especially in my React projects. My College ERP system was built with React and TypeScript — I appreciate the type safety, better developer experience, and maintainability that TypeScript brings to large codebases.",
  },
  {
    id: "skill-9",
    category: "skills",
    question: "Do you know React?",
    aliases: ["react experience", "react skills", "react developer"],
    keywords: ["react"],
    answer:
      "Absolutely! React is one of my core technologies. I've used it to build complex interfaces like my College ERP system's frontend — with React + TypeScript, Vite, TailwindCSS, shadcn/ui, Framer Motion animations, and Recharts data visualizations. I'm comfortable with hooks, context, state management, and component architecture.",
  },
  {
    id: "skill-10",
    category: "skills",
    question: "What CS fundamentals do you know?",
    aliases: [
      "computer science fundamentals",
      "core cs concepts",
      "dsa",
      "data structures",
      "algorithms",
      "oop",
    ],
    keywords: ["fundamentals", "dsa", "data structures", "algorithms", "oop", "cs concepts", "computer science"],
    answer:
      "I have strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, and Operating Systems. These fundamentals help me write efficient, well-structured code and make informed architectural decisions in my full-stack projects.",
  },
];

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
const projectsQA: QAPair[] = [
  {
    id: "proj-1",
    category: "projects",
    question: "What projects have you built?",
    aliases: [
      "your projects",
      "tell me about your projects",
      "project experience",
      "what have you built",
      "show me your work",
      "project portfolio",
      "list your projects",
    ],
    keywords: ["projects", "built", "work", "portfolio", "developed", "created"],
    answer:
      "I've built two major projects:\n\n1. **College ERP — Academic Management System** (Jan–Mar 2026): A full-stack, role-based academic management platform built with React (TypeScript), Node.js, Express.js, MySQL, and Socket.IO. It features real-time data sync, JWT authentication, attendance tracking, fee management, timetable scheduling, and an internal marks calculator.\n\n2. **Personal Portfolio Website** (June 2026): A responsive developer portfolio built with HTML5, CSS3, and JavaScript, achieving a 95+ Google Lighthouse performance score. Hosted on GitHub Pages with mobile-first design and smooth animations.",
  },
  {
    id: "proj-2",
    category: "projects",
    question: "What is your major project?",
    aliases: [
      "main project",
      "biggest project",
      "flagship project",
      "most important project",
      "college erp",
      "erp project",
      "tell me about college erp",
    ],
    keywords: ["major project", "main project", "biggest", "flagship", "erp", "college erp", "academic"],
    answer:
      "My flagship project is the **College ERP — Academic Management System**. It's a full-stack, role-based platform I built from scratch for students, faculty, and administrators.\n\n**Tech Stack**: React (TypeScript) + Vite on the frontend, Node.js/Express.js on the backend, MySQL database with connection pooling.\n\n**Key Features**:\n• Secure JWT authentication with httpOnly refresh-token cookies and bcrypt password hashing\n• Real-time data synchronization via Socket.IO — dashboards auto-update without page reloads\n• End-to-end workflows for attendance tracking, fee management, timetable scheduling\n• Configurable internal marks calculator combining assignment, test & attendance weights\n• Polished UI with shadcn/ui (Radix), Framer Motion animations & Recharts visualizations\n\nBuilt during Jan–Mar 2026 as my capstone project.",
  },
  {
    id: "proj-3",
    category: "projects",
    question: "What technologies were used in College ERP?",
    aliases: [
      "erp tech stack",
      "college erp technologies",
      "technologies in your main project",
    ],
    keywords: ["erp technologies", "erp tech", "erp stack"],
    answer:
      "The College ERP was built with: React (TypeScript) with Vite for the frontend, Node.js and Express.js for the backend, MySQL with connection pooling for the database, Socket.IO for real-time data sync, JWT with httpOnly refresh cookies for authentication, TailwindCSS, shadcn/ui (Radix), and Framer Motion for the UI, and Recharts for data visualization.",
  },
  {
    id: "proj-4",
    category: "projects",
    question: "What features did College ERP include?",
    aliases: [
      "erp features",
      "college erp functionality",
      "what does the erp do",
      "erp capabilities",
    ],
    keywords: ["erp features", "attendance", "fee management", "timetable", "marks calculator"],
    answer:
      "The College ERP includes a comprehensive set of features:\n• Role-based access control for students, faculty & administrators\n• Secure JWT authentication with httpOnly refresh-token cookies & bcrypt hashing\n• Real-time data synchronization via Socket.IO across all connected clients\n• Attendance tracking with automated workflows\n• Fee management system\n• Timetable scheduling\n• Configurable internal marks calculator (combining assignment, test & attendance weights)\n• Polished, animated UI with shadcn/ui, Framer Motion & Recharts visualizations",
  },
  {
    id: "proj-5",
    category: "projects",
    question: "Did you implement authentication in your projects?",
    aliases: [
      "authentication",
      "login system",
      "jwt",
      "security",
      "how did you handle auth",
      "user authentication",
    ],
    keywords: ["authentication", "auth", "jwt", "login", "security", "token", "bcrypt"],
    answer:
      "Yes! In my College ERP project, I implemented a robust authentication system using JWT access tokens and httpOnly refresh-token cookies. The system uses Axios interceptors for automatic silent token refresh when the access token expires, and bcrypt for secure password hashing. This ensures both security and a seamless user experience.",
  },
  {
    id: "proj-6",
    category: "projects",
    question: "Did you build any personal projects?",
    aliases: [
      "personal project",
      "portfolio website",
      "side projects",
      "personal website",
    ],
    keywords: ["personal project", "portfolio website", "side project", "personal website"],
    answer:
      "Yes! I built a Personal Portfolio Website using HTML5, CSS3, JavaScript, and deployed it on GitHub Pages. It showcases my projects, technical skills, and contact information with a mobile-first responsive design. The site achieved a 95+ Google Lighthouse performance score with smooth CSS animations and cross-browser compatibility.",
  },
  {
    id: "proj-7",
    category: "projects",
    question: "What performance score did your portfolio achieve?",
    aliases: [
      "lighthouse score",
      "performance score",
      "portfolio performance",
    ],
    keywords: ["lighthouse", "performance score", "95"],
    answer:
      "My portfolio website achieved a 95+ Google Lighthouse performance score. I achieved this through mobile-first responsive design, optimized assets, semantic HTML structure, and efficient CSS — ensuring fast load times and excellent user experience across all devices.",
  },
  {
    id: "proj-8",
    category: "projects",
    question: "How did you handle real-time features?",
    aliases: [
      "real-time",
      "socket.io",
      "websockets",
      "real time sync",
      "live updates",
    ],
    keywords: ["real-time", "realtime", "socket", "websocket", "live", "sync"],
    answer:
      "In my College ERP project, I engineered real-time data synchronization using Socket.IO. The system automatically broadcasts database-change events on every mutating request, keeping all connected dashboards updated without page reloads. This means when a faculty member marks attendance, the student's dashboard reflects the change instantly.",
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS
// ---------------------------------------------------------------------------
const certificationsQA: QAPair[] = [
  {
    id: "cert-1",
    category: "certifications",
    question: "What certifications do you have?",
    aliases: [
      "your certifications",
      "certificates",
      "certified in",
      "any certifications",
      "professional certifications",
      "courses completed",
    ],
    keywords: ["certification", "certificate", "certified", "courses", "aws", "nxtwave", "coursera"],
    answer:
      "I hold three certifications:\n\n1. **AI Agents: Cognitive Upgrade and Business Efficiency** — AWS Training & Certification (2026)\n2. **AI for Students: Build Your Own Generative AI Model** — NxtWave (2025)\n3. **Python for Everybody** — University of Michigan via Coursera (2024)\n\nThese cover AI/ML concepts and Python programming fundamentals.",
  },
  {
    id: "cert-2",
    category: "certifications",
    question: "Do you have any AWS certification?",
    aliases: ["aws certificate", "aws training", "amazon certification"],
    keywords: ["aws", "amazon"],
    answer:
      "Yes! I completed 'AI Agents: Cognitive Upgrade and Business Efficiency' from AWS Training & Certification in 2026. It covered concepts around AI agents, cognitive architectures, and their business applications.",
  },
  {
    id: "cert-3",
    category: "certifications",
    question: "Do you have any AI/ML certifications?",
    aliases: ["ai certification", "machine learning", "generative ai", "ai certificate"],
    keywords: ["ai", "ml", "machine learning", "generative", "artificial intelligence"],
    answer:
      "Yes, I have two AI-related certifications:\n• **AI Agents: Cognitive Upgrade and Business Efficiency** from AWS Training & Certification (2026)\n• **AI for Students: Build Your Own Generative AI Model** from NxtWave (2025)\n\nThese gave me foundational knowledge of AI agents, generative AI models, and their practical applications.",
  },
  {
    id: "cert-4",
    category: "certifications",
    question: "Do you have a Python certification?",
    aliases: ["python course", "python certificate", "coursera python"],
    keywords: ["python certification", "python course", "coursera"],
    answer:
      "Yes! I completed 'Python for Everybody' from the University of Michigan through Coursera in 2024. It's a comprehensive course covering Python programming fundamentals, data structures, web scraping, and working with databases.",
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE & INTERNSHIPS
// ---------------------------------------------------------------------------
const experienceQA: QAPair[] = [
  {
    id: "exp-1",
    category: "experience",
    question: "Do you have any work experience?",
    aliases: [
      "work experience",
      "professional experience",
      "internship",
      "job experience",
      "have you worked anywhere",
      "industry experience",
      "internship experience",
    ],
    keywords: ["experience", "work", "internship", "job", "industry", "professional", "worked"],
    answer:
      "I'm a final-year CSE student (2022–2026) at HVPM College, Amravati. While I don't have formal industry internship experience yet, I've gained significant hands-on experience through building production-quality projects like my College ERP system — a full-stack academic management platform built with React, Node.js, MySQL, and Socket.IO. I've also been actively involved in my college technical club, participating in hackathons and mentoring junior students.",
  },
  {
    id: "exp-2",
    category: "experience",
    question: "What extracurricular activities have you done?",
    aliases: [
      "extracurricular",
      "activities",
      "clubs",
      "hackathons",
      "college activities",
      "co-curricular",
    ],
    keywords: ["extracurricular", "activities", "club", "hackathon", "volunteer", "code-a-thon"],
    answer:
      "I've been actively involved in campus tech activities:\n• **College Technical Club Member** — participated in hackathons, tech talks, and brainstorming sessions on emerging technologies\n• **Code-a-thon Volunteer** — mentored junior students on web development and version control concepts\n\nThese experiences helped me sharpen my communication, teamwork, and mentoring abilities.",
  },
];

// ---------------------------------------------------------------------------
// STRENGTHS & WEAKNESSES
// ---------------------------------------------------------------------------
const strengthsQA: QAPair[] = [
  {
    id: "str-1",
    category: "strengths",
    question: "What are your strengths?",
    aliases: [
      "your strengths",
      "strong points",
      "what are you good at",
      "best qualities",
      "key strengths",
      "positive traits",
    ],
    keywords: ["strengths", "strong", "good at", "qualities", "best", "positive"],
    answer:
      "My key strengths include:\n• **Full Stack Proficiency** — I can architect complete applications from frontend to backend\n• **Problem Solving** — I enjoy breaking complex problems into manageable components\n• **Quick Learner** — I pick up new technologies rapidly and apply them effectively\n• **Clean Code Advocate** — I'm committed to writing efficient, maintainable, well-documented code\n• **Team Collaboration** — I thrive in code-review-driven engineering teams\n• **Strong CS Fundamentals** — solid foundations in DSA, OOP, and database design help me make better architectural decisions",
  },
  {
    id: "str-2",
    category: "strengths",
    question: "What are your weaknesses?",
    aliases: [
      "your weaknesses",
      "weak points",
      "areas of improvement",
      "what do you struggle with",
      "shortcomings",
    ],
    keywords: ["weaknesses", "weak", "improvement", "struggle", "shortcoming"],
    answer:
      "I'd say my main area for improvement is that I sometimes dive too deep into perfecting code quality and architecture, which can slow down initial delivery. I'm actively working on finding the right balance between craftsmanship and pragmatic shipping. I'm also still building up my DevOps knowledge — I have Docker fundamentals down but want to deepen my experience with CI/CD pipelines and cloud deployment.",
  },
];

// ---------------------------------------------------------------------------
// CAREER GOALS
// ---------------------------------------------------------------------------
const careerQA: QAPair[] = [
  {
    id: "career-1",
    category: "career",
    question: "What are your career goals?",
    aliases: [
      "career plan",
      "future plans",
      "where do you see yourself",
      "career aspirations",
      "5 year plan",
      "long term goals",
      "what do you want to achieve",
      "professional goals",
    ],
    keywords: ["career", "goal", "future", "plan", "aspiration", "see yourself", "achieve", "ambition"],
    answer:
      "My short-term goal is to secure a full stack developer role where I can contribute to building scalable, real-world products while learning from experienced engineers. In the medium term, I want to deepen my expertise in system design, cloud architecture (AWS/GCP), and DevOps practices. Long-term, I aspire to become a senior/lead engineer who can architect end-to-end solutions, mentor junior developers, and contribute to open-source projects that make a real impact.",
  },
  {
    id: "career-2",
    category: "career",
    question: "Why did you choose computer science?",
    aliases: [
      "why cs",
      "why engineering",
      "why software development",
      "why did you become a developer",
      "motivation",
    ],
    keywords: ["why cs", "why computer", "chose", "choose", "motivation", "passion"],
    answer:
      "I've always been fascinated by how software can solve real-world problems at scale. Building my College ERP — which streamlined academic workflows for students, faculty, and admins — showed me the direct impact clean, well-engineered software can have. I love the creative problem-solving aspect of development and the endless opportunity to keep learning new technologies and patterns.",
  },
  {
    id: "career-3",
    category: "career",
    question: "Are you open to opportunities?",
    aliases: [
      "are you looking for a job",
      "available for hire",
      "seeking opportunities",
      "open to work",
      "job search",
      "available",
    ],
    keywords: ["opportunity", "hire", "available", "job", "open to work", "seeking"],
    answer:
      "Absolutely! I'm actively seeking full stack developer opportunities where I can apply my skills in React, Node.js, Express.js, and MySQL to build impactful products. I'm open to full-time roles, and I'm ready to hit the ground running. Feel free to reach out at dikshant.r.athawale@gmail.com!",
  },
];

// ---------------------------------------------------------------------------
// HOBBIES & PERSONAL INTERESTS
// ---------------------------------------------------------------------------
const hobbiesQA: QAPair[] = [
  {
    id: "hobby-1",
    category: "hobbies",
    question: "What are your hobbies?",
    aliases: [
      "your hobbies",
      "what do you do for fun",
      "interests",
      "personal interests",
      "free time",
      "leisure activities",
      "what do you enjoy",
      "passions",
    ],
    keywords: ["hobbies", "hobby", "fun", "interests", "free time", "leisure", "enjoy", "passion"],
    answer:
      "Outside of coding, I'm passionate about exploring emerging technologies like AI and cloud computing. I enjoy participating in hackathons and tech talks through my college technical club. I also like mentoring junior students in web development — teaching others helps me solidify my own understanding. I'm always tinkering with side projects to experiment with new tools and frameworks.",
  },
  {
    id: "hobby-2",
    category: "hobbies",
    question: "What are you passionate about in tech?",
    aliases: [
      "tech interests",
      "technology interests",
      "what excites you in tech",
    ],
    keywords: ["passionate", "tech interests", "excited", "fascinated"],
    answer:
      "I'm particularly passionate about building scalable APIs, clean architecture patterns, and real-time systems. I love the challenge of designing systems that are both performant and maintainable. I'm also excited about AI and its potential to transform developer workflows — I've earned certifications in AI from both AWS and NxtWave.",
  },
];

// ---------------------------------------------------------------------------
// PROFESSIONAL SUMMARY
// ---------------------------------------------------------------------------
const summaryQA: QAPair[] = [
  {
    id: "sum-1",
    category: "summary",
    question: "Give me your professional summary",
    aliases: [
      "professional summary",
      "resume summary",
      "profile summary",
      "career summary",
      "brief summary",
      "overview",
      "elevator pitch",
    ],
    keywords: ["summary", "overview", "profile", "brief", "elevator pitch"],
    answer:
      "Full stack developer with hands-on experience building end-to-end web applications — from responsive React interfaces to RESTful APIs and relational databases — using React, Node.js, Express.js, and MySQL. Backed by strong fundamentals in data structures, OOP, and database design, with working familiarity with Docker for containerized environments. A quick learner who thrives in collaborative, code-review-driven engineering teams and is committed to writing clean, efficient, and maintainable code across the entire stack.",
  },
  {
    id: "sum-2",
    category: "summary",
    question: "Why should we hire you?",
    aliases: [
      "why hire you",
      "what makes you different",
      "why are you the right fit",
      "what value do you bring",
      "why you",
      "what sets you apart",
    ],
    keywords: ["hire", "why you", "different", "right fit", "value", "sets apart", "stand out"],
    answer:
      "Three reasons:\n\n1. **Full Stack Capability** — I can independently build and ship complete features, from UI to API to database. My College ERP project proves I can architect production-quality systems with real-time sync, secure auth, and polished interfaces.\n\n2. **Strong Foundations** — My deep understanding of DSA, OOP, and database design means I write code that's not just functional, but efficient and scalable.\n\n3. **Growth Mindset** — I'm a quick learner committed to clean code and continuous improvement. I actively pursue certifications (AWS, AI), mentor peers, and stay current with industry best practices.\n\nI'm ready to contribute from day one and grow with the team.",
  },
];

// ---------------------------------------------------------------------------
// AGGREGATE EXPORT
// ---------------------------------------------------------------------------
export const chatbotKnowledge: QAPair[] = [
  ...personalIntro,
  ...educationQA,
  ...skillsQA,
  ...projectsQA,
  ...certificationsQA,
  ...experienceQA,
  ...strengthsQA,
  ...careerQA,
  ...hobbiesQA,
  ...summaryQA,
];

// Category labels for contextual awareness
export const categoryLabels: Record<string, string> = {
  personal: "Personal Introduction",
  education: "Education",
  skills: "Technical Skills",
  projects: "Projects",
  certifications: "Certifications",
  experience: "Experience & Internships",
  strengths: "Strengths & Weaknesses",
  career: "Career Goals",
  hobbies: "Hobbies & Interests",
  summary: "Professional Summary",
};
