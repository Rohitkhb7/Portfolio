"use client";

import { ArrowRight, Mail, Paperclip } from "lucide-react";
import { Github, Linkedin, Twitter } from "./Icons";
import { socialGrid } from "@/data/portfolio";

const socialBrandConfig: Record<
  string,
  { hoverBorder: string; hoverText: string; hoverIcon: string }
> = {
  github: {
    hoverBorder: "hover:border-emerald-500/60 dark:hover:border-emerald-400/60",
    hoverText: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
    hoverIcon:
      "group-hover:border-emerald-500/60 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
  },
  linkedin: {
    hoverBorder: "hover:border-[#0A66C2]",
    hoverText: "group-hover:text-[#0A66C2]",
    hoverIcon: "group-hover:border-[#0A66C2] group-hover:bg-[#0A66C2]/10 group-hover:text-[#0A66C2]",
  },
  twitter: {
    hoverBorder: "hover:border-[#1DA1F2]",
    hoverText: "group-hover:text-[#1DA1F2]",
    hoverIcon: "group-hover:border-[#1DA1F2] group-hover:bg-[#1DA1F2]/10 group-hover:text-[#1DA1F2]",
  },
  mail: {
    hoverBorder: "hover:border-[#EA4335]",
    hoverText: "group-hover:text-[#EA4335]",
    hoverIcon: "group-hover:border-[#EA4335] group-hover:bg-[#EA4335]/10 group-hover:text-[#EA4335]",
  },
  paperclip: {
    hoverBorder: "hover:border-[#6366F1]",
    hoverText: "group-hover:text-[#6366F1]",
    hoverIcon: "group-hover:border-[#6366F1] group-hover:bg-[#6366F1]/10 group-hover:text-[#6366F1]",
  },
};

export default function ContactGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />;
      case "twitter":
        return <Twitter className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />;
      case "mail":
        return <Mail className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />;
      case "paperclip":
        return <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />;
      default:
        return <Mail className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col gap-2 scroll-mt-20">
      {/* Title */}
      <div className="w-full px-3">
        <h2 className="font-serif-custom text-3xl text-[var(--text-primary)]">
          Contact
        </h2>
      </div>

      {/* Grid Row */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 py-1">
        {socialGrid.map((item, idx) => {
          const config = socialBrandConfig[item.icon] || {
            hoverBorder: "hover:border-[var(--text-secondary)]",
            hoverText: "group-hover:text-[var(--text-primary)]",
            hoverIcon: "group-hover:border-[var(--text-secondary)]",
          };

          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full group ${
                idx === socialGrid.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div
                className={`w-full h-full flex items-center px-2.5 py-2 gap-2 border border-dashed border-[var(--border-dashed)] cursor-pointer transition-all duration-300 rounded-sm bg-[var(--card-bg)]/40 ${config.hoverBorder}`}
              >
                <div
                  className={`size-8 sm:size-9 rounded-md border border-[var(--border-dashed)] flex justify-center items-center bg-[var(--card-bg)] shrink-0 text-[var(--text-muted)] transition-all duration-300 ${config.hoverIcon}`}
                >
                  {getIcon(item.icon)}
                </div>
                <div className="flex items-center justify-between gap-1 min-w-0 flex-1">
                  <span
                    className={`text-xs md:text-sm font-medium text-[var(--text-primary)] transition-colors duration-300 truncate ${config.hoverText}`}
                  >
                    {item.label}
                  </span>
                  <ArrowRight
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--text-muted)] -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ${config.hoverText}`}
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
