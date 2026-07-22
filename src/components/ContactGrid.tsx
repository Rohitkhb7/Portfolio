"use client";

import { ArrowRight, Mail, Paperclip } from "lucide-react";
import { Github, Linkedin, Twitter } from "./Icons";
import { socialGrid } from "@/data/portfolio";

export default function ContactGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "mail":
        return <Mail className="w-5 h-5" />;
      case "paperclip":
        return <Paperclip className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="w-full mt-6 flex flex-col gap-2">
      {/* Title */}
      <div className="w-full h-10 px-3">
        <h2 className="font-serif-custom text-3xl text-[var(--text-primary)]">
          Contact
        </h2>
      </div>

      {/* Grid Row */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-1 py-1">
        {socialGrid.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="w-full h-full flex items-center justify-center md:justify-start md:px-3 gap-2 border border-dashed border-[var(--border-dashed)] cursor-pointer hover:bg-[var(--hover-bg)] transition-all duration-200 group py-2.5 rounded-sm">
              <div className="size-10 rounded-lg border-2 border-[var(--border-dashed)] flex justify-center items-center bg-[var(--card-bg)] shrink-0 text-[var(--text-primary)]">
                {getIcon(item.icon)}
              </div>
              <div className="hidden md:flex items-center gap-1.5 min-w-0">
                <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                  {item.label}
                </p>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
