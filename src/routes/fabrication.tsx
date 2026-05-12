import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { fabricationCategories } from "@/data/catalog";

export const Route = createFileRoute("/fabrication")({
  component: FabricationIndex,
  head: () => ({
    meta: [
      { title: "Fabrication & Containers UAE | DNV 2.7-1 & Zone-2 ATEX — Xshore" },
      { name: "description", content: "Custom DNV 2.7-1 offshore containers, Zone-2 / ATEX enclosures, workshop containers and bespoke fabrication. In-house certified fabrication in Abu Dhabi, UAE." },
      { property: "og:title", content: "Fabrication & Containers UAE — Xshore" },
      { property: "og:description", content: "DNV 2.7-1 offshore containers and Zone-2 / ATEX enclosures fabricated in Abu Dhabi, UAE." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function FabricationIndex() {
  return (
    <>
      <SiteNav />

      <section className="er-hero">
        <div className="er-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564182998979-9dcf42ff37fa?w=1800&h=1000&fit=crop&q=80')" }} />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">Division 02 · Fabrication</span>
          <h1>Fabrication &amp; <em>Containers</em></h1>
          <p className="er-hero-sub">Custom-built certified units engineered to your specification. DNV 2.7-1 offshore containers, Zone-2 / ATEX enclosures, workshop units and bespoke fabrication — managed end-to-end in our Mussafah facility.</p>
        </div>
      </section>

      <section className="rental">
        <div className="gold-line" />
        <span className="section-tag">Capabilities</span>
        <h2 className="section-title">What We Build</h2>
        <p className="section-sub">Every unit is fabricated to international standards with full third-party certification where required.</p>
        <div className="eq-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {fabricationCategories.map((c) => (
            <Link to={`/fabrication/${c.slug}`} key={c.slug} className="eq-card">
              <img className="eq-card-img" src={c.hero} alt={c.heroAlt} loading="lazy" />
              <div className="eq-card-body">
                <div className="eq-dot" />
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                {c.badge && <span className="eq-badge">{c.badge}</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="dnv-section">
        <div className="dnv-bg" />
        <div className="dnv-overlay" />
        <div className="dnv-inner">
          <div>
            <h2>DNV Certified.<br />Zone-2 Ready.</h2>
            <p>Our containers and fabricated units carry full DNV 2.7-1 certification and ATEX Zone-2 approval. Trusted by ADNOC contractors and offshore operators across the Middle East.</p>
            <Link to="/contact" className="btn-dark">Request a Build</Link>
          </div>
          <div className="dnv-specs">
            <div className="dnv-spec"><span className="dnv-spec-num">DNV 2.7-1</span><span className="dnv-spec-label">Offshore Container Standard</span></div>
            <div className="dnv-spec"><span className="dnv-spec-num">ATEX II</span><span className="dnv-spec-label">Zone-2 Hazardous Area</span></div>
            <div className="dnv-spec"><span className="dnv-spec-num">EN12079</span><span className="dnv-spec-label">Lifting & Design Standard</span></div>
            <div className="dnv-spec"><span className="dnv-spec-num">3rd Party</span><span className="dnv-spec-label">Independent Certification</span></div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}