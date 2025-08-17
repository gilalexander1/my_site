// app/page.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import ThemePanel from "@/components/ThemePanel"; // ← relative path

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
  }, [taglines.length]);

  // NOTE: layout already provides <main class="page">,
  // so return sections here (avoid nested <main>)
  return (
    <>
      {/* Hero */}
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
            <Link href="/projects" className="button glow-bounce">Projects</Link>
            <Link href="/resume" className="button glow-bounce">Resume</Link>
            <Link href="/contact" className="button glow-bounce">Contact</Link>
            <Link href="/blog" className="button glow-bounce">Blog</Link>
          </div>
        </div>
      </section>

      {/* Footer note */}
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
    </>
  );
}
