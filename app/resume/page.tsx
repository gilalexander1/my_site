import Image from "next/image";

export default function ResumePage() {
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
    "VS Code"
  ];

{/* Top card — mobile: stacked; desktop: side-by-side */}
<section className="card p-6 md:p-8">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
    {/* Headshot */}
    <Image
      src="/headshot.jpg"                // ← change if your filename differs
      alt="Gil Alexander headshot"
      width={176} height={176}           // ~11rem circle
      priority
      className="rounded-full avatar-ring"
    />

    {/* Text block */}
    <div className="flex flex-col mt-2 md:mt-0 text-center md:text-left">
      <h1 className="text-4xl font-bold tracking-tight mb-2">
        Gil Alexander
      </h1>

      <p className="text-sub text-base md:text-lg leading-relaxed mb-5 md:max-w-3xl">
        Licensed Claims Adjuster · Data & AI Enthusiast · MBA Candidate · Space-themed design enthusiast 💫
      </p>

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        <a className="button button-sm" href="/Gil-Mallinson-Resume.pdf" download>
          Download Resume
        </a>
        <a className="button glow-bounce" href="/Gil-Mallinson-Resume.pdf" target="_blank">
          View PDF
        </a>
        <a className="button button-sm" href="mailto:gmallinson93@outlook.com">
          Email
        </a>
       <a className="button button-sm" href="https://www.linkedin.com/in/gilalexander" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>

{/* Top card — circle headshot left, text across */}
 return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Resume</h1>

      {/* Top card: headshot + quick actions */}
     <section className="card p-6 md:p-8">
  {/* Flex container for image + text */}
  <div className="flex items-center gap-8">
    
    {/* Left: Circular headshot with glow */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/headshot.jpg"   // ← your actual file name in /public
        alt="Gil Alexander headshot"
        width={180}
        height={180}
        priority
        className="rounded-full ring-2 ring-white/10 avatar-glow"
      />
    </div>

    {/* Right: Name, summary, links */}
    {/* Text block stacked vertically */}
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold tracking-tight mb-1">
        Gil Alexander
      </h1>
      <p className="text-sub text-lg leading-relaxed mb-5">
        Licensed Claims Adjuster · Data & AI Enthusiast · MBA Candidate · Space-themed design enthusiast 💫
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <a className="button button-sm" href="/Gil-Mallinson-Resume.pdf" download>
          Download Resume
        </a>
        <a className="button button-sm" href="/Gil-Mallinson-Resume.pdf" target="_blank">
          View PDF
        </a>
        <a className="button button-sm" href="mailto:gmallinson93@outlook.com">
          Email
        </a>
        <a className="button button-sm" href="https://www.linkedin.com/in/gilalexander" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>

  </div>
</section>

      {/* Skills */}
      <section className="mt-8 card p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-medium">Core Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="card p-6">
          <h3 className="text-lg font-medium">Personal Injury Protection (PIP) Adjuster</h3>
          <p className="text-sub">Progressive — Present</p>
          <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-sub">
            <li>Investigate, evaluate, and resolve PIP claims with clear, timely communication.</li>
            <li>Identify fraud indicators and escalate for SIU review when appropriate.</li>
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

      {/* Education + Certifications side-by-side */}
<section className="mt-8 grid gap-6 md:grid-cols-2">
  <article className="card p-6 md:p-8">
    <h2 className="text-xl md:text-2xl font-medium">Education</h2>
    <ul className="mt-3 list-disc pl-5 leading-7 text-sub">
      <li>MBA coursework — analytics & operations focus (update details)</li>
      <li>Relevant courses: Statistics, Operations, Data Visualization</li>
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
        <a className="button" href="/Gil-Mallinson-Resume.pdf" download>
          Resume
        </a>
        <a className="button" href="/projects">See Projects →</a>
      </section>
    </main>
  );
}