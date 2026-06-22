"use client";

import { motion } from "framer-motion";
import type { Certification } from "@/data/certifications";

interface CertCardProps {
  cert: Certification;
  index: number;
}

export default function CertCard({ cert, index }: CertCardProps) {
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-4 sm:p-6 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
        style={{ backgroundColor: `${cert.color}10` }}
      />

      <div className="flex items-start gap-4">
        <div
          className="p-3 rounded-xl flex-shrink-0"
          style={{ backgroundColor: `${cert.color}15` }}
        >
          <Icon size={24} style={{ color: cert.color }} />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading font-semibold text-primary text-base leading-snug break-words">
            {cert.title}
          </h3>
          <p className="text-secondary text-sm mt-1">{cert.issuer}</p>
          <span
            className="inline-block text-xs font-bold mt-2 px-2.5 py-0.5 rounded-full"
            style={{
              color: cert.color,
              backgroundColor: `${cert.color}15`,
            }}
          >
            {cert.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
