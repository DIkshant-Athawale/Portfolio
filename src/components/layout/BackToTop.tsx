"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 inline-flex items-center justify-center rounded-full bg-accent-primary text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-110 active:scale-95 transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
          }`}
          aria-label="Back to top"
          aria-hidden={!isVisible}
          tabIndex={isVisible ? 0 : -1}
        >
          <ArrowUp size={20} />
        </button>
  );
}
