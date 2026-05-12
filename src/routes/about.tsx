import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Xshore | Industrial Equipment, Fabrication & Trading — Abu Dhabi" },
      { name: "description", content: "Xshore is an Abu Dhabi-based industrial supplier serving oil & gas, construction and industrial sectors across the UAE through equipment rental, certified fabrication and trading." },
      { property: "og:title", content: "About Xshore — Industrial Equipment Solutions" },
      { property: "og:description", content: "Equipment rental, DNV-certified fabrication and trading from Mussafah, Abu Dhabi." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const why = [
  { n: "01", t: "Certified Equipment Fleet", p: "All equipment is maintained, tested, and certified to international standards. No shortcuts on compliance." },
  { n: "02", t: "Fast Mobilisation", p: "Large on-ground inventory in Mussafah. Equipment can be mobilised within 24 hours for urgent requirements." },
  { n: "03", t: "Technical Support", p: "Our team brings hands-on oil & gas experience. We provide guidance on equipment selection, setup, and operation." },
  { n: "04", t: "DNV & Zone-2 Expertise", p: "One of very few UAE-based fabricators with in-house DNV certification and full ATEX Zone-2 compliance capability." },
  { n: "05", t: "Single Source Solution", p: "Rental, fabrication, and trading under one roof. Simplify your supply chain and vendor management." },
  { n: "06", t: "ADNOC Contractor Network", p: "Proven track record supplying major ADNOC contractors. We understand the compliance and documentation requirements." },
];

const clients = ["ADNOC", "DIPS", "Coxabengoa", "Al Raha Group", "Arabian Industries", "Mubarraz Oil Field", "Hebu Tech"];

function AboutPage() {
  return (
    <>
      <SiteNav />

      <section className="er-hero">
        <div className="er-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1800&h=1000&fit=crop&q=80')" }} />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">About · Xshore</span>
          <h1>Industrial Solutions, <em>Built for the UAE</em></h1>
          <p className="er-hero-sub">Xshore is a Mussafah-based industrial supplier serving oil &amp; gas, construction and industrial operators across the UAE. We bring three integrated divisions — equipment rental, certified fabrication, and trading — under one roof.</p>
        </div>
      </section>

      <section className="why">
        <div className="gold-line" />
        <span className="section-tag">Why Xshore</span>
        <h2 className="section-title">What Sets Us Apart</h2>
        <p className="section-sub">We don't just supply equipment. We provide complete industrial solutions with the technical knowledge to back it up.</p>
        <div className="why-grid">
          {why.map((w) => (
            <div className="why-card" key={w.n}>
              <span className="why-card-num">{w.n}</span>
              <h4>{w.t}</h4>
              <p>{w.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="clients">
        <div className="clients-header">
          <div>
            <div className="gold-line" />
            <span className="section-tag">Trusted By</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Key Clients</h2>
          </div>
          <p className="clients-note">Preferred supplier to ADNOC contractors and major industrial operators across the UAE.</p>
        </div>
        <div className="client-strip">
          {clients.map((c) => <div className="client-logo" key={c}>{c}</div>)}
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's Work<br /><span>Together.</span></h2>
        <p>Tell us what you need. We'll respond with availability, specifications, and a quote — fast.</p>
        <div className="cta-actions">
          <Link to="/contact" className="btn-primary">Contact Us</Link>
          <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}