import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personal } from "@/data/personal";

const socialLinks = [
  { href: personal.github, icon: Github, label: "GitHub" },
  { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-card-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col min-[420px]:flex-row items-center gap-1 min-[420px]:gap-3 text-center">
            <span className="font-heading font-bold text-lg text-primary">
              <span className="text-accent-primary">&lt;</span>
              {personal.initials}
              <span className="text-accent-primary">/&gt;</span>
            </span>
            <span className="hidden min-[420px]:inline text-secondary text-sm">|</span>
            <span className="text-secondary text-sm">{personal.tagline}</span>
          </div>

          {/* Social links */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-4" role="list">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-white/[0.06] transition-all"
                    aria-label={label}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-secondary text-sm flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-red-400 fill-red-400" aria-hidden="true" /> by{" "}
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
