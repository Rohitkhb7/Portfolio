"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { techStackData } from "@/data/portfolio";

const categories = ["All", "Frontend", "Backend", "Design", "Tools"] as const;

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTech = techStackData.filter((tech) => {
    if (selectedCategory === "All") return true;
    return tech.category === selectedCategory;
  });

  return (
    <section id="techstack" className="w-full mt-8 px-3 flex flex-col gap-2">
      {/* Header Row */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 h-auto py-2">
        <div className="flex items-baseline gap-2">
          <h2 className="font-serif-custom text-3xl text-[var(--text-primary)]">
            Tech Stack
          </h2>
          <span className="text-[10px] font-mono text-[var(--text-muted)] select-none">
            ( click to explore )
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[var(--hover-bg)] text-[var(--text-primary)] border-[var(--border-dashed)] font-bold"
                    : "text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Items Flex Grid */}
      <div className="flex flex-wrap gap-2 mt-2 w-full items-start pb-6">
        {filteredTech.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-dashed border-[var(--border-dashed)] px-3 py-1.5 rounded-sm hover:border-[var(--text-secondary)] transition-all flex items-center gap-2 cursor-pointer text-xs font-mono bg-[var(--card-bg)]">
              <span>{tech.name}</span>
              <ExternalLink className="w-3 h-3 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
