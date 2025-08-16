"use client";
import * as React from "react";

/* Inline ThemePanel (no external imports) */
function ThemePanel() {
  const [open, setOpen] = React.useState(false);
  const setBrand = (v: "aqua" | "violet" | "gold") =>
    document.documentElement.setAttribute("data-brand", v);
  const setAccent = (v: "yellow" | "pink" | "lime") =>
    document.documentElement.setAttribute("data-accent", v);
  const setTheme = (v: "dark" | "light") =>
    document.documentElement.setAttribute("data-theme", v);

  return (
    <>
      <button className="fab" aria-expanded={open} onClick={() => setOpen(s => !s)}>
        Theme
      </button>
      <div className="panel" data-open={open ? "true" : "false"}>
        <div className="panel-row">
          <strong>Theme</strong>
          <div className="row-items">
            <button className="chip" onClick={() => setTheme("dark")}>Dark</button>
            <button className="chip" onClick={() => setTheme("light")}>Light</button>
          </div>
        </div>
        <div className="panel-row">
          <strong>Brand</strong>
          <div className="row-items">
            <button className="chip" onClick={() => setBrand("aqua")}>Aqua</button>
            <button className="chip" onClick={() => setBrand("violet")}>Violet</button>
            <button className="chip" onClick={() => setBrand("gold")}>Gold</button>
          </div>
        </div>
        <div className="panel-row">
          <strong>Accent</strong>
          <div className="row-items">
            <button className="chip" onClick={() => setAccent("yellow")}>Yellow</button>
            <button className="chip" onClick={() => setAccent("pink")}>Pink</button>
            <button className="chip" onClick={() => setAccent("lime")}>Lime</button>
          </div>
        </div>
      </div>
    </>
  );
}

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
}, []);

  return (
    <main>
      {/* Minimal, premium hero */}
<section className="container pt-28 pb-24">
  <div className="card hero-card p-10 md:p-14 text-center">
    <p className="kicker text-sub mb-3">Orlando, FL · Est.1993 · Miami, FL</p>

    <h1 className="hero-title">
      Gil Alexander
      <span className="hero-accent" aria-hidden />
    </h1>

   {/* rotating tagline with smooth fade/slide */}
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
          </span>
          by Gil.  Tweak via the “Theme” button →
        </p>
      </section>

      <ThemePanel />
    </main>
  );
}
