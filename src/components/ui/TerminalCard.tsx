"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const totalSteps = lines.length * 2;

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
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl shadow-indigo-500/5"
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
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-2 min-w-0"
              >
                <span className="text-emerald-400">❯</span>
                <span className="text-cyan-300 break-all">{line.cmd}</span>
              </motion.div>
            )}
            {visibleLines > i * 2 + 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-white/70 ml-5 mt-1 break-words"
              >
                {line.output}
              </motion.div>
            )}
          </div>
        ))}
        {isInView && visibleLines < totalSteps && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-2 h-4 bg-emerald-400"
          />
        )}
      </div>
    </motion.div>
  );
}
