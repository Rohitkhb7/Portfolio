"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, ArrowUpRight, FolderGit2 } from "lucide-react";
import { Github } from "./Icons";
import { projectsList } from "@/data/portfolio";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "UI/UX", "Frontend"];

  const filteredProjects = projectsList.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "UI/UX") return project.category === "UI/UX";
    if (activeTab === "Frontend") return project.category === "Frontend" || project.category === "Development";
    return true;
  });

  return (
    <section id="projects" className="w-full mt-6 flex flex-col gap-3">
      {/* Title & Filter Tabs Header */}
      <div className="flex flex-col sm:flex-row px-3 sm:items-center w-full justify-between gap-3">
        <h2 className="font-serif-custom text-3xl text-[var(--text-primary)]">
          Projects
        </h2>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-md border border-[var(--border-dashed)] bg-[var(--hover-bg)] text-xs font-mono">
          {categories.map((category) => {
            const isActive = activeTab === category;
            const count =
              category === "All"
                ? projectsList.length
                : category === "UI/UX"
                ? projectsList.filter((p) => p.category === "UI/UX").length
                : projectsList.filter((p) => p.category === "Frontend" || p.category === "Development").length;

            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 py-1 rounded-sm transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                    isActive
                      ? "bg-[var(--bg-primary)] text-[var(--text-primary)]"
                      : "bg-[var(--border-dashed)] text-[var(--text-muted)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2-Column Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full h-auto border border-dashed border-[var(--border-dashed)] flex p-3 flex-col justify-between transition-all duration-300 rounded-sm bg-[var(--card-bg)] hover:border-neutral-400 dark:hover:border-neutral-600"
            >
              {/* Top Cover Box */}
              <a
                href={project.liveUrl || project.behanceUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="w-full h-52 sm:h-60 rounded-md overflow-hidden relative bg-neutral-900 border border-[var(--border-dashed)] shadow-sm"
                >
                  {/* Badge Ribbon */}
                  {project.featuredBadge && (
                    <div className="absolute top-2.5 right-2.5 z-20">
                      <span className="text-black font-semibold text-[10px] bg-amber-300 py-1 px-2.5 rounded-full border border-neutral-400 flex items-center gap-1.5 shadow-md">
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 animate-pulse" />
                        {project.featuredBadge}
                      </span>
                    </div>
                  )}

                  {/* Crisp Full-Resolution Image */}
                  <Image
                    src={project.previewImage}
                    alt={project.title}
                    fill
                    unoptimized
                    priority
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </a>

              {/* Project Details */}
              <div className="flex flex-col w-full mt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[var(--text-primary)] font-semibold text-lg sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs mt-0.5">
                      {project.shortDesc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
                    <span className="text-emerald-500 text-lg leading-none">•</span>
                    {project.status}
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-xs sm:text-sm mt-3 mb-3 leading-relaxed">
                  {project.longDesc}
                </p>

                {/* Tech Tags & Links Footer */}
                <div className="pt-2 w-full flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-[var(--border-dashed)]">
                  <div className="flex flex-wrap gap-1.5 items-center py-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs px-2 py-0.5 border-dotted bg-[var(--hover-bg)] border-[var(--border-dashed)] border rounded-sm font-mono text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1">
                    {project.category === "UI/UX" && project.behanceUrl && (
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md px-2.5 py-1 text-xs font-mono flex gap-1 items-center bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black font-medium hover:opacity-90 transition-opacity"
                      >
                        Behance Case Study <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {project.category !== "UI/UX" && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 hover:bg-[var(--hover-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        title="Live Domain Demo"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}

                    {project.category !== "UI/UX" && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 hover:bg-[var(--hover-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        title="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="w-full py-12 px-4 border border-dashed border-[var(--border-dashed)] rounded-sm text-center flex flex-col items-center justify-center gap-2 bg-[var(--card-bg)]">
          <FolderGit2 className="w-8 h-8 text-[var(--text-muted)] stroke-[1.5]" />
          <h4 className="text-[var(--text-primary)] font-semibold text-sm">
            No Frontend projects added yet
          </h4>
          <p className="text-[var(--text-secondary)] text-xs max-w-sm">
            Provide your live frontend project URLs and domain links next to display them here!
          </p>
        </div>
      )}
    </section>
  );
}
