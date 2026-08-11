"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CursorDog() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Position tracking refs
  const mousePos = useRef({ x: -100, y: -100 });
  const dogPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  // Fixed constant speed in pixels per frame (~3.2px per frame)
  const CONSTANT_SPEED = 3.2;
  const STOP_DISTANCE = 2;

  useEffect(() => {
    // Check initial localStorage setting (defaults to false)
    const saved = localStorage.getItem("portfolio_dog_enabled");
    setEnabled(saved === "true");

    const handleToggle = () => {
      const updated = localStorage.getItem("portfolio_dog_enabled");
      setEnabled(updated === "true");
    };

    window.addEventListener("portfolio_dog_toggle", handleToggle);
    return () => {
      window.removeEventListener("portfolio_dog_toggle", handleToggle);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Frame-by-frame loop enforcing strict constant velocity directly to cursor
    const updatePosition = () => {
      const target = mousePos.current;
      const current = dogPos.current;

      if (current.x === -100 && target.x !== -100) {
        dogPos.current = { ...target };
        setPos({ ...target });
      } else if (current.x !== -100) {
        const dx = target.x - current.x;
        const dy = target.y - current.y;
        const dist = Math.hypot(dx, dy);

        if (dist > STOP_DISTANCE) {
          // Move at exact constant speed directly to target cursor point
          const step = Math.min(CONSTANT_SPEED, dist);
          const nextX = current.x + (dx / dist) * step;
          const nextY = current.y + (dy / dist) * step;

          dogPos.current = { x: nextX, y: nextY };
          setPos({ x: nextX, y: nextY });

          if (dx > 0.5) setDirection("right");
          else if (dx < -0.5) setDirection("left");

          setIsMoving(true);
        } else {
          setIsMoving(false);
        }
      }

      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [enabled]);

  if (!enabled || !isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate3d(${pos.x - 20}px, ${pos.y - 20}px, 0)`,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
      className="hidden md:block"
    >
      <motion.div
        animate={{
          scaleX: direction === "left" ? -1 : 1,
          y: isMoving ? [0, -3, 0, -3, 0] : 0,
        }}
        transition={{
          y: isMoving
            ? { repeat: Infinity, duration: 0.28, ease: "easeInOut" }
            : { duration: 0.2 },
          scaleX: { duration: 0.15 },
        }}
        className="w-10 h-10 relative flex items-center justify-center filter drop-shadow-md select-none"
      >
        {/* SVG Dog Illustration */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          {/* Tail with wagging animation */}
          <motion.path
            d="M 12 36 C 6 30 4 22 8 18"
            stroke="#D97706"
            strokeWidth="5"
            strokeLinecap="round"
            animate={{
              rotate: isMoving ? [0, 15, -15, 0] : [0, 22, 0, 22, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: isMoving ? 0.18 : 0.5,
              ease: "easeInOut",
            }}
            style={{ originX: "12px", originY: "36px" }}
          />

          {/* Dog Body */}
          <rect x="14" y="28" width="28" height="18" rx="9" fill="#F59E0B" />
          <rect x="18" y="32" width="20" height="12" rx="6" fill="#FDE68A" />

          {/* Back Paws */}
          <motion.rect
            x="18"
            y="42"
            width="5"
            height="11"
            rx="2.5"
            fill="#D97706"
            animate={{
              rotate: isMoving ? [15, -15, 15] : 0,
            }}
            transition={{ repeat: Infinity, duration: 0.22 }}
            style={{ originY: "42px" }}
          />
          <motion.rect
            x="33"
            y="42"
            width="5"
            height="11"
            rx="2.5"
            fill="#D97706"
            animate={{
              rotate: isMoving ? [-15, 15, -15] : 0,
            }}
            transition={{ repeat: Infinity, duration: 0.22 }}
            style={{ originY: "42px" }}
          />

          {/* Front Paws */}
          <motion.rect
            x="22"
            y="44"
            width="5"
            height="10"
            rx="2.5"
            fill="#F59E0B"
            animate={{
              rotate: isMoving ? [-20, 20, -20] : 0,
            }}
            transition={{ repeat: Infinity, duration: 0.22 }}
            style={{ originY: "44px" }}
          />
          <motion.rect
            x="37"
            y="44"
            width="5"
            height="10"
            rx="2.5"
            fill="#F59E0B"
            animate={{
              rotate: isMoving ? [20, -20, 20] : 0,
            }}
            transition={{ repeat: Infinity, duration: 0.22 }}
            style={{ originY: "44px" }}
          />

          {/* Dog Head */}
          <circle cx="44" cy="24" r="13" fill="#F59E0B" />

          {/* Muzzle & Nose */}
          <circle cx="49" cy="27" r="7" fill="#FDE68A" />
          <ellipse cx="53" cy="24" rx="2.5" ry="2" fill="#1F2937" />

          {/* Eye with Sparkle */}
          <circle cx="44" cy="20" r="2.5" fill="#1F2937" />
          <circle cx="45" cy="19" r="0.8" fill="#FFFFFF" />

          {/* Floppy Bouncing Ear */}
          <motion.path
            d="M 38 15 C 33 16 30 24 33 30 C 36 32 40 28 40 22 Z"
            fill="#B45309"
            animate={{
              rotate: isMoving ? [0, 14, -6, 0] : [0, 5, 0],
            }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            style={{ originX: "38px", originY: "15px" }}
          />

          {/* Red Collar & Golden Tag */}
          <path d="M 35 32 C 40 36 47 34 50 30" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <circle cx="44" cy="35" r="2" fill="#FBBF24" />
        </svg>
      </motion.div>
    </div>
  );
}
