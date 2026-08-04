import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Talent Alignment System™ | BI POLARIZE ENTERPRISES, INC.",
  description:
    "ETAS helps organizations align people, roles, leadership potential, development pathways, and enterprise priorities.",
};

const evaluations = [
  "Core strengths and natural abilities",
  "Decision-making style",
  "Leadership readiness",
  "Communication patterns",
  "Operational discipline",
  "Creative and strategic capacity",
  "Role compatibility",
  "Training needs",
  "Growth potential",
  "Team and department fit",
];

const outputs = [
  "Talent Alignment Profile",
  "Recommended role placement",
  "Strength and risk summary",
  "Development plan",
  "Leadership pathway",
  "Role-gap analysis",
  "Team alignment map",
  "Succession recommendations",
  "Internal mobility options",
  "Executive review summary",
];

const process = [
  ["01", "Assess", "Collect information about the person, role, organization, and current challenges."],
  ["02", "Interpret", "Analyze strengths, friction points, judgment patterns, and untapped capability."],
  ["03", "Align", "Match the person to the role, authority level, responsibilities, and environment where they can perform best."],
  ["04", "Develop", "Create a practical path for training, advancement, support, or reassignment."],
  ["05", "Monitor", "Review performance and alignment as the person and enterprise evolve."],
];

const useCases = [
  "Hiring decisions",
  "Internal promotions",
  "Department restructuring",
  "Leadership development",
  "Succession planning",
  "Team formation",
  "Founder and executive alignment",
  "Contractor placement",
  "Performance intervention",
  "Workforce development",
];

export default function ETASPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Enterprise Talent Alignment System™</p>
          <h1>
            Talent is not the problem.<br />
            <em>Misalignment is.</em>
          </h1>
          <p>
            ETAS helps organizations place people where their capabilities, temperament, experience,
            judgment, and potential create the greatest enterprise value.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Begin Talent Alignment
            </Link>
            <a className="button button-ghost" href="#system">
              View the System
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="ETAS system summary">
          <strong>RIGHT PERSON</strong>
          <span>Aligned to the right role</span>
          <strong>RIGHT ROLE</strong>
          <span>Designed around real enterprise need</span>
          <strong>RIGHT TRAJECTORY</strong>
          <span>Supported by a practical development path</span>
        </div>
      </section>

      <section className="section" id="system">
        <p className="eyebrow">Workforce Intelligence and Organizational Alignment</p>
        <h2>
          Put the right people<br />
          <em>in the right roles.</em>
        </h2>
        <p className="section-intro">
          ETAS connects talent, responsibilities, leadership potential, operational gaps, development
          pathways, and enterprise priorities. It goes beyond résumés and personality tests to examine
          how a person can actually contribute, lead, grow, and fit within the larger operating system.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">What ETAS Evaluates</p>
        <h2>
          Human capability,<br />
          <em>examined in context.</em>
        </h2>
        <div className="grid">
          {evaluations.map((item, index) => (
            <article className="card" key={item}>
              <span>ASSESSMENT AREA // {String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What ETAS Produces</p>
        <h2>
          Insight converted<br />
          <em>into placement decisions.</em>
        </h2>
        <div className="grid">
          {outputs.map((item, index) => (
            <article className="card" key={item}>
              <span>DELIVERABLE // {String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">The ETAS Process</p>
        <h2>
          Assess. Align.<br />
          <em>Strengthen the enterprise.</em>
        </h2>
        <div className="grid">
          {process.map(([number, title, description]) => (
            <article className="card" key={number}>
              <span>STAGE {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Use Cases</p>
        <h2>
          Built for decisions<br />
          <em>that affect the whole system.</em>
        </h2>
        <div className="grid">
          {useCases.map((item, index) => (
            <article className="card" key={item}>
              <span>APPLICATION // {String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section polar">
        <div className="polar-orb" aria-hidden="true">
          <strong>P.</strong>
        </div>
        <div>
          <p className="eyebrow">P.O.L.A.R. Integration</p>
          <h2>
            Talent decisions become<br />
            <em>institutional memory.</em>
          </h2>
          <p className="section-intro">
            P.O.L.A.R. preserves assessment history, compares role requirements, surfaces conflicts,
            tracks development, and helps leadership revisit alignment as responsibilities change.
            Important people decisions no longer disappear into scattered notes, forgotten spreadsheets,
            or somebody's suspiciously optimistic intuition.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Start ETAS Intake
            </Link>
            <Link className="button button-ghost" href="/services">
              Explore BPEI Systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
