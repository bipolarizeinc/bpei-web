"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const pathways = [
  "I have an idea but need clarity",
  "I need business architecture or a Blueprint",
  "I need talent and role alignment through ETAS",
  "I need documents, policies, SOPs, or agreements",
  "I need branding, media, or a launch system",
  "I need automation, AI, CRM, or connected workflows",
  "I need leads, customers, or local market development",
  "I need lender readiness or funding preparation",
  "I am not sure yet and need P.O.L.A.R. to route me",
];

export default function IntakePage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ["name", "email", "thing", "stage", "obstacle", "outcome"];
    const missing = required.some((field) => !String(form.get(field) || "").trim());

    if (missing) {
      setStatus("Complete the required fields so P.O.L.A.R. has enough signal to route your thing.");
      return;
    }

    const subject = `BPEI Intake — ${String(form.get("name"))}`;
    const body = [
      "BPEI / P.O.L.A.R. INTAKE",
      "",
      `Name: ${form.get("name")}`,
      `Business or project: ${form.get("business") || "Not provided"}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Preferred contact: ${form.get("contact") || "Email"}`,
      "",
      `Primary pathway: ${form.get("pathway") || "P.O.L.A.R. routing requested"}`,
      "",
      "THE THING",
      String(form.get("thing")),
      "",
      "CURRENT STAGE",
      String(form.get("stage")),
      "",
      "BIGGEST OBSTACLE",
      String(form.get("obstacle")),
      "",
      "DESIRED OUTCOME",
      String(form.get("outcome")),
      "",
      "TIMELINE / URGENCY",
      String(form.get("timeline") || "Not provided"),
      "",
      "BUDGET OR RESOURCE RANGE",
      String(form.get("budget") || "Not provided"),
      "",
      "ADDITIONAL CONTEXT",
      String(form.get("context") || "None"),
    ].join("\n");

    window.location.href = `mailto:YourThing@PolarPaw.Online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the intake prepared. Review it, attach anything useful, and send.");
  }

  return (
    <>
      <section className="hero intake-hero">
        <div>
          <p className="eyebrow">P.O.L.A.R. Intake Channel</p>
          <h1>
            Tell us about<br />
            <em>your thing.</em>
          </h1>
          <p>
            Do not shrink it, sanitize it, or force it into conventional language. Give us the real version. P.O.L.A.R. will help identify what it is, where it belongs, and which BPEI systems should engage next.
          </p>
          <div className="actions">
            <a className="button" href="#intake-form">Begin Extraction</a>
            <Link className="button button-ghost" href="/ecosystem">View the Ecosystem</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Intake requirements">
          <strong>01</strong><span>The unfiltered vision</span>
          <strong>02</strong><span>The current reality</span>
          <strong>03</strong><span>The outcome you actually want</span>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Before you begin</p>
        <h2>
          You do not need<br />
          <em>the perfect words.</em>
        </h2>
        <p className="section-intro">
          You need enough honesty and detail for the system to understand the opportunity, the friction, and the desired result. Half-formed ideas are allowed. Humans invented napkins before pitch decks for a reason.
        </p>
        <div className="grid">
          <article className="card"><span>SIGNAL 01</span><h3>What is it?</h3><p>Describe the idea, organization, problem, product, service, project, or tangled pile of all six.</p></article>
          <article className="card"><span>SIGNAL 02</span><h3>Where is it now?</h3><p>Share what already exists, what has been attempted, and what is currently missing.</p></article>
          <article className="card"><span>SIGNAL 03</span><h3>What must change?</h3><p>State the outcome that would make this engagement useful, measurable, and worth doing.</p></article>
        </div>
      </section>

      <section className="section" id="intake-form">
        <p className="eyebrow">Blueprint Extraction Intake</p>
        <h2>
          Give P.O.L.A.R.<br />
          <em>the signal.</em>
        </h2>
        <form className="intake-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Your name *
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Business or project name
              <input name="business" autoComplete="organization" />
            </label>
            <label>
              Email *
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Preferred contact
              <select name="contact" defaultValue="Email">
                <option>Email</option>
                <option>Phone</option>
                <option>Text</option>
              </select>
            </label>
            <label>
              Best starting pathway
              <select name="pathway" defaultValue={pathways[8]}>
                {pathways.map((pathway) => <option key={pathway}>{pathway}</option>)}
              </select>
            </label>
          </div>

          <label>
            Tell us about your thing *
            <textarea name="thing" rows={7} required placeholder="What is it? Why does it matter? Who is it for? What makes it different or difficult to explain?" />
          </label>
          <label>
            What stage is it in right now? *
            <textarea name="stage" rows={4} required placeholder="Idea, planning, registered business, operating, rebuilding, expanding, or something less tidy." />
          </label>
          <label>
            What is the biggest obstacle? *
            <textarea name="obstacle" rows={4} required placeholder="Clarity, structure, money, people, documentation, customers, technology, execution, or another bottleneck." />
          </label>
          <label>
            What outcome do you want? *
            <textarea name="outcome" rows={4} required placeholder="What should exist, work, improve, launch, or become possible after BPEI engages?" />
          </label>

          <div className="form-grid">
            <label>
              Timeline or urgency
              <input name="timeline" placeholder="Example: within 30 days" />
            </label>
            <label>
              Budget or available resource range
              <input name="budget" placeholder="A range is enough" />
            </label>
          </div>

          <label>
            Additional context
            <textarea name="context" rows={5} placeholder="Links, prior attempts, team details, constraints, concerns, or anything P.O.L.A.R. should not overlook." />
          </label>

          <div className="form-consent">
            <input id="consent" name="consent" type="checkbox" required />
            <label htmlFor="consent">I understand that submitting this intake starts an evaluation and does not create a service agreement or guarantee funding, approval, or a particular result.</label>
          </div>

          <div className="actions">
            <button className="button" type="submit">Prepare Intake Email</button>
            <a className="button button-ghost" href="tel:+18016868143">Call 801-686-8143</a>
          </div>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </section>

      <section className="section polar">
        <div className="polar-orb" aria-hidden="true"><strong>P.</strong></div>
        <div>
          <p className="eyebrow">What happens next</p>
          <h2>
            P.O.L.A.R. routes.<br />
            <em>BPEI architects.</em>
          </h2>
          <p className="section-intro">
            Your intake is reviewed for fit, urgency, complexity, and the systems most likely to help. The next step may be clarification, consultation, ETAS assessment, Blueprint extraction, or direct placement into another BPEI module.
          </p>
          <div className="actions">
            <Link className="button button-ghost" href="/services">Review Systems</Link>
          </div>
        </div>
      </section>
    </>
  );
}
