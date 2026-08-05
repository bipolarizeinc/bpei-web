import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | BI POLARIZE ENTERPRISES, INC.",
  description:
    "Explore BPEI flagship products, enterprise systems, and practical business infrastructure designed to move ideas from concept to function.",
};

const products = [
  {
    code: "01",
    title: "The Bipolarized Blueprint™",
    category: "Enterprise Architecture",
    description:
      "Founder intelligence translated into a practical operating architecture, including positioning, priorities, workflows, documentation, revenue logic, and deployment direction.",
    outcomes: ["Strategic architecture", "Execution roadmap", "System priorities"],
    href: "/intake",
    action: "Start a Blueprint",
  },
  {
    code: "02",
    title: "Enterprise Talent Alignment System™",
    category: "Workforce Intelligence",
    description:
      "A structured system for matching people, roles, strengths, development needs, leadership potential, and enterprise priorities.",
    outcomes: ["Role alignment", "Talent profiles", "Development pathways"],
    href: "/etas",
    action: "Explore ETAS",
  },
  {
    code: "03",
    title: "Sav.VidzGen™",
    category: "Media Systems",
    description:
      "Launch videos, branded media, campaign assets, visual storytelling, and repeatable production systems that make complicated ideas easier to understand.",
    outcomes: ["Launch media", "Campaign assets", "Video systems"],
    href: "/contact",
    action: "Plan a Media Build",
  },
  {
    code: "04",
    title: "Dr.Docx™",
    category: "Document Engineering",
    description:
      "Enterprise-grade SOPs, policies, manuals, proposals, agreements, templates, record systems, and governed institutional documentation.",
    outcomes: ["Operational documents", "Controlled templates", "Institutional records"],
    href: "/contact",
    action: "Engineer Documents",
  },
  {
    code: "05",
    title: "BrandForge™",
    category: "Brand Infrastructure",
    description:
      "Identity engineering, positioning, visual systems, messaging, campaigns, and production-ready assets designed to work consistently across the enterprise.",
    outcomes: ["Brand system", "Messaging architecture", "Production assets"],
    href: "/contact",
    action: "Build the Brand",
  },
  {
    code: "06",
    title: "LaunchPad™",
    category: "Formation and Launch",
    description:
      "Formation guidance, compliance organization, business-presence setup, banking readiness, launch preparation, and practical operational support.",
    outcomes: ["Launch structure", "Readiness checklist", "Operational setup"],
    href: "/intake",
    action: "Prepare to Launch",
  },
  {
    code: "07",
    title: "Nexus™",
    category: "Automation and Integration",
    description:
      "AI agents, workflow automation, portals, CRM systems, data connections, and integrated business infrastructure that reduce repetitive work.",
    outcomes: ["Connected workflows", "AI assistance", "Process automation"],
    href: "/contact",
    action: "Connect the Systems",
  },
  {
    code: "08",
    title: "Pulse™",
    category: "Executive Intelligence",
    description:
      "Dashboards, reporting, forecasting, analytics, decision support, and operational visibility for founders and enterprise leadership.",
    outcomes: ["Performance visibility", "Executive reporting", "Decision intelligence"],
    href: "/contact",
    action: "Build a Command View",
  },
  {
    code: "09",
    title: "Vault™",
    category: "Institutional Memory",
    description:
      "Records architecture, asset libraries, controlled knowledge, retrieval systems, continuity planning, and enterprise memory preservation.",
    outcomes: ["Knowledge control", "Asset organization", "Business continuity"],
    href: "/contact",
    action: "Protect the Memory",
  },
  {
    code: "10",
    title: "Cipher™",
    category: "Digital Protection",
    description:
      "Access-control planning, privacy practices, risk awareness, secure operational design, and digital-protection standards for growing organizations.",
    outcomes: ["Access structure", "Risk controls", "Privacy practices"],
    href: "/contact",
    action: "Strengthen Protection",
  },
  {
    code: "11",
    title: "Local POLAR Lead Systems™",
    category: "Lead Infrastructure",
    description:
      "Localized lead-generation, market targeting, relationship development, service matching, and follow-through systems built around specific communities.",
    outcomes: ["Local lead flow", "Market targeting", "Follow-up system"],
    href: "/contact",
    action: "Build a Lead System",
  },
  {
    code: "12",
    title: "BPEI Lender Readiness System™",
    category: "Capital Readiness",
    description:
      "Business positioning, documentation, financial narrative, application preparation, and funding-readiness engineering. Do not merely apply. Engineer approval.",
    outcomes: ["Funding narrative", "Document readiness", "Application positioning"],
    href: "/lender-readiness",
    action: "Explore Lender Readiness",
  },
];

const pathways = [
  ["STARTING", "I have an idea", "Begin with Tell Us About Your Thing™ and the Bipolarized Blueprint™."],
  ["BUILDING", "I need systems", "Use Dr.Docx™, Nexus™, Vault™, Pulse™, or BrandForge™ to strengthen operations."],
  ["GROWING", "I need people, leads, or funding", "Use ETAS™, Local POLAR Lead Systems™, and Lender Readiness™."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">BPEI Flagship Product Network</p>
          <h1>
            Infrastructure that<br />
            <em>works together.</em>
          </h1>
          <p>
            BPEI combines architecture, talent alignment, documentation, media, automation, intelligence, lead systems, funding readiness, and institutional memory inside one connected enterprise.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Tell Us About Your Thing
            </Link>
            <Link className="button button-ghost" href="/ecosystem">
              View the Ecosystem
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Service network summary">
          <strong>12</strong>
          <span>Connected flagship systems</span>
          <strong>1</strong>
          <span>Enterprise architecture</span>
          <strong>24/7</strong>
          <span>P.O.L.A.R. intake access</span>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Find your entry point</p>
        <h2>
          Start where you are.<br />
          <em>Build what you need.</em>
        </h2>
        <div className="grid">
          {pathways.map(([status, title, description]) => (
            <article className="card" key={status}>
              <span>{status}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="products">
        <p className="eyebrow">Connected flagship products</p>
        <h2>
          Not disconnected deliverables.<br />
          <em>One coordinated system.</em>
        </h2>
        <p className="section-intro">
          Each product can solve a focused problem. The larger advantage comes from connecting them so strategy, people, documentation, technology, and institutional memory reinforce one another.
        </p>
        <div className="grid">
          {products.map((product) => (
            <article className="card" key={product.code}>
              <span>MODULE {product.code} · {product.category}</span>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><strong>Produces:</strong> {product.outcomes.join(" · ")}</p>
              <div className="actions">
                <Link className="button button-ghost" href={product.href}>
                  {product.action}
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
          <p className="eyebrow">P.O.L.A.R. coordination layer</p>
          <h2>
            One intake.<br />
            <em>The right system next.</em>
          </h2>
          <p className="section-intro">
            You do not need to diagnose which product you need before contacting BPEI. Describe the thing, the blockage, and the result. P.O.L.A.R. helps route the work into the appropriate pathway.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Initialize Intake
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
