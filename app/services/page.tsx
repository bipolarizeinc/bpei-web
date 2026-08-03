import Link from "next/link";

const services = ["The Bipolarized Blueprint™","Sav.VidzGen™","Dr.Docx™","BrandForge™","LaunchPad™","Nexus™","Pulse™","Vault™","Cipher™"];

export default function ServicesPage(){return <section className="section"><p className="eyebrow">BPEI Flagship Product Network</p><h2>Infrastructure that<br/><em>works together.</em></h2><p className="section-intro">Nine connected products covering business architecture, media, documentation, branding, launch support, automation, analytics, institutional memory, and digital defense.</p><div className="grid">{services.map((service,index)=><article className="card" key={service}><span>MODULE {String(index+1).padStart(2,"0")}</span><h3>{service}</h3><p>Built as part of one coordinated enterprise system, not another disconnected deliverable.</p></article>)}</div><div className="actions"><Link className="button" href="/intake">Start Your Blueprint</Link></div></section>}
