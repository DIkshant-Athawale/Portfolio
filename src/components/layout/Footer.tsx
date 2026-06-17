"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-card-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-lg text-primary">
              <span className="text-accent-primary">&lt;</span>
              {personal.initials}
              <span className="text-accent-primary">/&gt;</span>
            </span>
            <span className="text-secondary text-sm">|</span>
            <span className="text-secondary text-sm">{personal.tagline}</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-white/[0.06] transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-white/[0.06] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-white/[0.06] transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-secondary text-sm flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> by{" "}
            <span className="text-primary font-medium">{personal.name}</span>
          </p>
          <p className="text-white/20 text-xs mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
