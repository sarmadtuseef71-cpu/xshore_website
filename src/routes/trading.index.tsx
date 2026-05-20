import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/trading/")({
  component: TradingIndex,
  head: () => ({
    meta: [
      { title: "Welding Consumables & Accessories Supplier UAE - Xshore Equipment" },
      { name: "description", content: "Welding electrodes, MIG/TIG wires, flux-cored wire, and welding accessories supplied to project sites across the UAE. Fast sourcing and delivery for oil & gas and construction contractors. Abu Dhabi." },
      { property: "og:title", content: "Welding Consumables & Accessories Supplier UAE - Xshore Equipment" },
      { property: "og:description", content: "Welding electrodes, MIG/TIG wires, flux-cored wire, and welding accessories supplied to project sites across the UAE. Fast sourcing and delivery for oil & gas and construction contractors. Abu Dhabi." },
      { property: "og:type", content: "website" },
    ],
  }),
});

// Exact guide-compliant local category data
const localTradingCategories = [
  {
    slug: "welding-consumables",
    title: "Welding Consumables",
    badge: "Primary",
    body: "Full range of welding consumables for all major welding processes. Stocked for fast delivery to project sites across the UAE. Suitable for oil & gas, offshore, construction, and fabrication applications.",
    products: [
      "Electrodes - MMA / SMAW",
      "MIG / MAG wires",
      "Flux-cored wire",
      "TIG rods & filler metals",
      "Stainless, duplex & exotic alloys",
      "Shielding gas & welding fluxes",
    ],
    hero: "https://images.unsplash.com/photo-1730584476141-232435a40c32?w=1600&h=900&fit=crop&q=80",
    heroAlt: "Welding consumables supply UAE - electrodes wire rods",
    isPPE: false,
  },
  {
    slug: "welding-accessories-tools",
    title: "Welding Accessories & Tools",
    badge: "Primary",
    body: "All the supporting accessories for welding operations, surface preparation, and quality control - sourced and delivered fast.",
    products: [
      "Grinding discs & cutting wheels",
      "Wire brushes & flap discs",
      "Welding helmets & gloves",
      "Clamps, jigs & positioners",
      "Anti-spatter products",
      "NDT accessories & inspection tools",
    ],
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop&q=80",
    heroAlt: "Welding accessories and tools supply UAE",
    isPPE: false,
  },
  {
    slug: "ppe-safety-equipment",
    title: "PPE & Safety Equipment",
    badge: "Available on Request",
    body: "Safety equipment available on request for existing clients and project teams. Contact us with specific requirements.",
    products: [
      "Safety helmets",
      "Harnesses & fall arrest",
      "Respiratory PPE",
      "Safety footwear",
      "Gas detection",
    ],
    hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=900&fit=crop&q=80",
    heroAlt: "PPE and safety equipment supply UAE",
    isPPE: true,
  },
];

function TradingIndex() {
  return (
    <>
      <SiteNav />

      {/* Page Hero */}
      <section className="er-hero">
        <div
          className="er-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1730584476141-232435a40c32?w=1800&h=1000&fit=crop&q=80')" }}
          aria-label="Welding consumables and industrial supplies"
          role="img"
        />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">Division 03 · Trading</span>
          <h1>Welding Consumables &amp; Industrial Accessories - <em>Supplied Across the UAE</em></h1>
          <p className="er-hero-sub">Electrodes, MIG and TIG wires, flux-cored wire, and welding accessories sourced and delivered to your site. No procurement headache - just tell us what you need.</p>
          <Link to="/contact" className="btn-primary" style={{ display: "inline-flex", marginTop: "28px" }}>Request Supply Quote →</Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="trading">
        <div className="gold-line" />
        <span className="section-tag">Product Lines</span>
        <h2 className="section-title">What We Supply</h2>
        <p className="section-sub">Stocked product lines and on-request supply for industrial, oil &amp; gas and construction projects.</p>
        <div className="trade-grid">
          {localTradingCategories.map((c) => (
            <Link to="/trading/$slug" params={{ slug: c.slug }} key={c.slug} className="trade-card">
              <img className="trade-card-img" src={c.hero} alt={c.heroAlt} loading="lazy" />
              <div className="trade-card-body">
                <h3>{c.title}</h3>
                {c.isPPE && (
                  <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", border: "1px solid var(--border)", padding: "3px 10px", marginBottom: "10px", borderRadius: "2px" }}>
                    Available on Request
                  </span>
                )}
                <p>{c.body}</p>
                <ul style={{ margin: "12px 0 16px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {c.products.map((item) => (
                    <li key={item} style={{ fontSize: "13px", color: "var(--text-dim)", paddingLeft: "14px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--gold)", fontWeight: 700 }}>-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="eq-badge">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How to Order Section */}
      <section style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", padding: "100px 60px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="gold-line" />
          <span className="section-tag">Process</span>
          <h2 className="section-title">How to Order</h2>
          <p className="section-sub" style={{ marginBottom: "60px" }}>No minimum order quantity for established project clients. Contact us to discuss terms.</p>

          <div className="about-process-grid-polished cols-3" style={{ marginBottom: "60px" }}>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>01</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>Send us your material list or requirements</h4>
            </div>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>02</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>We confirm availability and provide a quote</h4>
            </div>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>03</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>Order confirmed and delivered to your site</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--bg2)", padding: "80px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, textTransform: "uppercase", color: "var(--text)", marginBottom: "16px" }}>Ready to Order?</h2>
          <p className="section-sub" style={{ margin: "0 auto 40px", maxWidth: "600px" }}>Email your material list or WhatsApp us directly. We respond the same day.</p>

          <div className="cta-actions" style={{ marginBottom: "48px" }}>
            <a href="mailto:sales@xshore.ae" className="btn-primary">Email your list: sales@xshore.ae</a>
            <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp: +971 2 246 5375</a>
          </div>

          <div className="contact-strip" style={{ gap: "24px" }}>
            <a href="mailto:sales@xshore.ae" className="contact-item" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">sales@xshore.ae</div>
              </div>
            </a>
            <a href="tel:+97122465375" className="contact-item" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Phone / WhatsApp</div>
                <div className="contact-item-val">+971 2 246 5375</div>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-val">Mussafah Industrial Area, Abu Dhabi, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}