"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileInfo } from "@/data/portfolio";

export default function HeroBanner() {
  const [viewCount, setViewCount] = useState(1);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ["Design Engineer", "UI/UX Designer", "Frontend Developer"];

  useEffect(() => {
    const savedViews = localStorage.getItem("portfolio_views");
    const initialCount = savedViews ? parseInt(savedViews, 10) + 1 : 124;
    localStorage.setItem("portfolio_views", initialCount.toString());
    setViewCount(initialCount);

    // Loop through roles every 2.2 seconds
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="w-full flex flex-col gap-2 pt-14 z-10">
      {/* Top Banner Cover */}
      <div className="w-full h-32 sm:h-52 overflow-hidden relative rounded-xs border border-[var(--border-dashed)]">
        <Image
          src={profileInfo.bannerUrl}
          alt="Banner cover"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 800px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent" />
      </div>

      {/* Profile Row */}
      <div className="flex flex-row gap-3 sm:gap-7 items-center w-full h-auto sm:h-38 py-3 sm:py-0">
        {/* Avatar picture */}
        <div className="relative ml-3 sm:ml-4 bg-[var(--bg-secondary)] overflow-hidden shrink-0 rounded-[12px] w-24 h-24 sm:w-28 sm:h-28 border border-[var(--border-dashed)]">
          <Image
            src={profileInfo.avatarUrl}
            alt={profileInfo.name}
            fill
            sizes="112px"
            className="object-cover rounded-[12px]"
          />
        </div>

        {/* Info Column */}
        <div className="flex flex-row justify-between w-full items-center gap-3 pr-3 sm:pr-0 min-w-0 flex-1">
          <div className="flex flex-col items-start text-left min-w-0 flex-1">
            
            {/* Serif Name */}
            <h1 className="font-serif-custom text-3xl sm:text-5xl text-[var(--text-primary)] leading-none truncate max-w-full">
              {profileInfo.name}
            </h1>

            {/* Continuous Looping Role Switcher */}
            <div className="h-6 sm:h-7 overflow-hidden mt-1 relative flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex gap-0.5 text-xs sm:text-lg font-semibold text-[var(--text-secondary)]"
                >
                  {roles[roleIndex].split("").map((char, index) => (
                    <span
                      key={index}
                      className="inline-block animate-char-reveal"
                      style={{ animationDelay: `${index * 0.025}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Location & Tag */}
            <p className="text-[10px] sm:text-xs text-[var(--text-muted)] font-semibold mt-1 truncate max-w-full">
              Full Stack Design & Code • {profileInfo.location}
            </p>
          </div>

          {/* Views Counter */}
          <div className="flex shrink-0">
            <div className="h-30 w-auto pr-2 pt-2">
              <div className="flex gap-1.5 items-center text-[var(--text-muted)] cursor-default select-none">
                <Eye className="w-4 h-4 text-[var(--text-muted)]" />
                <span className="font-mono text-xs sm:text-[13px] animate-pulse">
                  {viewCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
