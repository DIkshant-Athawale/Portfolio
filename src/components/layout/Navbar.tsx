"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import DownloadResumeButton from "@/components/ui/DownloadResumeButton";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const nextScrolled = window.scrollY > 50;
        setIsScrolled((current) =>
          current === nextScrolled ? current : nextScrolled
        );
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-nav-bg backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="min-h-11 inline-flex items-center font-heading font-bold text-lg sm:text-xl text-primary hover:text-accent-primary transition-colors"
            >
              <span className="text-accent-primary">&lt;</span>
              {personal.initials}
              <span className="text-accent-primary">/&gt;</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href
                      ? "text-accent-primary bg-accent-primary/10"
                      : "text-secondary hover:text-primary hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-lg text-secondary hover:text-primary hover:bg-white/[0.04] transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Resume */}
              <DownloadResumeButton
                className="min-h-11 ml-3 px-4 py-2 text-sm font-medium rounded-lg bg-accent-primary text-white hover:bg-accent-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Resume
              </DownloadResumeButton>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-white/[0.04]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-white/[0.04]"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
          <div
            className="mobile-menu fixed inset-0 z-40 md:hidden"
            data-open={mobileOpen}
            role="dialog"
            aria-modal={mobileOpen}
            aria-hidden={!mobileOpen}
            inert={!mobileOpen}
            aria-label="Mobile navigation"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div
              id="mobile-navigation"
              className="mobile-menu-panel absolute right-0 top-0 bottom-0 w-[min(85vw,22rem)] bg-nav-bg border-l border-white/[0.06] px-4 sm:px-6 pt-20 pb-[max(1.5rem,env(safe-area-inset-bottom))] overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`min-h-12 px-4 py-3 text-left text-base font-medium rounded-lg transition-all ${
                      activeSection === link.href
                        ? "text-accent-primary bg-accent-primary/10"
                        : "text-secondary hover:text-primary hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <DownloadResumeButton
                  onDownloadSuccess={() => setMobileOpen(false)}
                  className="min-h-12 mt-4 px-4 py-3 text-center text-base font-medium rounded-lg bg-accent-primary text-white hover:bg-accent-primary/90"
                >
                  Download Resume
                </DownloadResumeButton>
              </div>
            </div>
          </div>
    </>
  );
}
