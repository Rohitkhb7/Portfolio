export default function Footer() {
  return (
    <footer className="w-full mt-10 py-6 px-3 border-t border-dashed border-[var(--border-dashed)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
      <div>
        © 2026 Rohit. All rights reserved.
      </div>
      
      <div className="flex items-center gap-2">
        <span>Designed &amp; Built with</span>
        <span className="text-[var(--text-primary)] font-semibold">Next.js</span>
        <span>&amp;</span>
        <span className="text-[var(--text-primary)] font-semibold">Tailwind</span>
      </div>

      <div>
        <a
          href="#home"
          className="hover:text-[var(--text-primary)] transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
