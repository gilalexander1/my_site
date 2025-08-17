// app/resume/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ResumePage() {
  // single source of truth for your pills
  const skills = [
    "PIP/BI Adjusting",
    "Fraud Indicators",
    "SQL",
    "Tableau",
    "Python",
    "Process Design",
    "Risk Analysis",
    "API/AI Implementation",
    "Microsoft Excel",
    "VS Code",
  ];

  return (
    <>
      <div className="container py-16">
        {/* Top card: headshot + quick actions */}
        <section className="card p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
            {/* Headshot */}
            <Image
              src="/headshot.jpg"              // make sure this exists in /public
              alt="Gil Alexander headshot"
              width={180}
              height={180}
              priority
              className="rounded-full avatar-glow"
            />

            {/* Text + actions */}
            <div className="flex flex-col mt-2 md:mt-0 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight mb-2">Gil Alexander</h1>
              <p className="text-sub text-base md:text-lg leading-relaxed mb-5 md:max-w-3xl">
                Licensed Claims Adjuster · Data &amp; AI Enthusiast · MBA Candidate · Space-themed design enthusiast 💫
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a className="button button--sm button--glow" href="/Gil-Mallinson-Resume.pdf" download>
                  Download Resume
                </a>
                <a className="button button--sm button--glow" href="/Gil-Mallinson-Resume.pdf" target="_blank" rel="noreferrer">
                  View PDF
                </a>
                <a className="button button--sm button--glow" href="mailto:gmallinson93@outlook.com">
                  Email
                </a>
                <a className="button button--sm button--glow" href="https://www.linkedin.com/in/gilalexander" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8 card p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-medium">Core Skills</h2>
          <div className="pills mt-4">
            {skills.map((s, i) => {
              // rotate through calm tones
              const tones = ["tone-slate", "tone-aqua", "tone-violet", "tone-gold"];
              const tone = tones[i % tones.length];
              return (
                <span key={s} className={`pill pill--solid ${tone}`}>
                  {s}
                </span>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="text-lg font-medium">Personal Injury Protection (PIP) Adjuster</h3>
            <p className="text-sub">Progressive — Present</p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-sub">
              <li>Investigate, evaluate, and resolve PIP/BI/UM claims.</li>
              <li>Fraud analysis and investigation.</li>
              <li>Partner with ops/analytics to surface cycle-time exceptions and severity trends.</li>
            </ul>
          </article>

          <article className="card p-6">
            <h3 className="text-lg font-medium">Operations / Analytics Projects</h3>
            <p className="text-sub">Selected initiatives</p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-sub">
              <li>Claims Insights Dashboard (Tableau + SQL): reduced review time ~22%.</li>
              <li>Operations KPI Monitor (Python + Airflow): cut missed-SLA ~15% via load balance.</li>
              <li>Process docs + training snippets for faster onboarding and consistency.</li>
            </ul>
          </article>
        </section>

        {/* Education + Certifications */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="card p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-medium">Education</h2>
            <ul className="mt-3 list-disc pl-5 leading-7 text-sub">
                <h3 className="text-lg font-medium"> MBA Data Analytics — Louisiana State University </h3>
                <p>Relevant courses: Statistics, Operations, Data Visualization</p>
            <h3 className="text-lg font-medium">BA Philosophy & Cognitive Science - University of Central Florida</h3>
              <li>Relevant courses: Formal Logic, Machine Learning, Ethical Reasoning and Decision Making</li>
            </ul>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-medium">Certifications</h2>
            <ul className="mt-3 list-disc pl-5 leading-7 text-sub">
              <li>Licensed Claims Adjuster (state specific)</li>
              <li>Tableau, SQL, Python — practical use in projects</li>
            </ul>
          </article>
        </section>

        {/* Footer actions */}
        <section className="mt-8 flex gap-3">
          <a className="button button--sm button--glow" href="/Gil-Mallinson-Resume.pdf" download>
            Resume
          </a>
          <Link className="button button--sm button--glow" href="/projects">
            See Projects →
          </Link>
        </section>
      </div>
    </>
  );
}
