import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useState } from "react";
import { trackEvent } from "@/components/Analytics";

export const Route = createFileRoute("/equipment-rental/")({
  component: EquipmentRentalPage,
  head: () => ({
    meta: [
      { title: "Equipment Rental UAE | Weekly & Long-Term Industrial Hire | Xshore" },
      { name: "description", content: "Industrial equipment and tools rental across the UAE. Short-term hire from 1 week or long-term project supply - brand new equipment for multi-year contracts. Hydro testing, compressors, welding machines, power tools & more. Abu Dhabi." },
      { property: "og:title", content: "Equipment Rental UAE | Weekly & Long-Term Industrial Hire | Xshore" },
      { property: "og:description", content: "Industrial equipment and tools rental across the UAE. Short-term hire from 1 week or long-term project supply - brand new equipment for multi-year contracts. Hydro testing, compressors, welding machines, power tools & more. Abu Dhabi." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const categories = [
  { title: "Hydro Testing Equipment", body: "High-pressure hydrostatic test units for pipeline testing, pressure vessel inspection, and structural integrity verification. Our most-requested product | available for short and long-term hire across the UAE.", badge: "High Pressure", img: "/images/rental/hydro-testing/xshore-hydro-testing-equipment-rental-uae-04.webp", alt: "High pressure hydrostatic test equipment rental UAE", to: "/equipment-rental/hydro-testing-equipment" },
  { title: "Air Compressors", body: "185 to 1600 CFM diesel and electric air compressors for all site conditions. Available in multiple configurations for offshore, construction, and industrial applications.", badge: "Diesel / Electric", img: "/images/rental/air-compressors/xshore-air-compressor-rental-uae-01.webp", alt: "Industrial air compressor rental UAE diesel electric", to: "/equipment-rental/air-compressors" },
  { title: "Electric Welding Machines", body: "MMA, MIG, TIG, and submerged arc welding machines for all industrial welding requirements. Available for weekly hire or long-term project deployment.", badge: "MMA / MIG / TIG", img: "/images/rental/welding-machines/xshore-welding-machine-rental-uae-05.webp", alt: "MIG TIG MMA welding machine rental UAE", to: "/equipment-rental/electric-welding-machines" },
  { title: "High Pressure Washers", body: "Cold and hot water industrial pressure washers for surface preparation, cleaning, and maintenance. Suitable for offshore, construction, and plant environments.", badge: "Cold & Hot Water", img: "/images/rental/pressure-washers/xshore-high-pressure-washer-rental-uae-03.webp", alt: "Industrial high pressure washer rental UAE cold hot", to: "/equipment-rental/high-pressure-washers" },
  { title: "Mobile Gantry & Lifting Gear", body: "Gantry cranes, chain blocks, lever hoists, wire rope slings, and rigging accessories | all SWL certified and inspection-ready for safe lifting operations.", badge: "SWL Certified", img: "/images/rental/lifting-gear/xshore-mobile-gantry-lifting-gear-uae-01.webp", alt: "Mobile gantry crane lifting gear rental UAE", to: "/equipment-rental/mobile-gantry-lifting-gear" },
  { title: "Pneumatic Equipment", body: "Air-powered tools for drilling, grinding, scaling, chipping, and impact work. Suitable for offshore and onshore industrial applications.", badge: "Air-Powered", img: "/images/rental/pneumatic-equipment/xshore-pneumatic-equipment-rental-uae-16.webp", alt: "Pneumatic air powered equipment rental UAE", to: "/equipment-rental/pneumatic-equipment" },
  { title: "Electric Equipment & Tools", body: "Angle grinders, core drills, portable power tools, and electrical equipment in 110V and 220V configurations for site use.", badge: "110V / 220V", img: "/images/rental/electric-equipment/xshore-electric-equipment-rental-uae-10.webp", alt: "Electric power tools equipment rental UAE 110V 220V", to: "/equipment-rental/electric-equipment-tools" },
  { title: "Other Equipment", body: "Gas cutting sets, gas detectors, generators, dehumidifiers, lighting towers, and specialist equipment. Contact us with specific requirements.", badge: "On Request", img: "/images/rental/other-equipment/xshore-other-equipment-rental-uae-03.webp", alt: "Gas cutting machine multi gas detector rental UAE", to: "/equipment-rental/other-equipment" },
];

function EquipmentRentalPage() {
  const [rentalType, setRentalType] = useState<"short" | "long">("short");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const scrollToQuote = (type: "short" | "long") => {
    setRentalType(type);
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const fromDate = formData.get("from") as string;
    const endDate = formData.get("end") as string;
    const userNotes = formData.get("notes") as string;
    
    let combinedNotes = "";
    if (fromDate) combinedNotes += `Required From: ${fromDate}\n`;
    if (endDate) combinedNotes += `Duration/End Date: ${endDate}\n`;
    if (userNotes) combinedNotes += `Notes: ${userNotes}`;

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      need: formData.get("need"),
      type: formData.get("type") === "short" ? "Short-term Rental" : "Long-Term Rental",
      location: formData.get("location"),
      notes: combinedNotes.trim(),
      company_website: formData.get("company_website"),
      page: window.location.href,
    };

    try {
      const res = await fetch("/api/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setIsSuccess(true);
      trackEvent("submit_rental_quote_form");
    } catch (err) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <SiteNav />

      <section className="er-hero">
        <div className="er-hero-bg" aria-label="Industrial air compressor and equipment on site" role="img" />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">Division 01 · Equipment Rental</span>
          <h1>Equipment &amp; Tools Rental - Weekly Hire to <em>Multi-Year</em> Project Supply</h1>
          <p className="er-hero-sub">Need equipment or tools for a week or for three years? We handle both. All units are certified and field-ready. Long-term project clients receive brand new equipment commissioned specifically for their project.</p>
        </div>
      </section>

      <section className="paths" aria-label="Rental paths">
        <div className="gold-line" />
        <span className="section-tag">Choose Your Path</span>
        <h2 className="section-title">Two Rental Paths</h2>
        <p className="section-sub">Short-term hire for fast-turnaround jobs, or long-term project supply built around your timeline. Pick the path that fits.</p>
        <div className="paths-grid">
          <div className="path-card" id="short-term-hire">
            <span className="path-label">01 - Short-Term</span>
            <h3>Short-Term Hire</h3>
            <span className="path-meta">Minimum: 1 week</span>
            <p>Need equipment fast for a short job? We carry stock across all major categories - available for weekly or monthly hire. Tell us what you need, where, and when. We respond same day.</p>
            <button className="path-cta" onClick={() => scrollToQuote("short")}>Request Short-Term Quote →</button>
          </div>
          <div className="path-card" id="long-term-projects">
            <span className="path-label">02 - Long-Term</span>
            <h3>Long-Term Project Rental</h3>
            <span className="path-meta">Months to years - matched to your project</span>
            <p>Our long-term contracts are built around your project - not our rental schedule. Brand new equipment commissioned on day one, maintained throughout the contract, and available for the full duration. Currently supporting 3 to 5-year projects across the UAE.</p>
            <button className="path-cta" onClick={() => scrollToQuote("long")}>Request Long-Term Quote →</button>
            <div className="path-trust">★ Brand new equipment on every long-term contract</div>
          </div>
        </div>
      </section>

      <section className="rental" id="categories" aria-label="Equipment categories">
        <div className="gold-line" />
        <span className="section-tag">Equipment Categories</span>
        <h2 className="section-title">Browse by Category</h2>
        <p className="section-sub">Certified, well-maintained equipment ready for mobilisation across Abu Dhabi and the wider UAE.</p>
        <div className="eq-grid">
          {categories.map((c) => (
            <Link to={c.to} key={c.title} className="eq-card">
              <img className="eq-card-img" src={c.img} alt={c.alt} loading="lazy" />
              <div className="eq-card-body">
                <div className="eq-dot" />
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                <span className="eq-badge">{c.badge}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="quote" id="quote" aria-label="Request a quote">
        <div className="quote-wrap">
          <div>
            <div className="gold-line" />
            <span className="section-tag">Get a Quote</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Send Us Your Requirements</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>Tell us what you need - equipment, dates, and site location. We respond same day with availability and pricing.</p>
            <div className="contact-strip">
              <a href="mailto:sales@xshore.ae" className="contact-item" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div><div className="contact-item-label">Email</div><div className="contact-item-val">sales@xshore.ae</div></div>
              </a>
              <a href="tel:+97122465375" className="contact-item" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                <div><div className="contact-item-label">Phone / WhatsApp</div><div className="contact-item-val">+971 2 246 5375</div></div>
              </a>
              <div className="contact-item">
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div><div className="contact-item-label">Location</div><div className="contact-item-val">Mussafah Industrial Area, Abu Dhabi, UAE</div></div>
              </div>
            </div>
          </div>

          {isSuccess ? (
            <div style={{ padding: "40px 32px", background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "2px solid var(--gold)", borderRadius: 3, textAlign: "center" }}>
              <h3 style={{ fontSize: 24, color: "var(--gold)", marginBottom: 12 }}>Thank you.</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>Your quote request has been sent to our team. We will contact you shortly.</p>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit}>
              <input type="text" name="company_website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="qf-field full">
                <label className="qf-label" htmlFor="qf-equipment">Equipment Needed</label>
                <input id="qf-equipment" name="need" className="qf-input" required placeholder="e.g. 750 CFM compressor + hydro test unit" />
              </div>
              <div className="qf-field full">
                <label className="qf-label" htmlFor="qf-type">Rental Type</label>
                <select id="qf-type" name="type" className="qf-select" value={rentalType} onChange={(e) => setRentalType(e.target.value as "short" | "long")}>
                  <option value="short">Short-term (1 week - months)</option>
                  <option value="long">Long-term (months - years)</option>
                </select>
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="qf-from">Required From</label>
                <input id="qf-from" name="from" type="date" className="qf-input" required />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="qf-end">Duration / End Date</label>
                <input id="qf-end" name="end" className="qf-input" placeholder="e.g. 3 months or end date" />
              </div>
              <div className="qf-field full">
                <label className="qf-label" htmlFor="qf-site">Site Location / Emirate</label>
                <input id="qf-site" name="location" className="qf-input" required placeholder="e.g. Ruwais, Abu Dhabi" />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="qf-name">Your Name</label>
                <input id="qf-name" name="name" className="qf-input" required />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="qf-company">Company Name</label>
                <input id="qf-company" name="company" className="qf-input" required />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="qf-phone">Phone / WhatsApp</label>
                <input id="qf-phone" name="phone" type="tel" className="qf-input" required />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="qf-email">Email</label>
                <input id="qf-email" name="email" type="email" className="qf-input" required />
              </div>
              <div className="qf-field full">
                <label className="qf-label" htmlFor="qf-notes">Notes</label>
                <textarea id="qf-notes" name="notes" className="qf-textarea" placeholder="Specifications, accessories, delivery notes…" />
              </div>
              
              {isError && (
                <div className="qf-field full" style={{ color: "#ff4444", fontSize: 13, background: "rgba(255,0,0,0.1)", padding: "12px 16px", borderRadius: 2 }}>
                  There was an error sending your request. Please try again or contact us directly via WhatsApp.
                </div>
              )}
              
              <button className="qf-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Quote Request"}
              </button>
              <p className="qf-note" style={{ marginTop: "12px", fontSize: "11px", opacity: 0.7, textAlign: "center" }}>
                All hires are subject to our <Link to="/rental-terms" style={{ color: "var(--gold)", textDecoration: "underline" }}>Equipment Rental Terms &amp; Conditions</Link>.
              </p>
              <p className="qf-note">Or WhatsApp us directly: <a href="https://wa.me/97122465375">+971 2 246 5375</a> - we respond instantly.</p>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
