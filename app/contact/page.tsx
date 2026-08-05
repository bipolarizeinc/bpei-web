import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact BPEI | PolarPaw.Online",
  description:
    "Contact BI POLARIZE ENTERPRISES, INC. in Ogden, Utah. Start a Blueprint intake, request ETAS, explore the ecosystem, or reach the enterprise directly.",
};

const pathways = [
  {
    code: "01",
    title: "Start with your thing",
    description:
      "Use the guided intake when you have an idea, business, obstacle, project, or unfinished concept that needs direction.",
    href: "/intake",
    action: "Open Intake Channel",
  },
  {
    code: "02",
    title: "Align talent and roles",
    description:
      "Use ETAS when the challenge involves hiring, role placement, leadership readiness, team structure, development, or succession.",
    href: "/etas",
    action: "Explore ETAS",
  },
  {
    code: "03",
    title: "Explore the full platform",
    description:
      "Review how Blueprint, ETAS, P.O.L.A.R. OS, Lead Systems, Funding, Academy, and Command work together.",
    href: "/ecosystem",
    action: "View Ecosystem",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Contact BI POLARIZE ENTERPRISES, INC.</p>
          <h1>
            Bring us<br />
            <em>your thing.</em>
          </h1>
          <p>
            Start with the problem, idea, contradiction, opportunity, or half-built system. P.O.L.A.R. helps route the conversation before the work is scoped.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Tell Us About Your Thing
            </Link>
            <a className="button button-ghost" href="mailto:YourThing@PolarPaw.Online">
              Email BPEI
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="BPEI contact details">
          <strong>24/7</strong>
          <span>Digital intake access</span>
          <strong>OGDEN</strong>
          <span>Utah operations base</span>
          <strong>801</strong>
          <span>686-8143</span>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Choose the right entry point</p>
        <h2>
          You do not need<br />
          <em>to diagnose the system first.</em>
        </h2>
        <p className="section-intro">
          Pick the path closest to what is happening. BPEI can redirect the request internally after the real need becomes clear.
        </p>
        <div className="grid">
          {pathways.map((pathway) => (
            <article className="card" key={pathway.code}>
              <span>CONTACT PATH // {pathway.code}</span>
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
              <div className="actions">
                <Link className="button button-ghost" href={pathway.href}>
                  {pathway.action}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Direct contact</p>
        <h2>
          Clear channels.<br />
          <em>No scavenger hunt.</em>
        </h2>
        <div className="grid">
          <article className="card">
            <span>EMAIL</span>
            <h3>YourThing@PolarPaw.Online</h3>
            <p>Best for detailed ideas, documents, project context, partnership inquiries, and follow-up information.</p>
            <div className="actions">
              <a className="button button-ghost" href="mailto:YourThing@PolarPaw.Online">
                Send Email
              </a>
            </div>
          </article>
          <article className="card">
            <span>PHONE</span>
            <h3>801-686-8143</h3>
            <p>Best for direct contact when the request cannot reasonably be compressed into another form or dashboard.</p>
            <div className="actions">
              <a className="button button-ghost" href="tel:+18016868143">
                Call BPEI
              </a>
            </div>
          </article>
          <article className="card">
            <span>AVAILABILITY</span>
            <h3>Digital access 24/7</h3>
            <p>Intake can be submitted at any time. Review, scoping, scheduling, and project work follow enterprise availability.</p>
            <div className="actions">
              <Link className="button button-ghost" href="/intake">
                Begin Intake
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section polar">
        <div className="polar-orb" aria-hidden="true">
          <strong>P.</strong>
        </div>
        <div>
          <p className="eyebrow">What happens next</p>
          <h2>
            Context first.<br />
            <em>Scope second.</em>
          </h2>
          <p className="section-intro">
            BPEI reviews the request, identifies the most relevant system, surfaces missing information, and determines whether the next step is clarification, consultation, assessment, Blueprint extraction, or a defined project scope.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Start the Process
            </Link>
            <Link className="button button-ghost" href="/services">
              Review Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
