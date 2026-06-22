"use client";

import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  cmd: string;
  output: string;
}

interface TerminalCardProps {
  lines: TerminalLine[];
  title?: string;
}

export default function TerminalCard({ lines, title = "terminal" }: TerminalCardProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const totalSteps = lines.length * 2;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { rootMargin: "100px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Only start the typing animation after the card scrolls into view
  useEffect(() => {
    if (!isInView) return;
    if (visibleLines >= totalSteps) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [isInView, visibleLines, totalSteps]);

  return (
    <div
      ref={containerRef}
      className="reveal rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl shadow-indigo-500/5"
      style={{ "--reveal-scale": "0.95", "--reveal-y": "0px" } as React.CSSProperties}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/40 font-mono">{title}</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-3 min-h-[250px] sm:min-h-[280px]">
        {lines.map((line, i) => (
          <div key={i}>
            {visibleLines > i * 2 && (
              <div
                className="terminal-line-enter flex items-start gap-2 min-w-0"
              >
                <span className="text-emerald-400">❯</span>
                <span className="text-cyan-300 break-all">{line.cmd}</span>
              </div>
            )}
            {visibleLines > i * 2 + 1 && (
              <div
                className="terminal-line-enter text-white/70 ml-5 mt-1 break-words"
              >
                {line.output}
              </div>
            )}
          </div>
        ))}
        {isInView && visibleLines < totalSteps && (
          <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
        )}
      </div>
    </div>
  );
}
