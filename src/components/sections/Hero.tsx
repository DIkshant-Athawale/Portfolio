"use client";

import { motion } from "framer-motion";
import { ArrowDown, Send, FolderOpen } from "lucide-react";
import TypingAnimation from "@/components/ui/TypingAnimation";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import DownloadResumeButton from "@/components/ui/DownloadResumeButton";
import { personal } from "@/data/personal";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Particles */}
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-24 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/20 rounded-full blur-[90px] sm:blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-24 sm:-right-32 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/15 rounded-full blur-[90px] sm:blur-[120px] animate-pulse-slow animation-delay-2000" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block max-w-full px-3.5 sm:px-4 py-1.5 mb-5 sm:mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
            Open to Opportunities 🚀
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[clamp(2.25rem,11vw,4.5rem)] font-heading font-bold text-primary leading-[1.08] break-words"
        >
          {personal.heroHeading}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 sm:mt-5 min-h-[2.25rem] text-[clamp(1.15rem,5vw,1.875rem)] text-secondary font-medium leading-snug"
        >
          <TypingAnimation words={personal.typingRoles} className="text-accent-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-5 sm:mt-6 text-[clamp(0.95rem,3.5vw,1.125rem)] text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {personal.heroIntro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="group min-h-12 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-white font-medium hover:bg-accent-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
          >
            <FolderOpen size={18} />
            View Projects
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="min-h-12 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-primary font-medium hover:bg-white/[0.04] active:scale-[0.98] transition-all"
          >
            <Send size={18} />
            Contact Me
          </button>
          <DownloadResumeButton
            className="min-h-12 px-6 py-3 rounded-xl text-secondary font-medium hover:text-primary hover:bg-white/[0.04] hover:-translate-y-0.5"
          >
            Download Resume
          </DownloadResumeButton>
        </motion.div>

        {/* Terminal snippet */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-10 sm:mt-14 max-w-lg mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d1117] text-left shadow-2xl shadow-indigo-500/5">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[10px] text-white/30 font-mono">app.ts</span>
            </div>
            <div className="p-3 sm:p-4 font-mono text-[10px] min-[380px]:text-xs leading-relaxed break-words">
              <div>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-white/60">=</span>{" "}
                <span className="text-white/40">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">name</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-amber-300">&apos;Dikshant Athawale&apos;</span>
                <span className="text-white/40">,</span>
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">role</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-amber-300">&apos;Full Stack Developer&apos;</span>
                <span className="text-white/40">,</span>
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">passion</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-amber-300">&apos;Building End-to-End Apps&apos;</span>
                <span className="text-white/40">,</span>
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">status</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-amber-300">&apos;Open to Opportunities&apos;</span>
              </div>
              <div>
                <span className="text-white/40">{"}"}</span>
                <span className="text-white/40">;</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 sm:mt-14 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer text-white/20 hover:text-white/40 transition-colors"
            onClick={() => handleScroll("#about")}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
