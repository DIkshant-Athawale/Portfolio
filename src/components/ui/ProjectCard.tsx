"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-card-bg backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300"
    >
      {/* Gradient header */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-end`}>
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/50"
        />
        <div className="relative z-10">
          <p className="text-white/70 text-sm font-medium mb-1">{project.subtitle}</p>
          <h3 className="text-2xl font-heading font-bold text-white">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                <span className="text-indigo-400 mt-1 flex-shrink-0">▸</span>
                {f}
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
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/[0.06] text-white/80 hover:bg-white/[0.12] transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
