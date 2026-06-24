"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

type FormStatus = "idle" | "sending" | "sent" | "error";

// Static data — defined outside component to avoid recreation on every render
const contactInfo = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { icon: MapPin, label: "Location", value: personal.location, href: "#" },
  { icon: Github, label: "GitHub", value: "DIkshant-Athawale", href: personal.github },
  { icon: Linkedin, label: "LinkedIn", value: "Dikshant Athawale", href: personal.linkedin },
] as const;

const INPUT_CLASS =
  "w-full min-h-12 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-primary placeholder-white/20 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("sending");

      const mailtoLink = `mailto:${personal.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

      window.open(mailtoLink, "_blank");
      setStatus("sent");

      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    },
    [formData]
  );

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 max-w-6xl mx-auto items-start">
          {/* Form */}
          <div
            className="reveal"
            style={{ "--reveal-x": "-40px", "--reveal-y": "0px" } as React.CSSProperties}
          >
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm space-y-5 sm:space-y-6"
              noValidate
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-primary mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${INPUT_CLASS} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-live="polite"
              >
                {status === "sending" ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" aria-label="Sending…" />
                ) : status === "sent" ? (
                  <><CheckCircle2 size={18} aria-hidden="true" /> Message Sent!</>
                ) : status === "error" ? (
                  <><AlertCircle size={18} aria-hidden="true" /> Error, try again</>
                ) : (
                  <><Send size={18} aria-hidden="true" /> Send Message</>
                )}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div
            className="reveal space-y-4"
            style={{
              "--reveal-x": "40px",
              "--reveal-y": "0px",
              "--reveal-delay": "0.2s",
            } as React.CSSProperties}
          >
            <h3 className="font-heading font-semibold text-primary text-xl mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ "--reveal-delay": `${i * 0.08}s`, "--reveal-y": "20px" } as React.CSSProperties}
                  className="reveal flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-card-bg hover:border-white/[0.12] hover:translate-x-1 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors flex-shrink-0">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/30 uppercase tracking-wider">{info.label}</p>
                    <p className="text-primary text-sm font-medium mt-0.5 break-words">{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Location card */}
            <div className="mt-6 p-6 rounded-2xl border border-white/[0.06] bg-card-bg flex flex-col items-center text-center">
              <MapPin size={32} className="text-accent-primary mb-3" aria-hidden="true" />
              <p className="text-primary font-medium">{personal.location}</p>
              <p className="text-secondary text-sm mt-1">
                Available for remote opportunities worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
