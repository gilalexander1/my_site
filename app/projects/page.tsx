// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/image";

type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  live: string;   // "/sol" for internal proxy or full URL
  repo: string;
  image?: string; // optional cover image (in /public)
  alt?: string;
};

export default function ProjectsPage() {
  const projects: readonly Project[] = [
    {
      slug: "sol-os",
      title: "Sol OS",
      blurb:
        "A minimalist ‘operating system’ for me: personal knowledge, routines, and automations in one space.",
      tags: ["Next.js", "Tailwind", "Automation"],
      live: "#",
      repo: "#",
    },
    {
      slug: "philosopher-sol",
      title: "The Philosopher's Sol",
      blurb:
        "An AI Ethical Decision-Making Assistant Trained in Classical and Modern Philosophy",
      tags: ["LLM", "TypeScript", "RAG"],
      live: "/sol", // 👈 live button goes to your proxy route
      repo: "#",
      image: "/projects/philosopher-sol-cover.webp",
      alt: "Philosopher Sol preview",
    },
    {
      slug: "ai-travel-companion",
      title: "AI Travel Companion",
      blurb:
        "Trip planner + on-the-go concierge: routes, budgets, and vibe-based suggestions.",
      tags: ["Maps", "APIs", "Python/TS"],
      live: "#",
      repo: "#",
    },
    {
      slug: "claims-insights",
      title: "Claims/Data Thingy",
      blurb:
        "A claims insights dashboard: severity trends, fraud flags, cycle times, and exceptions.",
      tags: ["Tableau", "SQL", "Analytics"],
      live: "#",
      repo: "#",
    },
    {
      slug: "data-viz-dashboards",
      title: "Data Viz & Dashboards",
      blurb:
        "A gallery of dashboards and viz experiments—Tableau workbooks, Excel models, and curated datasets.",
      tags: ["Tableau", "Excel", "Datasets"],
      live: "#",
      repo: "#",
    },
    {
      slug: "just-for-fun",
      title: "Just for Fun",
      blurb:
        "Small programming experiments—CodePen/GitHub bits that show UI/UX, Python, and HTML/CSS skills.",
      tags: ["UI/UX", "Python", "HTML/CSS"],
      live: "#",
      repo: "#",
    },
  ];

  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h1>
      <p className="text-sub max-w-2xl mb-10">
        Six anchors of my portfolio. Click through for demos, write-ups, and code.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.slug} className="card p-6 md:p-7">
            {/* Cover */}
            <div className="cover" aria-hidden={p.image ? undefined : true}>
              {p.image && (
                <Image
                    src={p.image}
                    alt={p.alt ?? `${p.title} preview`}
                    fill
                    className="cover__img"
                    sizes="(min-width:1024px) 40vw, (min-width:768px) 50vw, 100vw"
                    priority={p.slug === "philosopher-sol"}
                />
              )}
            </div>

            {/* Title row */}
            <div className="flex items-start justify-between gap-4 mt-4">
              <h2 className="text-xl md:text-2xl font-medium">{p.title}</h2>
              <span
                aria-hidden
                className="inline-block h-3 w-3 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--brand), var(--accent))" }}
              />
            </div>

            {/* Blurb */}
            <p className="text-sub mt-2">{p.blurb}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="button glow-bounce" href={`/projects/${p.slug}`} prefetch={false}>
                View details
              </Link>

              {/* Live: internal Link for "/..." else external <a> */}
              {p.live.startsWith("/") ? (
                <Link className="button glow-bounce" href={p.live} prefetch={false}>
                  Live
                </Link>
              ) : (
                <a className="button glow-bounce" href={p.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}

              <a className="button glow-bounce" href={p.repo} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
<div className="cover">
  <Image
    src="/projects/philosopher-sol-cover.webp"
    alt="Philosopher Sol preview"
    fill
    className="cover__img"
    sizes="(min-width:1024px) 40vw, (min-width:768px) 50vw, 100vw"
    priority
    placeholder="blur"
    blurDataURL={blurDataURL()}
  />
</div>