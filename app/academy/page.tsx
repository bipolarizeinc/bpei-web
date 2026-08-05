import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BPEI Academy™ | PolarPaw.Online",
  description:
    "BPEI Academy turns enterprise knowledge into guided training, practical implementation, workforce development, and reusable learning systems.",
};

const tracks = [
  ["01", "Founder development", "Business structure, decision-making, positioning, operating discipline, and the transition from idea-holder to enterprise leader."],
  ["02", "Workforce training", "Role-specific instruction, onboarding, SOP mastery, performance expectations, and development pathways connected to ETAS."],
  ["03", "Operational implementation", "Guided use of documents, workflows, software, dashboards, records, and enterprise systems so deliverables become working habits."],
  ["04", "Financial readiness", "Training around lender expectations, business records, funding narratives, projections, and responsible capital deployment."],
  ["05", "Technology and automation", "Practical education for AI tools, workflow automation, connected systems, data hygiene, and responsible digital operations."],
  ["06", "Leadership pathways", "Structured advancement, supervisory readiness, succession preparation, coaching, and internal capability-building."],
];

const formats = [
  "Guided learning pathways",
  "Live workshops and intensives",
  "Self-paced operating modules",
  "Role-specific training packets",
  "Implementation labs",
  "Founder and executive coaching",
  "Team onboarding systems",
  "Knowledge checks and reviews",
  "Reusable enterprise curriculum",
];

export default function AcademyPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">BPEI Academy™</p>
          <h1>
            Knowledge is not enough.<br />
            <em>Capability must be built.</em>
          </h1>
          <p>
            BPEI Academy converts enterprise knowledge into practical training, guided implementation, role development, and repeatable learning systems that people can actually use at work.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Enter the Academy Pathway
            </Link>
            <a className="button button-ghost" href="#tracks">
              Explore Training Tracks
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Academy summary">
          <strong>LEARN</strong>
          <span>Understand the system and the reason behind it</span>
          <strong>APPLY</strong>
          <span>Practice inside real operating work</span>
          <strong>ADVANCE</strong>
          <span>Build readiness for greater responsibility</span>
        </div>
      </section>

      <section className="section" id="tracks">
        <p className="eyebrow">Enterprise Learning Architecture</p>
        <h2>
          Training connected<br />
          <em>to actual responsibility.</em>
        </h2>
        <p className="section-intro">
          The Academy is not a warehouse of videos people forget they purchased. Learning is attached to roles, workflows, products, performance, advancement, and measurable operating outcomes.
        </p>
        <div className="grid">
          {tracks.map(([number, title, description]) => (
            <article className="card" key={number}>
              <span>TRAINING TRACK // {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Delivery formats</p>
        <h2>
          Built for repetition.<br />
          <em>Designed for implementation.</em>
        </h2>
        <div className="grid">
          {formats.map((item, index) => (
            <article className="card" key={item}>
              <span>FORMAT // {String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section polar">
        <div className="polar-orb" aria-hidden="true"><strong>P.</strong></div>
        <div>
          <p className="eyebrow">P.O.L.A.R. learning continuity</p>
          <h2>
            Training becomes<br />
            <em>institutional memory.</em>
          </h2>
          <p className="section-intro">
            P.O.L.A.R. can connect learning history, role requirements, ETAS development paths, operating documents, and future review points so training remains part of the enterprise instead of vanishing after orientation week.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">Start a Learning Path</Link>
            <Link className="button button-ghost" href="/etas">Connect With ETAS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
