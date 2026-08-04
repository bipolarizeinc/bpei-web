import Link from "next/link";

const flagshipProducts = [
  ["01", "The Bipolarized Blueprint™", "Founder vision translated into business architecture, priorities, systems, and a practical path from idea to function.", "/services"],
  ["02", "Enterprise Talent Alignment System™", "People, roles, strengths, leadership potential, and development pathways aligned with the actual needs of the enterprise.", "/etas"],
  ["03", "Sav.VidzGen™", "Launch videos, branded media, campaign assets, and production systems that make complex ideas clear and memorable.", "/services"],
  ["04", "Dr.Docx™", "Enterprise documents, SOPs, policies, manuals, proposals, agreements, and governed institutional records.", "/services"],
  ["05", "BrandForge™", "Identity engineering, visual systems, messaging, campaigns, and production-ready brand assets.", "/services"],
  ["06", "LaunchPad™", "Formation, compliance, banking readiness, operational setup, and practical launch preparation.", "/services"],
  ["07", "Nexus™", "AI agents, workflow automation, portals, CRM systems, integrations, and connected business infrastructure.", "/services"],
  ["08", "Pulse™", "Dashboards, reporting, forecasting, analytics, and executive intelligence for stronger decisions.", "/services"],
  ["09", "Vault™ + Cipher™", "Institutional memory, records architecture, access control, privacy, continuity, and secure operational design.", "/services"],
];

const ecosystemModules = [
  ["START", "Tell Us About Your Thing™", "The universal entry point for ideas, problems, opportunities, and unconventional founder intelligence.", "/intake"],
  ["DEFINE", "Identify Your Thing™", "Clarify what the thing is, who it serves, why it matters, and what it must become.", "/intake"],
  ["ALIGN", "ETAS™", "Place people where their capability, temperament, responsibility, and potential create the greatest value.", "/etas"],
  ["ARCHITECT", "Blueprint™", "Convert the clarified idea into systems, priorities, documents, workflows, and deployment plans.", "/services"],
  ["CONNECT", "P.O.L.A.R. OS™", "Preserve context, retrieve knowledge, guide decisions, and connect every authorized system.", "/ecosystem"],
  ["EXPAND", "Lead · Funding · Academy · Command", "Generate opportunity, engineer readiness, develop capability, and manage the enterprise from one connected platform.", "/ecosystem"],
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
          <h1>
            Off the wall.<br />
            <em>Out of the box.</em>
          </h1>
          <p>
            BI POLARIZE ENTERPRISES, INC. turns unconventional ideas into functional enterprises through business architecture, talent alignment, documentation, branding, automation, funding readiness, and connected intelligence.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Tell Us About Your Thing
            </Link>
            <Link className="button button-ghost" href="/ecosystem">
              Explore the Ecosystem
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="BPEI system summary">
          <strong>1 CORE</strong>
          <span>Unified enterprise intelligence</span>
          <strong>9</strong>
          <span>Connected flagship products</span>
          <strong>24/7</strong>
          <span>P.O.L.A.R. intake access</span>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">The BPEI Ecosystem</p>
        <h2>
          One enterprise.<br />
          <em>Multiple specialized systems.</em>
        </h2>
        <p className="section-intro">
          Every BPEI product can work independently, but the real power appears when they share context, client data, institutional memory, and the P.O.L.A.R. intelligence layer.
        </p>
        <div className="grid">
          {ecosystemModules.map(([stage, title, description, href]) => (
            <article className="card" key={stage}>
              <span>{stage}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="actions">
                <Link className="button button-ghost" href={href}>
                  Open System
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="actions">
          <Link className="button" href="/ecosystem">
            View the Full Ecosystem
          </Link>
        </div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">All the business for your business</p>
        <h2>
          One system.<br />
          <em>Nine ways to build.</em>
        </h2>
        <p className="section-intro">
          Strategy, people, documents, design, media, automation, intelligence, records, and security are engineered as one connected enterprise architecture instead of scattered across unrelated vendors and half-finished systems.
        </p>
        <div className="grid">
          {flagshipProducts.map(([number, title, description, href]) => (
            <article className="card" key={number}>
              <span>BPEI FLAGSHIP // {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="actions">
                <Link className="button button-ghost" href={href}>
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section polar">
        <div className="polar-orb" aria-hidden="true">
          <strong>P.</strong>
        </div>
        <div>
          <p className="eyebrow">P.O.L.A.R. OS™ · Active Guidance</p>
          <h2>
            The avatar is the guide.<br />
            <em>The OS is the intelligence.</em>
          </h2>
          <p className="section-intro">
            P.O.L.A.R. preserves founder intent, retrieves scattered knowledge, challenges weak logic, connects authorized systems, and carries context throughout the BPEI ecosystem.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Initialize Your Thing
            </Link>
            <Link className="button button-ghost" href="/ecosystem">
              See How It Connects
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="method">
        <p className="eyebrow">The Bipolarization Method</p>
        <h2>
          Chaos engineered<br />
          <em>into clarity.</em>
        </h2>
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

      <section className="section">
        <p className="eyebrow">Enterprise Talent Alignment System™</p>
        <h2>
          Talent is not the problem.<br />
          <em>Misalignment is.</em>
        </h2>
        <p className="section-intro">
          ETAS helps organizations place people where their strengths, working style, judgment, experience, and potential create the greatest value for the enterprise.
        </p>
        <div className="actions">
          <Link className="button" href="/etas">
            Explore ETAS
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Local POLAR Lead Systems™</p>
        <h2>
          Local relationships.<br />
          <em>Enterprise intelligence.</em>
        </h2>
        <p className="section-intro">
          Local POLAR Lead Systems extend BPEI into community-level lead generation, relationship development, service matching, and accountable follow-through while preserving one enterprise standard.
        </p>
        <div className="actions">
          <Link className="button" href="/contact">
            Connect With BPEI
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">From idea to functional</p>
        <h2>
          Your thing deserves<br />
          <em>more than disconnected services.</em>
        </h2>
        <p className="section-intro">
          It deserves an enterprise capable of identifying it, aligning the right people around it, building it, remembering it, and carrying it forward.
        </p>
        <div className="actions">
          <Link className="button" href="/intake">
            Tell Us About Your Thing
          </Link>
          <Link className="button button-ghost" href="/ecosystem">
            Enter the Ecosystem
          </Link>
        </div>
      </section>
    </>
  );
}
