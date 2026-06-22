"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import GitHubGraph from "@/components/ui/GitHubGraph";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work and technical capabilities"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 lg:mb-16">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`min-h-11 px-4 sm:px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-accent-primary text-white shadow-lg shadow-indigo-500/20"
                  : "text-secondary hover:text-primary hover:bg-white/[0.04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
          <div
            key={activeFilter}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

        {/* GitHub Graph */}
        <div className="mt-14 sm:mt-20 lg:mt-24">
          <GitHubGraph />
        </div>
      </div>
    </section>
  );
}
