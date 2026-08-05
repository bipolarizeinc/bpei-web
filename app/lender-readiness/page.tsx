import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BPEI Lender Readiness System™ | PolarPaw.Online",
  description:
    "Engineer stronger funding readiness through business structure, documentation, financial narrative, application positioning, and lender-focused preparation.",
};

const readinessAreas = [
  ["01", "Business structure", "Entity, ownership, registrations, banking, contact information, and operating records aligned before an application reaches underwriting."],
  ["02", "Document readiness", "Required records identified, organized, reviewed, and presented as one coherent funding file rather than a scavenger hunt."],
  ["03", "Financial narrative", "Funding need, use of proceeds, repayment logic, projections, and path to revenue explained clearly and conservatively."],
  ["04", "Application positioning", "The request is framed around lender questions, measurable risk, founder capability, and the evidence supporting repayment."],
  ["05", "Gap correction", "Weaknesses are identified before submission so the business can repair, document, explain, or defer instead of applying blindly."],
  ["06", "Capital deployment", "Approved funds are connected to a practical plan that moves equipment, occupancy, marketing, staffing, and working capital toward revenue."],
];

const deliverables = [
  "Lender Readiness Assessment",
  "Funding-document checklist",
  "Business positioning summary",
  "Use-of-funds architecture",
  "Founder qualification narrative",
  "Customer-acquisition plan",
  "Conservative financial projections",
  "Application risk review",
  "Submission sequence and next actions",
];

export default function LenderReadinessPage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">BPEI Lender Readiness System™</p>
          <h1>
            Do not apply for funding.<br />
            <em>Engineer approval.</em>
          </h1>
          <p>
            Strong funding requests are not built from optimism and a folder full of random PDFs. They are engineered around structure, evidence, repayment logic, lender expectations, and a clear path from capital to revenue.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">
              Assess My Readiness
            </Link>
            <a className="button button-ghost" href="#system">
              View the System
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Lender readiness summary">
          <strong>STRUCTURE</strong>
          <span>Business records and operations aligned</span>
          <strong>EVIDENCE</strong>
          <span>Claims supported by usable documentation</span>
          <strong>POSITIONING</strong>
          <span>The request built around lender decisions</span>
        </div>
      </section>

      <section className="section" id="system">
        <p className="eyebrow">Capital Readiness Engineering</p>
        <h2>
          Funding is a decision system.<br />
          <em>Prepare for the decision.</em>
        </h2>
        <p className="section-intro">
          Lenders evaluate risk, repayment capacity, management capability, documentation quality, and whether the requested capital produces a credible operating result. BPEI organizes the business around those questions before the application is submitted.
        </p>
        <div className="grid">
          {readinessAreas.map(([number, title, description]) => (
            <article className="card" key={number}>
              <span>READINESS AREA // {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What the system produces</p>
        <h2>
          A stronger file.<br />
          <em>A clearer funding case.</em>
        </h2>
        <div className="grid">
          {deliverables.map((item, index) => (
            <article className="card" key={item}>
              <span>DELIVERABLE // {String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section polar">
        <div className="polar-orb" aria-hidden="true"><strong>P.</strong></div>
        <div>
          <p className="eyebrow">P.O.L.A.R. readiness routing</p>
          <h2>
            Find the weakness<br />
            <em>before underwriting does.</em>
          </h2>
          <p className="section-intro">
            P.O.L.A.R. helps capture the funding objective, organize supporting information, surface missing evidence, and route the business into the appropriate documentation, Blueprint, ETAS, LaunchPad, or financial-readiness work.
          </p>
          <div className="actions">
            <Link className="button" href="/intake">Begin Funding Intake</Link>
            <Link className="button button-ghost" href="/services">Explore Connected Systems</Link>
          </div>
        </div>
      </section>
    </>
  );
}
