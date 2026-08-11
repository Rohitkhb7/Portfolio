"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Eye, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileInfo } from "@/data/portfolio";

export default function HeroBanner() {
  const [viewCount, setViewCount] = useState(1);
  const [roleIndex, setRoleIndex] = useState(0);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(0);

  const roles = ["Design Engineer", "UI/UX Designer", "Frontend Developer"];
  const avatars = profileInfo.avatarOptions || ["/profile-bw.png", "/avatar.jpg"];
  const banners = profileInfo.bannerOptions || ["/surreal.gif", "/banner2.png"];

  useEffect(() => {
    const savedViews = localStorage.getItem("portfolio_views");
    const initialCount = savedViews ? parseInt(savedViews, 10) + 1 : 124;
    localStorage.setItem("portfolio_views", initialCount.toString());
    setViewCount(initialCount);

    // Loop through roles every 3 seconds
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const toggleAvatar = () => {
    setAvatarIndex((prev) => (prev + 1) % avatars.length);
  };

  const toggleBanner = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section id="home" className="w-full flex flex-col gap-2 pt-0 z-10 scroll-mt-14">
      {/* Top Banner Cover with 2-Banner Toggle */}
      <div
        onClick={toggleBanner}
        className="w-full h-32 sm:h-52 overflow-hidden relative rounded-xs border border-[var(--border-dashed)] cursor-pointer group select-none mt-3"
        title="Click to toggle banner image"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={bannerIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <Image
              src={banners[bannerIndex]}
              alt="Banner cover"
              fill
              unoptimized
              priority
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent pointer-events-none" />

        {/* Banner Switcher Toggle Switch */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleBanner();
          }}
          className="absolute bottom-2.5 right-2.5 z-20 bg-black/80 dark:bg-neutral-900/90 backdrop-blur-md border border-white/20 dark:border-neutral-700/80 rounded-full px-2 py-0.5 flex items-center gap-1.5 shadow-md cursor-pointer hover:scale-105 transition-all select-none"
          title="Switch banner cover"
        >
          <span className="text-[9px] font-mono text-neutral-300 mr-0.5 hidden sm:inline">Banner</span>
          <span
            className={`text-[9px] font-mono font-semibold transition-colors ${bannerIndex === 0 ? "text-amber-400" : "text-neutral-400"
              }`}
          >
            1
          </span>
          {/* Sliding Switch Track */}
          <div className="w-5 h-2.5 bg-neutral-700 dark:bg-neutral-800 rounded-full p-0.5 relative flex items-center">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm"
              animate={{ x: bannerIndex === 0 ? 0 : 10 }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
          </div>
          <span
            className={`text-[9px] font-mono font-semibold transition-colors ${bannerIndex === 1 ? "text-amber-400" : "text-neutral-400"
              }`}
          >
            2
          </span>
        </div>
      </div>

      {/* Profile Row */}
      <div className="flex flex-row gap-3 sm:gap-7 items-center w-full h-auto sm:h-38 mt-0 py-1 sm:py-0">
        {/* Avatar picture with 2-profile picture toggle */}
        <div
          onClick={toggleAvatar}
          className="relative ml-3 sm:ml-4 bg-[var(--card-bg)] overflow-hidden shrink-0 rounded-[14px] w-24 h-24 sm:w-28 sm:h-28 border border-[var(--border-dashed)] cursor-pointer group shadow-sm hover:border-[var(--text-secondary)] transition-all duration-300 select-none"
          title="Click to toggle profile picture"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={avatarIndex}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src={avatars[avatarIndex]}
                alt={profileInfo.name}
                fill
                unoptimized
                sizes="112px"
                className="object-cover rounded-[12px]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Profile Switcher Toggle Switch */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              toggleAvatar();
            }}
            className="absolute bottom-1.5 right-1.5 z-20 bg-black/80 dark:bg-neutral-900/90 backdrop-blur-md border border-white/20 dark:border-neutral-700/80 rounded-full px-1.5 py-0.5 flex items-center gap-1 shadow-md cursor-pointer hover:scale-105 transition-all select-none"
            title="Switch profile picture"
          >
            <span
              className={`text-[9px] font-mono font-semibold transition-colors ${avatarIndex === 0 ? "text-amber-400" : "text-neutral-400"
                }`}
            >
              1
            </span>
            {/* Sliding Switch Track */}
            <div className="w-5 h-2.5 bg-neutral-700 dark:bg-neutral-800 rounded-full p-0.5 relative flex items-center">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm"
                animate={{ x: avatarIndex === 0 ? 0 : 10 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
              />
            </div>
            <span
              className={`text-[9px] font-mono font-semibold transition-colors ${avatarIndex === 1 ? "text-amber-400" : "text-neutral-400"
                }`}
            >
              2
            </span>
          </div>
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
                  className="flex gap-0.5 text-xs sm:text-lg font-semibold text-[var(--text-primary)]"
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
              UI/UX & Frontend Specialist • {profileInfo.location}
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
