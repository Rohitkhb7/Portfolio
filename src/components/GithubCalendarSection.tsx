"use client";

import React, { useEffect, useState } from "react";

export default function GithubCalendarSection() {
  const [tableHtml, setTableHtml] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number>(33);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveGraph = async () => {
      try {
        const res = await fetch(`/api/github-contributions?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const json = await res.json();
          if (json.tableHtml) {
            setTableHtml(json.tableHtml);
          }
          if (json.totalCount) {
            setTotalCount(json.totalCount);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveGraph();
  }, []);

  return (
    <section id="github-activity" className="w-full flex flex-col gap-3 scroll-mt-20">
      {/* Title Header */}
      <div className="w-full px-1">
        <h2 className="font-serif-custom text-3xl text-[var(--text-primary)]">
          GitHub Activity
        </h2>
      </div>

      {/* Clean Native GitHub Calendar Frame */}
      <div className="w-full border border-dashed border-[var(--border-dashed)] p-4 rounded-sm bg-[var(--card-bg)]/40 flex flex-col items-center justify-center min-h-[140px] overflow-hidden">
        {loading ? (
          <div className="w-full h-28 flex items-center justify-center text-xs font-mono text-[var(--text-muted)] animate-pulse">
            Loading GitHub activity...
          </div>
        ) : tableHtml ? (
          <div className="w-full flex flex-col items-center select-none py-1">
            <div
              className="github-native-calendar w-full overflow-x-auto flex justify-center py-1 scrollbar-thin"
              dangerouslySetInnerHTML={{ __html: tableHtml }}
            />
            <div className="flex w-full max-w-[690px] items-center justify-between mt-3 text-[11px] font-mono text-[var(--text-muted)] px-1">
              <span>{totalCount || 33} contributions in the last year</span>
              <div className="flex items-center gap-1 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22] border border-white/5 inline-block" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429] inline-block" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32] inline-block" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641] inline-block" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353] inline-block" />
                <span>More</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-xs font-mono text-[var(--text-muted)]">
            Failed to load GitHub activity.
          </div>
        )}
      </div>

      <style jsx global>{`
        .github-native-calendar table {
          border-spacing: 3.5px !important;
          border-collapse: separate !important;
          margin: 0 auto;
        }
        .github-native-calendar td.ContributionCalendar-day {
          border-radius: 2px !important;
          width: 10px !important;
          height: 10px !important;
          box-sizing: border-box !important;
        }
        .github-native-calendar td.ContributionCalendar-day[data-level="0"] {
          background-color: #161b22 !important;
          outline: 1px solid rgba(255, 255, 255, 0.05);
        }
        .github-native-calendar td.ContributionCalendar-day[data-level="1"] {
          background-color: #0e4429 !important;
        }
        .github-native-calendar td.ContributionCalendar-day[data-level="2"] {
          background-color: #006d32 !important;
        }
        .github-native-calendar td.ContributionCalendar-day[data-level="3"] {
          background-color: #26a641 !important;
        }
        .github-native-calendar td.ContributionCalendar-day[data-level="4"] {
          background-color: #39d353 !important;
        }
        .github-native-calendar th.ContributionCalendar-label {
          font-size: 10px !important;
          font-family: monospace !important;
          color: var(--text-muted, #8b949e) !important;
          font-weight: normal !important;
          padding-bottom: 4px !important;
        }
        .github-native-calendar td.ContributionCalendar-label {
          font-size: 9px !important;
          font-family: monospace !important;
          color: var(--text-muted, #8b949e) !important;
          padding-right: 6px !important;
        }
        .github-native-calendar .sr-only {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
