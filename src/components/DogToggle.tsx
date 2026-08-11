"use client";

import { useEffect, useState } from "react";
import { Dog } from "lucide-react";

export default function DogToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_dog_enabled");
    if (saved !== null) {
      setEnabled(saved === "true");
    } else {
      setEnabled(false);
    }
  }, []);

  const toggleDog = () => {
    const nextState = !enabled;
    setEnabled(nextState);
    localStorage.setItem("portfolio_dog_enabled", String(nextState));
    window.dispatchEvent(new Event("portfolio_dog_toggle"));
  };

  return (
    <button
      type="button"
      onClick={toggleDog}
      className={`relative p-1.5 rounded-md border border-[var(--border-dashed)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-xs ${
        enabled
          ? "bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-[var(--hover-bg)]"
          : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)] opacity-60"
      }`}
      title={enabled ? "Turn OFF cursor dog" : "Turn ON cursor dog"}
      aria-label="Toggle cursor dog companion"
    >
      <Dog className={`w-4 h-4 transition-transform ${enabled ? "scale-100 text-amber-500" : "scale-90"}`} />
      <span className="text-[10px] font-mono select-none hidden sm:inline">
        {enabled ? "ON" : "OFF"}
      </span>
      <span
        className={`size-1.5 rounded-full ${
          enabled ? "bg-emerald-500 animate-pulse" : "bg-neutral-400"
        }`}
      />
    </button>
  );
}
