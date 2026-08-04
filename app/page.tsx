import Link from "next/link";

const modules = [
  ["01", "The Bipolarized Blueprint™", "Founder vision translated into business architecture, priorities, systems, and a practical path from idea to function."],
  ["02", "Sav.VidzGen™", "Launch videos, branded media, campaign assets, and production systems designed to make complex ideas clear and memorable."],
  ["03", "Dr.Docx™", "Enterprise documents, SOPs, policies, manuals, proposals, agreements, and governed institutional records."],
  ["04", "BrandForge™", "Identity engineering, visual systems, messaging, campaigns, and production-ready brand assets."],
  ["05", "LaunchPad™", "Formation, compliance, banking readiness, operational setup, and launch preparation for new ventures."],
  ["06", "Nexus™", "AI agents, workflow automation, portals, CRM systems, integrations, and connected business infrastructure."],
  ["07", "Pulse™", "Dashboards, reporting, forecasting, analytics, and executive intelligence for better decisions."],
  ["08", "Vault™", "Institutional memory, controlled knowledge, records architecture, asset libraries, and business continuity."],
  ["09", "Cipher™", "Digital protection, access control, risk awareness, privacy practices, and secure operational design."],
];

const method = [
  ["01", "Extract", "Retrieve the whole idea before reducing it to what sounds conventional."],
  ["02", "Polarize", "Challenge the idea from opposing angles until weak assumptions become visible."],
  ["03", "Architect", "Convert insight into roles, workflows, documents, systems, and measurable outcomes."],
  ["04", "Build", "Deploy practical assets and infrastructure that can be used immediately."],
  ["05", "Institutionalize", "Preserve founder intent so the enterprise can grow without forgetting itself."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Innovation Infrastructure · Ogden, Utah</p>
          <h1>Turn ideas<br/><em>into institutions.</em></h1>
          <p>BI POLARIZE ENTERPRISES, INC. converts unconventional founder intelligence into durable business architecture, documentation, branding, automation, and launch-ready systems.</p>
          <div className="actions">
            <Link className="button" href="/intake">Tell Us About Your Thing</Link>
            <Link className="button button-ghost" href="/services">Explore Capabilities</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="BPEI system summary">
          <strong>1 CORE</strong><span>Unified enterprise intelligence</span>
          <strong>9</strong><span>Connected flagship products</span>
          <strong>24/7</strong><span>P.O.L.A.R. intake access</span>
        </div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">All the business for your business</p>
        <h2>One system.<br/><em>Nine ways to build.</em></h2>
        <p className="section-intro">Each flagship product works inside one connected enterprise architecture instead of scattering your company across unrelated vendors, files, and half-finished systems.</p>
        <div className="grid">
          {modules.map(([n, title, description]) => (
            <article className="card" key={n}>
              <span>BPEI MODULE // {n}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="method">
        <p className="eyebrow">The Bipolarization Method</p>
        <h2>Chaos engineered<br/><em>into clarity.</em></h2>
        <div className="grid">
          {method.map(([n, title, description]) => (
            <article className="card" key={n}>
              <span>STAGE {n}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section polar" id="polar">
        <div className="polar-orb" aria-hidden="true"><strong>P.</strong></div>
        <div>
          <p className="eyebrow">P.O.L.A.R. · Active Guidance</p>
          <h2>Memory is not a feature.<br/><em>It is infrastructure.</em></h2>
          <p className="section-intro">P.O.L.A.R. is the Personalized Operations Liaison and Autonomous Retriever. He protects founder intent, retrieves scattered knowledge, challenges weak logic, and connects every BPEI product to one operating memory.</p>
          <div className="actions"><Link className="button" href="/intake">Initialize Blueprint Extraction</Link></div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Local POLAR Lead Systems</p>
        <h2>Local relationships.<br/><em>Enterprise intelligence.</em></h2>
        <p className="section-intro">Local POLAR Lead Systems extend BPEI into community-level lead generation, relationship development, service matching, and accountable follow-through while preserving one enterprise standard.</p>
        <div className="actions"><Link className="button" href="/contact">Connect With BPEI</Link></div>
      </section>
    </>
  );
}
