export default function ProjectsPage() {
  const projects = [
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
      title: "Philosopher Sol",
      blurb:
        "An AI companion that speaks in my voice—existential, grounded, and a little cosmic.",
      tags: ["LLM", "TypeScript", "RAG"],
      live: "#",
      repo: "#",
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
      live: "#", // link to a gallery page or a Notion/Drive later
      repo: "#",
    },
    {
      slug: "just-for-fun",
      title: "Just for Fun",
      blurb:
        "Small programming experiments—CodePen/GitHub bits that show UI/UX, Python, and HTML/CSS skills.",
      tags: ["UI/UX", "Python", "HTML/CSS"],
      live: "#", // link to a list of pens/repos later
      repo: "#",
    },
  ] as const;

  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h1>
      <p className="text-sub max-w-2xl mb-10">
        Six anchors of my portfolio. Click through for demos, write-ups, and code.
      </p>

      <div className="projects-grid grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="card p-6 md:p-7">
            <div className="cover" aria-hidden />
            <div className="flex items-start justify-between gap-4 mt-4">
              <h2 className="text-xl md:text-2xl font-medium">{p.title}</h2>
              <span
                aria-hidden
                className="inline-block h-3 w-3 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--brand), var(--accent))" }}
              />
            </div>

            <p className="text-sub mt-2">{p.blurb}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="button glow-bounce" href={`/projects/${p.slug}`}>View details</a>
              <a className="button glow-bounce" href={p.live} target="_blank">Live</a>
              <a className="button glow-bounce" href={p.repo} target="_blank">Code</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
import Image from "next/image";

// inside your <article className="card"> … </article>
<div className="cover" aria-hidden="true">
  <Image
    src="/projects/philosopher-sol-cover.webp"
    alt="Philosopher Sol preview"
    fill
    className="cover__img"
    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
    priority
  />
</div>
