import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/fabrication/")({
  component: FabricationIndex,
  head: () => ({
    meta: [
      { title: "DNV Container Fabrication UAE | ATEX Zone-2 Enclosures | Xshore Equipment" },
      { name: "description", content: "DNV 2.7-1 certified offshore containers and ATEX Zone-2 enclosures. 10+ units delivered to UAE and Middle East operators. Full certification managed end-to-end. Based in Abu Dhabi." },
      { property: "og:title", content: "DNV Container Fabrication UAE | ATEX Zone-2 Enclosures | Xshore Equipment" },
      { property: "og:description", content: "DNV 2.7-1 certified offshore containers and ATEX Zone-2 enclosures. 10+ units delivered to UAE and Middle East operators. Full certification managed end-to-end. Based in Abu Dhabi." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const f_dnv = (file: string) => `/images/fabrication/dnv-containers/${file}`;
const f_zone2 = (file: string) => `/images/fabrication/zone-2-atex/${file}`;
const f_workshop = (file: string) => `/images/fabrication/workshop-containers/${file}`;

// Localized, 100% exact Content Guide categories to avoid discrepancies
const localFabricationCategories = [
  {
    slug: "dnv-2-7-1-offshore-containers",
    title: "DNV 2.7-1 Offshore Containers",
    body: "Cargo-carrying units designed and certified to DNV 2.7-1 / EN12079 standards for offshore crane lifting. Built to your specification with full independent third-party certification - meeting the requirements of offshore operators and ADNOC-contracted projects.",
    hero: f_dnv("xshore-dnv-offshore-container-uae-07.webp"),
    heroAlt: "DNV 2.7-1 certified offshore container fabrication UAE Abu Dhabi",
    badge: "DNV 2.7-1 / EN12079"
  },
  {
    slug: "zone-2-atex-enclosures",
    title: "Zone-2 / ATEX Enclosures",
    body: "Explosion-protected containers and enclosures certified for Zone-2 hazardous areas under ATEX and IECEx standards. Designed for offshore platforms, petrochemical plants, and oil & gas facilities where standard equipment cannot be used.",
    hero: f_zone2("xshore-zone2-atex-container-uae-05.webp"),
    heroAlt: "ATEX Zone-2 explosion proof container enclosure UAE",
    badge: "ATEX Zone-2"
  },
  {
    slug: "workshop-containers",
    title: "Workshop Containers",
    body: "Custom-fitted workshop units with workbenches, tool storage, ventilation, and lighting - built for remote site and offshore deployment. Designed to your layout and operational requirements.",
    hero: "/images/fabrication/workshop-containers/xshore-workshop-container-uae-03.webp",
    heroAlt: "Workshop container offshore remote site UAE fabrication",
    badge: "Custom Fitted"
  },
  {
    slug: "accommodation-office-units",
    title: "Accommodation & Office Units",
    body: "Modular containerised accommodation and site office units engineered for remote project locations. Built to specification and ready for rapid deployment.",
    hero: "/images/fabrication/accommodation-office-units/xshore-accommodation-office-units-uae-01.webp",
    heroAlt: "Accommodation and office container units UAE - Xshore modular site office",
    badge: "Modular Build"
  },
  {
    slug: "custom-fabrication",
    title: "Custom Fabrication",
    body: "Bespoke structural steel fabrication, skid units, equipment frames, and custom builds to client drawings. We manage the full fabrication and certification process from concept to delivery.",
    hero: "/images/fabrication/stock/xshore-custom-steel-fabrication-uae.webp",
    heroAlt: "Custom steel fabrication container skid unit UAE",
    badge: "To Spec"
  }
];

function FabricationIndex() {
  return (
    <>
      <SiteNav />

      {/* Page Hero */}
      <section className="er-hero">
        <div className="er-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564182998979-9dcf42ff37fa?w=1800&h=1000&fit=crop&q=80')" }} aria-label="Offshore container fabrication workshop" role="img" />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">Division 02 · Fabrication &amp; Containers</span>
          <h1>DNV Certified Containers &amp; ATEX Zone-2 Enclosures - UAE</h1>
          <p className="er-hero-sub">10+ certified units delivered to offshore operators and ADNOC contractors across the UAE and Middle East. We manage the full process - from your specification to certified delivery.</p>
          <Link to="/contact" className="btn-primary" style={{ display: "inline-flex", marginTop: "28px" }}>Request a Build →</Link>
        </div>
      </section>

      {/* Container Types */}
      <section className="rental">
        <div className="gold-line" />
        <span className="section-tag">Capabilities</span>
        <h2 className="section-title">What We Build</h2>
        <p className="section-sub">Every unit is fabricated to international standards with full third-party certification where required.</p>
        <div className="eq-grid">
          {localFabricationCategories.map((c) => (
            <Link to="/fabrication/$slug" params={{ slug: c.slug }} key={c.slug} className="eq-card">
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

      {/* Certifications Panel */}
      <section className="dnv-section">
        <div className="dnv-bg" aria-label="DNV 2.7-1 certified offshore container" role="img" />
        <div className="dnv-overlay" />
        <div className="dnv-inner">
          <div>
            <h2>DNV Certified.<br />Zone-2 Ready.</h2>
            <p>Our containers and fabricated units carry full DNV 2.7-1 certification and ATEX Zone-2 approval. Trusted by ADNOC contractors and offshore operators across the Middle East.</p>
            <Link to="/contact" className="btn-dark">Request a Build</Link>
          </div>
          <div className="dnv-specs">
            <div className="dnv-spec">
              <span className="dnv-spec-num">DNV 2.7-1</span>
              <span className="dnv-spec-label">Offshore Container Standard</span>
            </div>
            <div className="dnv-spec">
              <span className="dnv-spec-num">ATEX Zone-2</span>
              <span className="dnv-spec-label">Hazardous Area Enclosures</span>
            </div>
            <div className="dnv-spec">
              <span className="dnv-spec-num">EN12079</span>
              <span className="dnv-spec-label">Lifting &amp; Design Standard</span>
            </div>
            <div className="dnv-spec">
              <span className="dnv-spec-num">10+</span>
              <span className="dnv-spec-label">Certified Units Delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", padding: "100px 60px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="gold-line" />
          <span className="section-tag">Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub" style={{ marginBottom: "60px" }}>A straightforward, fully certified process from engineering specifications to final yard delivery.</p>

          <div className="about-process-grid-polished" style={{ marginBottom: "60px" }}>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>01</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>You send us your specification or requirements</h4>
            </div>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>02</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>We assess, scope, and confirm the build</h4>
            </div>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>03</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>Fabrication and quality control</h4>
            </div>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>04</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>Third-party certification and inspection</h4>
            </div>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "32px 24px", borderRadius: "2px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--gold)", marginBottom: "16px" }}>05</div>
              <h4 style={{ fontSize: "16px", color: "var(--text)", fontWeight: 500, lineHeight: "1.4", margin: 0 }}>Delivery to your site or yard</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg2)", padding: "80px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, textTransform: "uppercase", color: "var(--text)", marginBottom: "16px" }}>Start a Conversation</h2>
          <p className="section-sub" style={{ margin: "0 auto 40px", maxWidth: "600px" }}>Ready to discuss your DNV container or Zone-2 enclosure project? Connect with our team today.</p>
          
          <div className="cta-actions" style={{ marginBottom: "48px" }}>
            <Link to="/contact" className="btn-primary">Request a Build</Link>
            <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
          </div>

          <div className="contact-strip">
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