import Link from "next/link";

export const metadata = {
  title: "Philosopher Sol — Project",
  description:
    "An AI companion that speaks in my voice—existential, grounded, and a little cosmic. Built to explore memory, meaning, and grief with practical tools wrapped in philosophy.",
  openGraph: {
    title: "Philosopher Sol — Project",
    description:
      "An AI companion that speaks in my voice—existential, grounded, and a little cosmic.",
    type: "article",
    url: "/projects/philosopher-sol",
  },
};

export default async function PhilosopherSolPage() {
  // Prefer pulling from env so buttons can deep-link externally if needed
  const solExternal = process.env.SOL_URL || "https://YOUR-SOL-APP.vercel.app";

  return (
    <main className="container py-16">
      {/* Header / Hero */}
      <header className="card p-8 md:p-10">
        <p className="kicker text-sub mb-2">Case Study</p>
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
          Philosopher Sol
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--brand), var(--accent))" }}
          />
        </h1>

        <p className="text-sub mt-3 max-w-2xl">
          A reflective AI companion that converses in my voice—part coach, part cosmic mirror.
          Built to explore memory, meaning, and grief with practical tools wrapped in philosophy.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Internal reverse-proxied link feels native */}
          <Link href="/sol" className="button" prefetch={false}>
            Live Demo (on-site)
          </Link>

          {/* External link hits the Sol deployment directly */}
          <a className="button" href={solExternal} target="_blank" rel="noreferrer">
            Open on Vercel
          </a>

          {/* Optional: repo link when you’re ready */}
          {/* <a className="button" href="https://github.com/you/philosopher-sol" target="_blank" rel="noreferrer">Source Code</a> */}
        </div>
      </header>

      {/* Overview */}
      <section className="grid md:grid-cols-2 gap-6 mt-8">
        <article className="card p-6 md:p-7">
          <h2 className="text-xl font-medium">Why</h2>
          <p className="text-sub mt-2">
            I wanted more than “a chat box.” Sol blends persona, prompts, and journaling into
            a space that actually helps me think—existential but grounded.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["LLM UX", "Persona design", "Coaching prompts"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </article>

        <article className="card p-6 md:p-7">
          <h2 className="text-xl font-medium">What</h2>
          <ul className="text-sub mt-2 list-disc pl-5 space-y-1">
            <li>Conversational companion in my tone (Philosopher Sol)</li>
            <li>Journaling mode with exportable notes</li>
            <li>Session memory and configurable “voice”</li>
            <li>Deployed on Vercel; portfolio reverse-proxy at <code>/sol</code></li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "Vercel", "TypeScript"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </article>
      </section>

      {/* Design / Screens */}
      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6 md:p-7">
          <h3 className="text-lg font-medium">Design</h3>
          <p className="text-sub mt-2">
            Minimal UI with a “cosmic” accent. Theme tokens driven by CSS variables so the
            Theme Panel can switch brand &amp; accent on the fly.
          </p>
          <div className="cover mt-4" aria-hidden />
        </div>

        <div className="card p-6 md:p-7">
          <h3 className="text-lg font-medium">Architecture</h3>
          <ul className="text-sub mt-2 list-disc pl-5 space-y-1">
            <li>App Router (Next.js) + Edge-friendly deployment on Vercel</li>
            <li>Reverse-proxy from portfolio: <code>/sol → {solExternal}</code></li>
            <li>Future: add LLM API + optional RAG for long-form memory</li>
          </ul>
          <div className="cover mt-4" aria-hidden />
        </div>
      </section>

      {/* CTAs */}
      <section className="mt-8 flex flex-wrap gap-3">
        <Link href="/sol" className="button" prefetch={false}>Try Sol</Link>
        <a className="button" href={solExternal} target="_blank" rel="noreferrer">
          Open on Vercel
        </a>
        {/* <a className="button" href="https://github.com/you/philosopher-sol" target="_blank" rel="noreferrer">View Code</a> */}
      </section>
    </main>
  );
}
<section className="mt-8">
  <div className="card p-2">
    <iframe
      src="/sol"
      title="Philosopher Sol"
      className="w-full h-[70vh] rounded-xl"
      allow="clipboard-write; microphone"
    />
  </div>
</section>
"use client";
import Link from "next/link";

function LiveButton({ href }: { href: string }) {
  const isInternal = href.startsWith("/");
  return isInternal ? (
    <Link className="button" href={href} prefetch={false}>Live</Link>
  ) : (
    <a className="button" href={href} target="_blank" rel="noreferrer">Live</a>
  );
}

export default function ProjectsPage() {
  const projects = [
    {
      slug: "philosopher-sol",
      title: "Philosopher Sol",
      blurb: "An AI companion that speaks in my voice—existential, grounded, and a little cosmic.",
      tags: ["LLM", "TypeScript", "RAG"],
      live: "/sol",          // 👈 point the Live button here
      repo: "#",
      // image: "/projects/philosopher-sol-cover.webp", // if you added a cover
    },
    // ...other projects
  ] as const;

  return (
    <main className="container py-16">
      {/* ...header and grid shell... */}
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.slug} className="card p-6 md:p-7">
            {/* cover, title, blurb, tags ... */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="button" href={`/projects/${p.slug}`} prefetch={false}>View details</Link>
              <LiveButton href={p.live} />
              <a className="button" href={p.repo} target="_blank" rel="noreferrer">Code</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
