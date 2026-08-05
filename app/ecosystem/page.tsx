import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BPEI Ecosystem | PolarPaw.Online",
  description:
    "Explore the connected BI POLARIZE ENTERPRISES ecosystem, including Identify Your Thing, ETAS, Blueprint, POLAR OS, Lead Systems, Funding, Academy, and Command.",
};

const modules = [
  {
    code: "01",
    title: "Tell Us About Your Thing™",
    description:
      "The universal entry point. Users explain what they are building, what is blocking them, and what result they need.",
    href: "/intake",
    action: "Start Here",
  },
  {
    code: "02",
    title: "Identify Your Thing™",
    description:
      "Clarifies the idea, audience, purpose, offer, value, and direction before deeper architecture begins.",
    href: "/intake",
    action: "Begin Identification",
  },
  {
    code: "03",
    title: "Enterprise Talent Alignment System™",
    description:
      "Aligns people, roles, strengths, leadership potential, development pathways, and enterprise priorities.",
    href: "/etas",
    action: "Explore ETAS",
  },
  {
    code: "04",
    title: "The Bipolarized Blueprint™",
    description:
      "Transforms founder intelligence into business architecture, operating systems, documentation, and deployment priorities.",
    href: "/services",
    action: "View Blueprint",
  },
  {
    code: "05",
    title: "P.O.L.A.R. OS™",
    description:
      "The shared intelligence, retrieval, guidance, governance, and institutional-memory layer connecting the ecosystem.",
    href: "/intake",
    action: "Enter POLAR",
  },
  {
    code: "06",
    title: "Local POLAR Lead Systems™",
    description:
      "Builds localized lead-generation and micro-service systems around geographic markets and real customer demand.",
    href: "/services",
    action: "Explore Lead Systems",
  },
  {
    code: "07",
    title: "BPEI Lender Readiness System™",
    description:
      "Engineers stronger funding readiness through structure, documentation, financial narrative, and application positioning.",
    href: "/lender-readiness",
    action: "Explore Funding Readiness",
  },
  {
    code: "08",
    title: "BPEI Academy™",
    description:
      "Delivers education, guided implementation, operational training, and enterprise development resources.",
    href: "/academy",
    action: "View Academy",
  },
  {
    code: "09",
    title: "Executive Command Center™",
    description:
      "Provides secure dashboards, records, approvals, performance intelligence, governance, and executive control.",
    href: "/contact",
    action: "Request Access",
  },
];

const stages = [
  ["01", "Enter", "Tell us about your thing and establish the starting point."],
  ["02", "Identify", "Clarify what the thing is, who it serves, and why it matters."],
  ["03", "Align", "Match talent, responsibility, opportunity, and enterprise need through ETAS."],
  ["04", "Architect", "Build the Blueprint, systems, documentation, and operating structure."],
  ["05", "Activate", "Deploy POLAR, lead systems, funding readiness, education, and command tools."],
];

export default function EcosystemPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">The BPEI Ecosystem</p>
          <h1>
            One enterprise.<br />
            <em>Multiple specialized systems.</em>
          </h1>
          <p>
            BI POLARIZE ENTERPRISES, INC. is building a connected platform that helps people identify, align, architect, fund, launch, operate, and expand their thing.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Enter My Thing™
            </Link>
            <a className="button button-ghost" href="#modules">
              Explore the Ecosystem
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="BPEI ecosystem summary">
          <strong>1</strong>
          <span>Shared ecosystem</span>
          <strong>9</strong>
          <span>Connected systems</span>
          <strong>1</strong>
          <span>Intelligence layer</span>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Connected by design</p>
        <h2>
          Enter it once.<br />
          <em>Build with it everywhere.</em>
        </h2>
        <p className="section-intro">
          One account, one profile, one operating memory. Information entered in one module can support the next, reducing repetition while preserving founder intent and institutional knowledge.
        </p>
        <div className="grid">
          <article className="card">
            <span>SHARED LOGIN</span>
            <h3>One identity</h3>
            <p>Users move through authorized modules without recreating themselves at every door.</p>
          </article>
          <article className="card">
            <span>SHARED PROFILE</span>
            <h3>One source of truth</h3>
            <p>Business, talent, goals, services, and progress stay connected across the platform.</p>
          </article>
          <article className="card">
            <span>SHARED INTELLIGENCE</span>
            <h3>P.O.L.A.R. remembers</h3>
            <p>Context, decisions, development, and enterprise history become reusable infrastructure.</p>
          </article>
        </div>
      </section>

      <section className="section" id="modules">
        <p className="eyebrow">The My Thing™ launcher</p>
        <h2>
          Every module has a job.<br />
          <em>Together, they form the machine.</em>
        </h2>
        <div className="grid">
          {modules.map((module) => (
            <article className="card" key={module.code}>
              <span>BPEI SYSTEM // {module.code}</span>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <div className="actions">
                <Link className="button button-ghost" href={module.href}>
                  {module.action}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">The connected journey</p>
        <h2>
          From first thought<br />
          <em>to operational infrastructure.</em>
        </h2>
        <div className="grid">
          {stages.map(([number, title, description]) => (
            <article className="card" key={number}>
              <span>STAGE {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section polar">
        <div className="polar-orb">
          <strong>P.</strong>
        </div>
        <div>
          <p className="eyebrow">P.O.L.A.R. OS™</p>
          <h2>
            The avatar is the guide.<br />
            <em>The OS is the intelligence.</em>
          </h2>
          <p className="section-intro">
            P.O.L.A.R. OS connects knowledge, workflows, governance, retrieval, analytics, and decision support. The cybernetic guide dog is the physical manifestation of that interface, not the software itself.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Initialize Your Thing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Platform direction</p>
        <h2>
          One codebase.<br />
          <em>Multiple branded experiences.</em>
        </h2>
        <div className="grid">
          <article className="card">
            <span>PHASE 01</span>
            <h3>Connected web modules</h3>
            <p>Products launch first through clean PolarPaw.Online paths for speed, control, and shared infrastructure.</p>
          </article>
          <article className="card">
            <span>PHASE 02</span>
            <h3>Branded subdomains</h3>
            <p>Flagship systems can expand into their own branded experiences while remaining part of the same platform.</p>
          </article>
          <article className="card">
            <span>PHASE 03</span>
            <h3>Installable applications</h3>
            <p>Primary systems can become progressive web apps across phone, tablet, desktop, and future interfaces.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Your thing deserves continuity</p>
        <h2>
          Stop rebuilding context.<br />
          <em>Start building the institution.</em>
        </h2>
        <p className="section-intro">
          Your thing does not need another disconnected service. It needs an ecosystem capable of remembering it, challenging it, building it, and carrying it forward.
        </p>
        <div className="actions">
          <Link className="button" href="/intake">
            Tell Us About Your Thing
          </Link>
          <Link className="button button-ghost" href="/services">
            Explore Capabilities
          </Link>
        </div>
      </section>
    </>
  );
}
