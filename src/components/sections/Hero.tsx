"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send, FolderOpen } from "lucide-react";
import TypingAnimation from "@/components/ui/TypingAnimation";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { personal } from "@/data/personal";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles */}
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/15 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
            Open to Opportunities 🚀
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight"
        >
          {personal.heroHeading}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 text-xl sm:text-2xl md:text-3xl text-secondary font-medium"
        >
          <TypingAnimation words={personal.typingRoles} className="text-accent-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {personal.heroIntro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
          >
            <FolderOpen size={18} />
            View Projects
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-primary font-medium hover:bg-white/[0.04] transition-all"
          >
            <Send size={18} />
            Contact Me
          </button>
          <a
            href={personal.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-secondary font-medium hover:text-primary hover:bg-white/[0.04] transition-all"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Terminal snippet */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-16 max-w-lg mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d1117] text-left shadow-2xl shadow-indigo-500/5">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[10px] text-white/30 font-mono">app.ts</span>
            </div>
            <div className="p-4 font-mono text-xs leading-relaxed">
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
                <span className="text-amber-300">&apos;Backend Developer&apos;</span>
                <span className="text-white/40">,</span>
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">passion</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-amber-300">&apos;Building Scalable Systems&apos;</span>
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
          className="mt-16"
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
