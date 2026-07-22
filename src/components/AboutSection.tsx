import { profileInfo } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="w-full mt-4 flex flex-col gap-2">
      {/* Title */}
      <div className="w-full h-10 flex items-center px-3">
        <h2 className="font-serif-custom text-3xl text-[var(--text-primary)]">
          About
        </h2>
      </div>

      {/* Bullet Items */}
      <div className="w-full py-2 px-3 flex flex-col justify-center text-[var(--text-primary)] gap-3 text-sm sm:text-base leading-relaxed">
        {profileInfo.bioBullets.map((bullet, idx) => (
          <div key={idx} className="flex gap-2.5 items-start">
            <span className="text-[var(--text-muted)] font-mono select-none">•</span>
            <p className="text-[var(--text-secondary)]">
              {bullet.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
