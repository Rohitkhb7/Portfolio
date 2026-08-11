"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink, RefreshCw } from "lucide-react";
import { Github } from "./Icons";

export default function GithubCalendarSection() {
  const [mounted, setMounted] = useState(false);
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRefreshKey(Date.now());
    setTimeout(() => setIsRefreshing(false), 600);
  };

  // Custom green themes for light and dark modes
  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section id="github-activity" className="w-full flex flex-col gap-3 scroll-mt-20">
      {/* Title Header */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between px-3 gap-2">
        <div className="flex items-center gap-2">
          <h2 className="font-serif-custom text-3xl text-[var(--text-primary)] flex items-center gap-2">
            GitHub Activity
          </h2>
          <span className="text-[10px] font-mono text-[var(--text-muted)] select-none">
            ( @Rohitkhb7 )
          </span>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button
            type="button"
            onClick={handleRefresh}
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors cursor-pointer"
            title="Refresh GitHub contributions"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? "animate-spin text-emerald-500" : ""}`} />
            <span>Sync</span>
          </button>

          <a
            href="https://github.com/Rohitkhb7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-emerald-500" />
            <span>View GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Calendar Card Frame */}
      <div className="w-full border border-dashed border-[var(--border-dashed)] p-3 sm:p-4 rounded-sm bg-[var(--card-bg)]/40 flex flex-col items-center justify-center min-h-[150px]">
        {mounted ? (
          <div className="w-full flex justify-center py-1">
            <GitHubCalendar
              key={refreshKey}
              username="Rohitkhb7"
              fontSize={11}
              blockSize={10}
              blockMargin={2.2}
              theme={customTheme}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
        ) : (
          <div className="w-full h-32 flex items-center justify-center text-xs font-mono text-[var(--text-muted)] animate-pulse">
            Loading GitHub contributions...
          </div>
        )}
      </div>
    </section>
  );
}
