import React from "react";

export default function AboutSection() {
  const bioItems = [
    <>
      I'm a{" "}
      <span className="font-semibold text-[var(--text-primary)] underline decoration-[var(--text-muted)]/60 underline-offset-4">
        Design Engineer
      </span>{" "}
      passionate about crafting digital products where thoughtful design meets clean, scalable code.
    </>,
    <>
      I design and develop modern interfaces with{" "}
      <span className="font-semibold text-[var(--text-primary)] underline decoration-[var(--text-muted)]/60 underline-offset-4">
        React, Tailwind, Motion
      </span>{" "}
      focusing on usability, performance, and delightful interactions.
    </>,
    <>
      Currently building high-performance web products, exploring new technologies, and refining intuitive user experiences.
    </>,
  ];

  return (
    <section id="about" className="w-full flex flex-col gap-1.5 scroll-mt-20">
      {/* Title */}
      <div className="w-full h-7 flex items-center px-3">
        <h2 className="font-serif-custom text-3xl text-[var(--text-primary)]">
          About
        </h2>
      </div>

      {/* Bullet Items */}
      <div className="w-full py-0.5 px-3 flex flex-col justify-center text-[var(--text-primary)] gap-2 text-sm sm:text-base leading-relaxed">
        {bioItems.map((item, idx) => (
          <div key={idx} className="flex gap-2.5 items-start">
            <span className="text-[var(--text-muted)] font-mono select-none">•</span>
            <p className="text-[var(--text-secondary)]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
