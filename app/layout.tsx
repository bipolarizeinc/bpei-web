import type { Metadata } from "next";
import Link from "next/link";
import RouteVisual from "./route-visual";
import PolarVideoSystem from "./components/PolarVideoSystem";
import "./globals.css";

export const metadata: Metadata = {
  title: "BI POLARIZE ENTERPRISES, INC.",
  description: "Innovation infrastructure for unconventional founders. Tell us about your thing.",
};

const nav = [
  ["Ecosystem", "/ecosystem"],
  ["ETAS", "/etas"],
  ["Academy", "/academy"],
  ["Funding", "/lender-readiness"],
  ["Services", "/services"],
  ["Method", "/#method"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="BI POLARIZE ENTERPRISES home">
            <span className="brand-mark">BI</span>
            <span>POLARIZE ENTERPRISES, INC.</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="button button-small desktop-cta" href="/intake">Tell Us About Your Thing</Link>
            <details className="mobile-menu">
              <summary aria-label="Open navigation menu">Menu</summary>
              <div className="mobile-menu-panel">
                {nav.map(([label, href]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
                <Link className="button button-small" href="/intake">Tell Us About Your Thing</Link>
              </div>
            </details>
          </div>
        </header>

        <RouteVisual />
        <PolarVideoSystem />
        <main>{children}</main>

        <footer className="site-footer">
          <div>
            <strong>BI POLARIZE ENTERPRISES, INC.</strong>
            <p>Off the Wall and Out of the Box.</p>
          </div>
          <div className="footer-links" aria-label="Footer navigation">
            <Link href="/ecosystem">Ecosystem</Link>
            <Link href="/etas">ETAS</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/lender-readiness">Lender Readiness</Link>
            <Link href="/services">Services</Link>
            <Link href="/intake">Start Here</Link>
          </div>
          <div>
            <p>Ogden, Utah · Open 24/7</p>
            <p>© {new Date().getFullYear()} BPEI. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
