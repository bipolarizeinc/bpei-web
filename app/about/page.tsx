import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BPEI | BI POLARIZE ENTERPRISES, INC.",
  description:
    "Learn how BI POLARIZE ENTERPRISES, INC. turns unconventional founder intelligence into durable enterprise infrastructure.",
};

const principles = [
  {
    label: "MISSION",
    title: "Engineer possibility",
    description:
      "Convert unconventional thinking into functional, scalable, protected operating reality.",
  },
  {
    label: "VISION",
    title: "Founder intelligence, preserved",
    description:
      "Build enterprises that retain their original intent while becoming capable of operating beyond one person.",
  },
  {
    label: "DOCTRINE",
    title: "Balance · Innovate · Polarize",
    description:
      "Use disciplined duality to expose weak assumptions, sharpen decisions, and create stronger systems.",
  },
];

const differences = [
  [
    "01",
    "We retrieve before we reduce",
    "Most systems force an idea into a familiar box too early. BPEI captures the whole thing first, including the contradictions, ambition, context, and intent conventional intake usually strips away.",
  ],
  [
    "02",
    "We architect before we decorate",
    "Branding matters, but presentation cannot rescue weak infrastructure. We define the operating logic, offer, roles, workflows, records, and outcomes before polishing the surface.",
  ],
  [
    "03",
    "We connect the work",
    "Documents, branding, automation, funding readiness, talent alignment, and growth systems belong to one enterprise. We build them to communicate instead of leaving clients with twelve unrelated vendors and seventeen passwords.",
  ],
  [
    "04",
    "We preserve institutional memory",
    "Founder intent, key decisions, systems, and operating knowledge are treated as infrastructure rather than disposable project notes.",
  ],
];

const method = [
  ["01", "Extract", "Capture the unfiltered idea, context, obstacle, and intended result."],
  ["02", "Polarize", "Test the idea from opposing angles until assumptions and risks become visible."],
  ["03", "Architect", "Translate insight into roles, workflows, documents, systems, and priorities."],
  ["04", "Build", "Create practical assets and infrastructure that can be used immediately."],
  ["05", "Institutionalize", "Preserve knowledge and establish continuity for growth, delegation, and succession."],
];

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">About BI POLARIZE ENTERPRISES, INC.</p>
          <h1>
            Built for ideas<br />
            <em>that do not fit the template.</em>
          </h1>
          <p>
            BPEI is an innovation infrastructure company headquartered in Ogden, Utah. We help founders convert raw vision into structured companies, documented operations, distinctive brands, intelligent systems, and durable institutional memory.
          </p>
          <div className="actions">
            <Link className="button" href="/ecosystem">
              Explore the Ecosystem
            </Link>
            <Link className="button button-ghost" href="/intake">
              Tell Us About Your Thing
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="BPEI identity summary">
          <strong>2024</strong>
          <span>Enterprise established</span>
          <strong>12</strong>
          <span>Connected flagship systems</span>
          <strong>1</strong>
          <span>Shared operating intelligence</span>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What BPEI is</p>
        <h2>
          Not another agency.<br />
          <em>An enterprise architecture laboratory.</em>
        </h2>
        <p className="section-intro">
          BPEI operates where business formation, strategy, documentation, branding, technology, talent, funding readiness, and institutional memory overlap. The work is not limited to advice. We engineer the systems, records, assets, and pathways required to move an idea from concept to function.
        </p>
        <div className="grid">
          {principles.map((principle) => (
            <article className="card" key={principle.label}>
              <span>{principle.label}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Why the company exists</p>
        <h2>
          Good ideas are rarely the problem.<br />
          <em>Fragmented execution is.</em>
        </h2>
        <p className="section-intro">
          Founders are routinely handed isolated deliverables without the architecture connecting them. A logo lives in one folder. Policies live somewhere else. The website says one thing, the funding package says another, and nobody can remember why a key decision was made. BPEI was built to end that fragmentation.
        </p>
        <div className="grid">
          {differences.map(([number, title, description]) => (
            <article className="card" key={number}>
              <span>BPEI DIFFERENCE // {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="method">
        <p className="eyebrow">The Bipolarization Method™</p>
        <h2>
          Friction becomes fuel.<br />
          <em>Chaos becomes architecture.</em>
        </h2>
        <p className="section-intro">
          Polarization is not conflict for its own sake. It is the disciplined use of opposing perspectives to expose weakness, protect intent, and create systems strong enough to survive contact with reality.
        </p>
        <div className="grid">
          {method.map(([number, title, description]) => (
            <article className="card" key={number}>
              <span>STAGE {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section polar">
        <div className="polar-orb" aria-hidden="true">
          <strong>P.</strong>
        </div>
        <div>
          <p className="eyebrow">P.O.L.A.R. OS™</p>
          <h2>
            Memory is not a feature.<br />
            <em>It is infrastructure.</em>
          </h2>
          <p className="section-intro">
            P.O.L.A.R. is the intelligence layer connecting the BPEI ecosystem. It supports guided intake, knowledge retrieval, institutional memory, workflow continuity, decision support, and system coordination. The cybernetic guide dog is the interface. The operating system is the architecture behind it.
          </p>
          <div className="actions">
            <Link className="button" href="/ecosystem">
              See the Connected System
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Founder’s Declaration</p>
        <h2>
          This company was not built<br />
          <em>to imitate what already exists.</em>
        </h2>
        <p className="section-intro">
          BI POLARIZE ENTERPRISES, INC. was created for people carrying ideas too layered, unconventional, or ambitious for ordinary templates. We do not flatten those ideas to make them easier to explain. We retrieve them, challenge them, structure them, and build the infrastructure required to make them real.
        </p>
        <p className="section-intro">
          The work must remain practical. Vision without execution is decoration. Execution without vision is machinery with no purpose. BPEI exists between those poles, where imagination is disciplined into systems and systems remain accountable to the reason they were created.
        </p>
        <p className="section-intro">
          We are building more than services. We are building continuity, memory, opportunity, and a platform capable of carrying a thing from first thought to lasting institution.
        </p>
        <div className="actions">
          <Link className="button" href="/intake">
            Bring Us Your Thing
          </Link>
          <Link className="button button-ghost" href="/services">
            Explore What We Build
          </Link>
        </div>
      </section>
    </>
  );
}
