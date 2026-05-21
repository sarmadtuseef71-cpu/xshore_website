import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Link } from "@tanstack/react-router";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Xshore Equipment",
  url: "https://xshore.ae",
  email: "sales@xshore.ae",
  telephone: "+97122465375",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mussafah Industrial Area",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Equipment Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DNV Container Supply" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Welding Consumables" } },
    ],
  },
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Xshore Equipment | Industrial Rental, Containers & Welding Supply | UAE" },
      { name: "description", content: "Industrial equipment and tools rental across the UAE - weekly hire to multi-year project supply. DNV & ATEX containers. Welding consumables. Brand new equipment on long-term contracts. Mussafah, Abu Dhabi. Call: +971 2 246 5375" },
      { property: "og:title", content: "Xshore Equipment | Industrial Rental, Containers & Welding Supply | UAE" },
      { property: "og:description", content: "Industrial equipment and tools rental across the UAE - weekly hire to multi-year project supply. DNV & ATEX containers. Welding consumables. Brand new equipment on long-term contracts. Mussafah, Abu Dhabi. Call: +971 2 246 5375" },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
});

const equipment = [
  { title: "Hydro Testing Equipment", to: "/equipment-rental/hydro-testing-equipment", desc: "High-pressure hydrostatic test units for pipelines, vessels, and structural testing.", badge: "High Pressure", img: "/images/rental/hydro-testing/xshore-hydro-testing-equipment-rental-uae-04.webp", alt: "High pressure hydrostatic test equipment rental UAE" },
  { title: "Air Compressors", to: "/equipment-rental/air-compressors", desc: "185 to 1600 CFM. Diesel and electric variants for all site conditions.", badge: "Diesel / Electric", img: "/images/rental/air-compressors/xshore-air-compressor-rental-uae-01.webp", alt: "Industrial air compressor rental UAE diesel electric" },
  { title: "Welding Machines", to: "/equipment-rental/electric-welding-machines", desc: "MMA, MIG, TIG and submerged arc welding machines for industrial works.", badge: "MMA / MIG / TIG", img: "/images/rental/welding-machines/xshore-welding-machine-rental-uae-05.webp", alt: "MIG TIG MMA welding machine rental UAE" },
  { title: "Lifting Gear", to: "/equipment-rental/mobile-gantry-lifting-gear", desc: "Gantry cranes, chain blocks, lever hoists, slings, and rigging accessories. SWL certified.", badge: "SWL Certified", img: "/images/rental/lifting-gear/xshore-mobile-gantry-lifting-gear-uae-01.webp", alt: "Mobile gantry crane lifting gear rental UAE" },
  { title: "Pneumatic Equipment", to: "/equipment-rental/pneumatic-equipment", desc: "Air-powered tools for drilling, grinding, scaling, and impact applications.", badge: "Air-Powered", img: "/images/rental/pneumatic-equipment/xshore-pneumatic-equipment-rental-uae-16.webp", alt: "Pneumatic air powered equipment rental UAE" },
  { title: "High Pressure Washers", to: "/equipment-rental/high-pressure-washers", desc: "Cold and hot water pressure washers for industrial cleaning and surface prep.", badge: "Cold & Hot Water", img: "/images/rental/pressure-washers/xshore-high-pressure-washer-rental-uae-03.webp", alt: "Industrial high pressure washer rental UAE cold hot" },
];

const fabrication = [
  { num: "01", title: "DNV 2.7-1 Offshore Containers", to: "/fabrication/dnv-2-7-1-offshore-containers", desc: "Cargo-carrying units designed to DNV 2.7-1 / EN12079 standards for offshore lifting. Fully certified with third-party verification." },
  { num: "02", title: "Zone-2 / ATEX Enclosures", to: "/fabrication/zone-2-atex-enclosures", desc: "Explosion-protected containers certified for Zone-2 hazardous areas. Ideal for offshore and petrochemical plant environments." },
  { num: "03", title: "Workshop Containers", to: "/fabrication/workshop-containers", desc: "Custom-fitted workshop units with workbenches, storage, tooling, and ventilation for remote site deployment." },
  { num: "04", title: "Accommodation & Office Units", to: "/fabrication/accommodation-office-units", desc: "Modular containerised accommodation and site office units built for rapid deployment in remote locations." },
  { num: "05", title: "Custom Fabrication", to: "/fabrication/custom-fabrication", desc: "Bespoke structural steel fabrication, skid units, and custom builds to client drawings and specifications." },
];

