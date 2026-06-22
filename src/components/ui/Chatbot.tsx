"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const botResponses: Record<string, string> = {
  hello: "Hey! 👋 I'm Dikshant's portfolio assistant. Ask me about his skills, projects, or experience!",
  hi: "Hey! 👋 I'm Dikshant's portfolio assistant. Ask me about his skills, projects, or experience!",
  skills:
    "Dikshant is a full stack developer skilled in React, Node.js, Express.js, MySQL, TypeScript, TailwindCSS, Docker, and Git. He has strong foundations in DSA, OOP, and database design.",
  projects:
    "His flagship project is a College ERP system — a full-stack academic management platform built with React (TypeScript), Node.js, MySQL, and Socket.IO featuring real-time sync, JWT auth, and role-based access. He also built this portfolio website!",
  experience:
    "Dikshant is a final-year CSE student (2022-2026) at HVPM College, Amravati. He has hands-on experience building end-to-end web applications — from responsive React interfaces to RESTful APIs and relational databases.",
  contact:
    "You can reach Dikshant at dikshant.r.athawale@gmail.com or call +91-7719876877. Find him on GitHub and LinkedIn too!",
  education:
    "Dikshant is pursuing B.E. in Computer Science Engineering at HVPM College under SGBAU (2022-2026). He completed HSC from Vidyabharti Mahavidyalaya (2022) and SSC from Golden Kids High School (2020).",
  backend:
    "On the backend, Dikshant works with Node.js, Express.js, RESTful API design, MySQL schema design, query optimization, JWT authentication, and Socket.IO for real-time features.",
  frontend:
    "On the frontend, Dikshant builds with React, TypeScript, TailwindCSS, HTML5, CSS3, and modern JavaScript (ES6+). He uses tools like shadcn/ui, Framer Motion, and Recharts.",
  certifications:
    "He has certifications from AWS Training & Certification (AI Agents), NxtWave (Generative AI), and University of Michigan via Coursera (Python for Everybody).",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(botResponses)) {
    if (lower.includes(key)) return value;
  }
  return "Great question! I'm a simple assistant for now. Try asking about Dikshant's skills, projects, education, certifications, or contact info! 😊";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hi! 👋 I'm Dikshant's portfolio assistant. Ask me about his skills, projects, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    const botMsg: Message = { role: "bot", content: getBotResponse(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Toggle button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 sm:bottom-8 sm:left-8 z-50 w-14 h-14 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-110 transition-all"
            aria-label="Open chatbot"
          >
            <MessageCircle size={24} />
          </button>
        )}

      {/* Chat window */}
        {isOpen && (
          <div
            className="hero-enter fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 sm:inset-x-auto sm:bottom-8 sm:left-8 w-auto sm:w-96 max-h-[calc(100dvh-1.5rem)] rounded-2xl border border-white/[0.1] bg-[#111118]/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-gradient-to-r from-indigo-500/10 to-violet-500/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                  DA
                </div>
                <div>
                  <p className="text-primary text-sm font-semibold">Portfolio Assistant</p>
                  <p className="text-xs text-emerald-400">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-white/[0.06] transition-colors"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[min(18rem,45dvh)] overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`terminal-line-enter flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-accent-primary text-white rounded-br-md"
                        : "bg-white/[0.06] text-secondary rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.06] p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Dikshant..."
                  className="min-w-0 flex-1 min-h-11 px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-primary placeholder-white/20 text-sm focus:outline-none focus:border-accent-primary/50 transition-all"
                />
                <button
                  onClick={handleSend}
                  className="w-11 h-11 flex-shrink-0 inline-flex items-center justify-center rounded-xl bg-accent-primary text-white hover:bg-accent-primary/90 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
