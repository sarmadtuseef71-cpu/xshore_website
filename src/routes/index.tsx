import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Xshore — Industrial Equipment Rental, Fabrication & Trading | Abu Dhabi, UAE" },
      { name: "description", content: "Xshore: certified industrial equipment rental, DNV 2.7-1 fabrication and trading for oil & gas, construction and industrial sectors across the UAE. Based in Mussafah, Abu Dhabi." },
      { property: "og:title", content: "Xshore — Industrial Equipment Solutions" },
      { property: "og:description", content: "Rental. Fabrication. Trading. DNV-certified industrial supplier serving ADNOC contractors across the UAE." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const equipment = [
  { title: "Hydro Testing Equipment", to: "/equipment-rental/hydro-testing-equipment", desc: "High-pressure hydrostatic test units for pipelines, vessels, and structural testing.", badge: "High Pressure", img: "/images/rental/xshore-hydro-testing-equipment-rental-uae-04.jpg" },
  { title: "Air Compressors", to: "/equipment-rental/air-compressors", desc: "185 to 1600 CFM. Diesel and electric variants for all site conditions.", badge: "Diesel / Electric", img: "/images/rental/xshore-air-compressor-rental-uae-01.jpg" },
  { title: "Electric Welding Machines", to: "/equipment-rental/electric-welding-machines", desc: "MMA, MIG, TIG and submerged arc welding machines for industrial works.", badge: "MMA / MIG / TIG", img: "/images/rental/xshore-welding-machine-rental-uae-05.jpg" },
  { title: "High Pressure Washers", to: "/equipment-rental/high-pressure-washers", desc: "Cold and hot water pressure washers for industrial cleaning and surface prep.", badge: "Cold & Hot Water", img: "/images/rental/xshore-high-pressure-washer-rental-uae-03.jpg" },
  { title: "Mobile Gantry & Lifting Gear", to: "/equipment-rental/mobile-gantry-lifting-gear", desc: "Gantry cranes, chain blocks, lever hoists, slings, and rigging accessories — SWL certified.", badge: "SWL Certified", img: "/images/rental/xshore-mobile-gantry-lifting-gear-uae-01.jpg" },
  { title: "Pneumatic Equipment", to: "/equipment-rental/pneumatic-equipment", desc: "Air-powered tools for drilling, grinding, scaling, and impact applications.", badge: "Air-Powered", img: "/images/rental/xshore-pneumatic-equipment-rental-uae-16.jpg" },
  { title: "Electric Equipment & Tools", to: "/equipment-rental/electric-equipment-tools", desc: "Angle grinders, drills, power tools, and portable electrical equipment for site use.", badge: "110V / 220V", img: "/images/rental/xshore-electric-equipment-rental-uae-10.jpg" },
  { title: "Other Equipment", to: "/equipment-rental/other-equipment", desc: "Generators, dehumidifiers, lighting towers, and specialist equipment on request.", badge: "On Request", img: "/images/rental/xshore-other-equipment-rental-uae-03.jpg" },
];

const fabrication = [
  { num: "01", title: "DNV 2.7-1 Offshore Containers", to: "/fabrication/dnv-2-7-1-offshore-containers", desc: "Cargo-carrying units designed to DNV 2.7-1 / EN12079 standards for offshore lifting. Fully certified with third-party verification." },
  { num: "02", title: "Zone-2 / ATEX Enclosures", to: "/fabrication/zone-2-atex-enclosures", desc: "Explosion-protected containers certified for Zone-2 hazardous areas. Ideal for offshore and petrochemical plant environments." },
  { num: "03", title: "Workshop Containers", to: "/fabrication/workshop-containers", desc: "Custom-fitted workshop units with workbenches, storage, tooling, and ventilation for remote site deployment." },
  { num: "04", title: "Accommodation & Office Units", to: "/fabrication/accommodation-office-units", desc: "Modular containerised accommodation and site office units built for rapid deployment in remote locations." },
  { num: "05", title: "Custom Fabrication", to: "/fabrication/custom-fabrication", desc: "Bespoke structural steel fabrication, skid units, and custom builds to client drawings and specifications." },
];

const trading = [
  { title: "Welding Consumables", to: "/trading/welding-consumables", img: "https://images.unsplash.com/photo-1730584476141-232435a40c32?w=600&h=300&fit=crop&q=80", p: "Full range of welding consumables for all processes. Stocked for fast delivery to project sites across UAE.", items: ["Electrodes — MMA / SMAW","MIG / MAG wires & flux-cored wire","TIG rods & filler metals","Stainless, duplex & exotic alloys","Shielding gas & welding fluxes"] },
  { title: "Welding Accessories & Tools", to: "/trading/welding-accessories-tools", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop&q=80", p: "All the supporting accessories and tools needed for welding operations, surface prep, and quality control.", items: ["Grinders, brushes & cutting discs","Welding helmets & gloves","Clamps, jigs & positioners","Anti-spatter & cleaning products","NDT accessories & inspection tools"] },
  { title: "PPE & Safety Equipment", to: "/trading/ppe-safety-equipment", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=300&fit=crop&q=80", p: "Personal protective equipment for oil & gas, construction, and industrial environments — available on request.", items: ["Safety helmets & head protection","Harnesses & fall arrest systems","Breathing apparatus & respiratory PPE","Safety footwear & body protection","Gas detection equipment"] },
];

const why = [
  { n: "01", t: "Certified Equipment Fleet", p: "All equipment is maintained, tested, and certified to international standards. No shortcuts on compliance." },
  { n: "02", t: "Fast Mobilisation", p: "Large on-ground inventory in Mussafah. Equipment can be mobilised within 24 hours for urgent requirements." },
  { n: "03", t: "Technical Support", p: "Our team brings hands-on oil & gas experience. We provide guidance on equipment selection, setup, and operation." },
  { n: "04", t: "DNV & Zone-2 Expertise", p: "One of very few UAE-based fabricators with in-house DNV certification and full ATEX Zone-2 compliance capability." },
  { n: "05", t: "Single Source Solution", p: "Rental, fabrication, and trading under one roof. Simplify your supply chain and vendor management." },
  { n: "06", t: "ADNOC Contractor Network", p: "Proven track record supplying major ADNOC contractors. We understand the compliance and documentation requirements." },
];

const clients = ["ADNOC","DIPS","Coxabengoa","Al Raha Group","Arabian Industries","Mubarraz Oil Field","Hebu Tech"];

function Index() {
  return (
    <>
      <SiteNav />

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">Abu Dhabi · UAE · Mussafah Industrial</span>
          <h1>Industrial<br />Equipment<br /><em>Solutions</em></h1>
          <p className="hero-sub">Rental. Fabrication. Trading. Certified equipment and specialist services for the oil & gas, construction, and industrial sectors across the UAE.</p>
          <div className="hero-actions">
            <Link to="/equipment-rental" className="btn-primary">Explore Equipment</Link>
            <Link to="/contact" className="btn-outline">Request a Quote</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="hero-stat-num">15+</span><span className="hero-stat-label">Years Experience</span></div>
            <div className="hero-stat"><span className="hero-stat-num">500+</span><span className="hero-stat-label">Equipment Units</span></div>
            <div className="hero-stat"><span className="hero-stat-num">3</span><span className="hero-stat-label">Business Divisions</span></div>
            <div className="hero-stat"><span className="hero-stat-num">DNV</span><span className="hero-stat-label">Certified Fabricator</span></div>
          </div>
        </div>
      </section>

      <section className="divisions" id="divisions" aria-label="Our divisions">
        <div className="div-grid">
          {[
            { n: "01 — Rental", t: "Equipment Rental", p: "A comprehensive fleet of certified industrial equipment for short and long-term hire. Mobilised within 24 hours from our Mussafah yard.", l: "View Equipment", h: "/equipment-rental", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80" },
            { n: "02 — Fabrication", t: "Fabrication & Containers", p: "Custom DNV-certified offshore containers, Zone-2 / ATEX enclosures, and workshop units built to client specification.", l: "View Capabilities", h: "/fabrication", img: "https://images.unsplash.com/photo-1564182998979-9dcf42ff37fa?w=800&h=600&fit=crop&q=80" },
            { n: "03 — Trading", t: "Industrial Trading", p: "Supply of PPE & safety equipment, welding consumables, and accessories. Fast sourcing for major contractors across the UAE.", l: "View Products", h: "/trading", img: "https://images.unsplash.com/photo-1730584476141-232435a40c32?w=800&h=600&fit=crop&q=80" },
          ].map((c) => (
            <div className="div-card" key={c.n}>
              <div className="div-card-img" style={{ backgroundImage: `url('${c.img}')` }} />
              <div className="div-card-overlay" />
              <div className="div-card-content">
                <span className="div-num">{c.n}</span>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
                <Link to={c.h} className="div-link">{c.l}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rental" id="rental">
        <div className="gold-line" />
        <span className="section-tag">Division 01</span>
        <h2 className="section-title">Equipment Rental</h2>
        <p className="section-sub">Well-maintained, certified equipment ready for mobilisation. Available for daily, weekly, and long-term hire across Abu Dhabi and the wider UAE.</p>
        <div className="eq-grid">
          {equipment.map((e) => (
            <Link to={e.to} className="eq-card" key={e.title}>
              <img className="eq-card-img" src={e.img} alt={e.title} loading="lazy" />
              <div className="eq-card-body">
                <div className="eq-dot" />
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
                <span className="eq-badge">{e.badge}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="fabrication" id="fabrication">
        <div className="gold-line" />
        <span className="section-tag">Division 02</span>
        <h2 className="section-title">Fabrication & Containers</h2>
        <p className="section-sub">Custom-built certified units engineered to your specification. Built for offshore, onshore, and hazardous area environments.</p>
        <div className="fab-layout">
          <div className="fab-items">
            {fabrication.map((f, i) => (
              <Link to={f.to} className={`fab-item${i === 0 ? " active" : ""}`} key={f.num}>
                <span className="fab-item-num">{f.num}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="fab-visual">
            <div className="fab-visual-img" />
            <div className="fab-visual-overlay" />
            <div className="fab-visual-content">
              <span className="fab-visual-tag">Certified Fabrication</span>
              <h3>Built to Last.<br />Certified to<br /><span>Perform.</span></h3>
              <p>Every unit we fabricate is built to the highest industry standards with full third-party certification. From concept to delivery, we manage the entire process in-house.</p>
              <div className="cert-badges">
                <span className="cert-badge">DNV 2.7-1</span>
                <span className="cert-badge">ATEX Zone-2</span>
                <span className="cert-badge">EN12079</span>
                <span className="cert-badge">3rd Party Cert.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trading" id="trading">
        <div className="gold-line" />
        <span className="section-tag">Division 03</span>
        <h2 className="section-title">Industrial Trading</h2>
        <p className="section-sub">Quality supply of safety, welding, and industrial materials. Fast turnaround with direct sourcing for project teams and major contractors.</p>
        <div className="trade-grid">
          {trading.map((t) => (
            <Link to={t.to} className="trade-card" key={t.title}>
              <img className="trade-card-img" src={t.img} alt={t.title} loading="lazy" />
              <div className="trade-card-body">
                <h3>{t.title}</h3>
                <p>{t.p}</p>
                <div className="trade-items">
                  {t.items.map((i) => <span className="trade-item" key={i}>{i}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="dnv-section" id="dnv">
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

      <section className="clients" id="about">
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

      <section className="cta-section" id="contact">
        <h2>Ready to Get<br /><span>Started?</span></h2>
        <p>Tell us what you need. We'll respond with availability, specifications, and a quote — fast.</p>
        <div className="cta-actions">
          <a href="mailto:sales@xshore.ae" className="btn-primary">Email Us</a>
          <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
        </div>
        <div className="contact-strip">
          <div className="contact-item">
            <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <div><div className="contact-item-label">Email</div><div className="contact-item-val">sales@xshore.ae</div></div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
            <div><div className="contact-item-label">Phone / WhatsApp</div><div className="contact-item-val">+971 2 246 5375</div></div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div><div className="contact-item-label">Location</div><div className="contact-item-val">Mussafah, Abu Dhabi, UAE</div></div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