const trading = [
  { title: "Welding Consumables", to: "/trading/welding-consumables", img: "https://images.unsplash.com/photo-1730584476141-232435a40c32?w=600&h=300&fit=crop&q=80", p: "Full range of welding consumables for all processes. Stocked for fast delivery to project sites across UAE.", items: ["Electrodes | MMA / SMAW","MIG / MAG wires & flux-cored wire","TIG rods & filler metals","Stainless, duplex & exotic alloys","Shielding gas & welding fluxes"], alt: "Welding consumables supply UAE | electrodes wire rods" },
  { title: "Welding Accessories & Tools", to: "/trading/welding-accessories-tools", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop&q=80", p: "All the supporting accessories and tools needed for welding operations, surface prep, and quality control.", items: ["Grinders, brushes & cutting discs","Welding helmets & gloves","Clamps, jigs & positioners","Anti-spatter & cleaning products","NDT accessories & inspection tools"], alt: "Welding accessories and tools supply UAE" },
  { title: "PPE & Safety Equipment", to: "/trading/ppe-safety-equipment", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=300&fit=crop&q=80", p: "Personal protective equipment for oil & gas, construction, and industrial environments | available on request.", items: ["Safety helmets & head protection","Harnesses & fall arrest systems","Breathing apparatus & respiratory PPE","Safety footwear & body protection","Gas detection equipment"], alt: "PPE and safety equipment supply UAE" },
];

const why = [
  { n: "01", t: "Brand New Equipment on Long-Term Projects", p: "When you rent long-term with Xshore, we commission brand new equipment for your project - not units coming off someone else's site. Your equipment starts fresh on day one and stays that way for the duration. That's what justifies a long-term contract." },
  { n: "02", t: "Someone Always Picks Up", p: "After hours, weekends, on-site emergencies - call or WhatsApp and you'll reach a real person on our team. Instantly. When something stops on a project site, every hour costs money. We know that." },
  { n: "03", t: "From One Week to Five Years", p: "Short-term hire from one week. Long-term project supply for multi-year contracts. We structure the rental around your project - not the other way around. One supplier, flexible terms." },
  { n: "04", t: "10+ Certified Containers Delivered", p: "DNV 2.7-1 and ATEX Zone-2 certified containers delivered to offshore operators and major contractors across the UAE and Middle East. We manage the process end-to-end - from specification and fabrication to certification and delivery." },
  { n: "05", t: "One Supplier. Less Admin.", p: "Equipment rental, certified containers, and welding consumables - all from Xshore. Fewer vendors, fewer purchase orders, one point of contact. For procurement teams managing complex projects, that matters." },
];


function Index() {
  return (
    <>
      <SiteNav />

      <section className="hero">
        <div className="hero-bg" aria-label="Xshore industrial yard and equipment storage" role="img" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">Mussafah, Abu Dhabi - Serving the UAE</span>
          <h1>
            Equipment and Tools Rental<br />
            Certified Containers<br />
            and Welding Supplies<br />
            <em>All From One Company.</em>
          </h1>
          <p className="hero-sub">Equipment and tools rental - weekly hire or multi-year project supply. DNV and ATEX containers. Welding consumables. Call us any time - someone always picks up.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <Link to="/equipment-rental" className="btn-outline">View Equipment</Link>
          </div>
          <div className="hero-trust">
            <span className="trust-badge">★ Brand New Equipment on Long-Term Projects</span>
            <span className="trust-badge">10+ DNV &amp; ATEX Containers Delivered</span>
            <span className="trust-badge">Available After Hours</span>
          </div>
        </div>
      </section>

      <section className="divisions" id="divisions" aria-label="Our divisions">
        <div className="div-grid">
          {[
            { n: "01 - Rental", t: "Equipment Rental", p: "Weekly hire or multi-year project supply. Short-term customers get fast turnaround. Long-term clients get brand new equipment commissioned for their project - not stock coming off another site.", l: "View Rental Options", h: "/equipment-rental", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80", alt: "Industrial equipment rental yard" },
            { n: "02 - Fabrication", t: "Containers & Fabrication", p: "10+ DNV 2.7-1 and ATEX Zone-2 certified containers delivered to offshore and industrial clients across the UAE and Middle East. We manage the full process from spec to certification.", l: "View Containers", h: "/fabrication", img: "https://images.unsplash.com/photo-1564182998979-9dcf42ff37fa?w=800&h=600&fit=crop&q=80", alt: "Offshore container fabrication" },
            { n: "03 - Trading", t: "Welding Supply", p: "Welding consumables, electrodes, MIG/TIG wires, and accessories sourced and delivered to your project site. Fast turnaround for contractors who need materials without the procurement headache.", l: "View Products", h: "/trading", img: "https://images.unsplash.com/photo-1730584476141-232435a40c32?w=800&h=600&fit=crop&q=80", alt: "Welding consumables and industrial supplies" },
          ].map((c) => (
            <Link to={c.h} className="div-card" key={c.n}>
              <div className="div-card-img" style={{ backgroundImage: `url('${c.img}')` }} aria-label={c.alt} role="img" />
              <div className="div-card-overlay" />
              <div className="div-card-content">
                <span className="div-num">{c.n}</span>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
                <span className="div-link">{c.l}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rental" id="rental">
        <div className="gold-line" />
        <span className="section-tag">Most Requested</span>
        <h2 className="section-title">Our Most-Requested Equipment</h2>
        <p className="section-sub">Available for weekly hire or long-term project rental across the UAE.</p>
        <div className="eq-grid">
          {equipment.map((e) => (
            <Link to={e.to} className="eq-card" key={e.title}>
              <img className="eq-card-img" src={e.img} alt={e.alt} loading="lazy" />
              <div className="eq-card-body">
                <div className="eq-dot" />
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
                <span className="eq-badge">{e.badge}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/equipment-rental" className="btn-primary">See All Equipment</Link>
        </div>
      </section>
      <section className="why">
        <div className="gold-line" />
        <span className="section-tag">Why Xshore</span>
        <h2 className="section-title">Why Xshore</h2>
        <p className="section-sub">Five reasons our clients keep coming back - and why long-term projects choose us from the start.</p>
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

      <section className="hydro-spot">
        <div className="hydro-spot-inner">
          <div>
            <span className="hydro-spot-label">Most Requested</span>
            <h2>Hydro Testing Equipment,<br />Our Most-Requested Product</h2>
            <p>Pipeline integrity, pressure vessel inspection, structural testing - if it needs a hydrostatic test, we have the unit for it. Available for weekly hire or long-term project rental. Our hydro testing equipment is maintained, calibrated, and ready to mobilise across the UAE.</p>
            <Link to="/equipment-rental/hydro-testing-equipment" className="btn-primary">Request a Unit</Link>
          </div>
          <div className="hydro-spot-img">
            <img src="/images/rental/hydro-testing/xshore-hydro-testing-equipment-rental-uae-01.webp" alt="Hydro testing equipment rental UAE - hydrostatic test pump pipeline" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="after-hours">
        <div className="after-hours-inner">
          <div>
            <h2>Your site doesn't stop at 5pm.<br />Neither do we.</h2>
            <p>Call or WhatsApp any time. Our team responds instantly - no voicemail, no next-business-day delays.</p>
          </div>
          <div className="after-hours-actions">
            <a href="tel:+97122465375" className="btn-ah-primary">Call Now: +971 2 246 5375</a>
            <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="btn-ah-outline">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <h2>Ready to Get<br /><span>Started?</span></h2>
        <p>Tell us what you need. We'll respond with availability, specifications, and a quote - fast.</p>
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
            <div><div className="contact-item-label">Location</div><div className="contact-item-val">Mussafah Industrial Area, Abu Dhabi, UAE</div></div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
