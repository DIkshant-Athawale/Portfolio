"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { getChatResponse, getSuggestions, getLastCategory } from "@/lib/chatEngine";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hi! 👋 I'm Dikshant's AI interview assistant. Ask me anything about his skills, projects, education, experience, or career goals — I'll answer like a personal interview coach!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(getSuggestions());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = useCallback(
    (text?: string) => {
      const msg = (text || input).trim();
      if (!msg || isTyping) return;

      const userMsg: Message = { role: "user", content: msg };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      // Simulate brief thinking delay for natural feel
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        const response = getChatResponse(msg);
        const botMsg: Message = { role: "bot", content: response };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);

        // Update suggestions based on conversation context
        const category = getLastCategory();
        setSuggestions(getSuggestions(category));
      }, delay);
    },
    [input, isTyping]
  );

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      handleSend(suggestion);
    },
    [handleSend]
  );

  // Format bot messages: convert **text** to bold spans
  const formatMessage = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-primary font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Handle newlines
      return part.split("\n").map((line, j) => (
        <span key={`${i}-${j}`}>
          {j > 0 && <br />}
          {line}
        </span>
      ));
    });
  };

  return (
    <>
      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 sm:bottom-8 sm:left-8 z-50 w-14 h-14 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-110 transition-all group"
          aria-label="Open chatbot"
          id="chatbot-toggle"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-indigo-500/30 animate-ping pointer-events-none" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="hero-enter fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 sm:inset-x-auto sm:bottom-8 sm:left-8 w-auto sm:w-[26rem] max-h-[calc(100dvh-1.5rem)] rounded-2xl border border-white/[0.1] bg-[#111118]/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden flex flex-col"
          id="chatbot-window"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-gradient-to-r from-indigo-500/10 to-violet-500/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-indigo-500/20">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-primary text-sm font-semibold">
                  Interview Assistant
                </p>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Online — Ask me anything
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-white/[0.06] transition-colors"
              aria-label="Close chatbot"
              id="chatbot-close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3 scrollbar-thin" id="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`terminal-line-enter flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent-primary text-white rounded-br-md"
                      : "bg-white/[0.06] text-secondary rounded-bl-md"
                  }`}
                >
                  {msg.role === "bot" ? formatMessage(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start terminal-line-enter">
                <div className="bg-white/[0.06] text-secondary rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick-reply suggestions */}
          {!isTyping && messages.length < 6 && (
            <div className="flex-shrink-0 px-3 pb-2 flex flex-wrap gap-1.5">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/30 hover:text-indigo-200 transition-all"
                  id={`suggestion-${i}`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/[0.06] p-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Dikshant..."
                disabled={isTyping}
                className="min-w-0 flex-1 min-h-11 px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-primary placeholder-white/20 text-sm focus:outline-none focus:border-accent-primary/50 transition-all disabled:opacity-50"
                id="chatbot-input"
              />
              <button
                onClick={() => handleSend()}
                disabled={isTyping || !input.trim()}
                className="w-11 h-11 flex-shrink-0 inline-flex items-center justify-center rounded-xl bg-accent-primary text-white hover:bg-accent-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send message"
                id="chatbot-send"
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
