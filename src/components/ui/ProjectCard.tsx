"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-card-bg backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300"
    >
      {/* Gradient header */}
      <div className={`relative min-h-44 sm:h-48 bg-gradient-to-br ${project.gradient} p-4 sm:p-6 flex flex-col justify-end overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        {/* Pure CSS scale on hover — no useState needed */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/50 group-hover:scale-105 transition-transform duration-500" />
        <div className="relative z-10">
          <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between gap-1 mb-1">
            <p className="text-white/70 text-sm font-medium">{project.subtitle}</p>
            {project.period && (
              <span className="text-white/50 text-xs font-mono">{project.period}</span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white break-words">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <p className="text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-secondary">
                <span className="text-indigo-400 mt-1 flex-shrink-0" aria-hidden="true">▸</span>
                {feature}
              </li>
            ))}
            {project.features.length > 4 && (
              <li className="text-xs text-white/30">
                +{project.features.length - 4} more features
              </li>
            )}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-white/60 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col min-[380px]:flex-row gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/[0.06] text-white/80 hover:bg-white/[0.12] active:scale-[0.98] transition-all"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 active:scale-[0.98] transition-all"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
