import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BI POLARIZE ENTERPRISES, INC.",
  description: "Innovation infrastructure for unconventional founders. Tell us about your thing.",
};

const nav = [
  ["Services", "/services"],
  ["Method", "/#method"],
  ["P.O.L.A.R.", "/#polar"],
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
          <nav aria-label="Primary navigation">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <Link className="button button-small" href="/intake">Start Your Blueprint</Link>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div><strong>BI POLARIZE ENTERPRISES, INC.</strong><p>Off the Wall and Out of the Box.</p></div>
          <div><p>Ogden, Utah · Open 24/7</p><p>© {new Date().getFullYear()} BPEI. All rights reserved.</p></div>
        </footer>
      </body>
    </html>
  );
}
