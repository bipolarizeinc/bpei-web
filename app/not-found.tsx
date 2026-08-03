import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <p className="eyebrow">P.O.L.A.R. Navigation Alert</p>
      <h2>That route left<br/><em>the system.</em></h2>
      <p className="section-intro">The page does not exist, moved, or was never connected. Even websites misplace things. Very human of them.</p>
      <div className="actions"><Link className="button" href="/">Return Home</Link></div>
    </section>
  );
}
