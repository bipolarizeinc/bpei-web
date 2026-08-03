import Link from "next/link";

const modules = [
  ["01", "Blueprint™", "Business architecture that turns founder intelligence into scalable operating infrastructure."],
  ["02", "Dr.Docx™", "Enterprise documentation, SOPs, policies, manuals, proposals, and governed knowledge systems."],
  ["03", "BrandForge™", "Identity engineering, visual systems, campaigns, and production-ready brand assets."],
  ["04", "LaunchPad™", "Formation, compliance, banking readiness, and practical operational setup."],
  ["05", "Nexus™", "AI agents, integrations, portals, CRM systems, and workflow automation."],
  ["06", "Pulse™", "Dashboards, reporting, forecasting, analytics, and executive intelligence."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Innovation Infrastructure · Ogden, Utah</p>
          <h1>Turn ideas<br/><em>into institutions.</em></h1>
          <p>BI POLARIZE ENTERPRISES, INC. converts unconventional founder intelligence into durable business architecture, documentation, automation, and launch-ready systems.</p>
          <div className="actions"><Link className="button" href="/intake">Tell Us About Your Thing</Link><Link className="button button-ghost" href="/services">Explore Capabilities</Link></div>
        </div>
        <div className="hero-panel" aria-label="BPEI system summary"><strong>1 CORE</strong><span>Unified intelligence</span><strong>9</strong><span>Connected service modules</span><strong>24/7</strong><span>P.O.L.A.R. intake access</span></div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">All the business for your business</p>
        <h2>One system.<br/><em>Multiple ways to build.</em></h2>
        <p className="section-intro">Each flagship product connects strategy, documentation, design, automation, and institutional memory instead of scattering your company across disconnected vendors.</p>
        <div className="grid">{modules.map(([n,title,description])=><article className="card" key={n}><span>BPEI MODULE // {n}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="section" id="method">
        <p className="eyebrow">The Bipolarization Method</p>
        <h2>Chaos engineered<br/><em>into clarity.</em></h2>
        <div className="grid">{[["01","Extract","Retrieve the full idea before simplifying it."],["02","Polarize","Challenge assumptions from opposing angles."],["03","Architect","Convert insight into systems and workflows."],["04","Build","Deploy practical assets, tools, and infrastructure."],["05","Institutionalize","Preserve intelligence so the company remembers."]].map(([n,t,d])=><article className="card" key={n}><span>STAGE {n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="section polar" id="polar">
        <div className="polar-orb"><strong>P.</strong></div>
        <div><p className="eyebrow">P.O.L.A.R. · Active Guidance</p><h2>Memory is not a feature.<br/><em>It is infrastructure.</em></h2><p className="section-intro">P.O.L.A.R. is the Personalized Operations Liaison and Autonomous Retriever. He protects founder intent, retrieves scattered knowledge, challenges weak logic, and connects every BPEI module to one operating memory.</p><div className="actions"><Link className="button" href="/intake">Initialize Blueprint Extraction</Link></div></div>
      </section>
    </>
  );
}
