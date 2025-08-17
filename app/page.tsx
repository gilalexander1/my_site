"use client";
import * as React from "react";
import ThemePanel from "@/components/ThemePanel";


export default function Home() {
  const taglines = [
    "Licensed Claims Adjuster",
    "Data & AI Enthusiast",
    "MBA Candidate",
    "Space-themed design enthusiast 💫",
  ];

  const [idx, setIdx] = React.useState(0);

React.useEffect(() => {
  const id = setInterval(() => setIdx((i) => (i + 1) % taglines.length), 2500);
  return () => clearInterval(id);
}, [taglines.length]); // ✅ or use [taglines] if you recreate the array

  return (
    <main>
      {/* hero */}
      <section className="container pt-28 pb-24">
        <div className="card hero-card p-10 md:p-14 text-center">
          <p className="kicker text-sub mb-3">Orlando, FL · Est.1993 · Miami, FL</p>
          <h1 className="hero-title">
            Gil Alexander <span className="hero-accent" aria-hidden />
          </h1>
          <p className="text-sub mt-4 max-w-2xl mx-auto h-[1.6em] overflow-hidden">
            <span key={idx} className="tagline-fade">{taglines[idx]}</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/projects" className="button glow-bounce">Projects</a>
            <a href="/resume" className="button glow-bounce">Resume</a>
            <a href="/contact" className="button glow-bounce">Contact</a>
            <a href="/blog" className="button glow-bounce">Blog</a>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="container pb-16">
        <p className="text-sub text-center">
          Theme:{" "}
          <span
            style={{
              background: "linear-gradient(90deg, var(--brand), var(--accent))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Aqua × Violet
          </span>{" "}
          by Gil. Tweak via the “Theme” button →
        </p>
      </section>

      <ThemePanel />
    </main>
  );
}
