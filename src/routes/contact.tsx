import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Xshore Equipment | Get a Quote | Abu Dhabi, UAE" },
      { name: "description", content: "Get a quote for equipment rental, container supply, or welding consumables. Call or WhatsApp +971 2 246 5375. Based in Mussafah, Abu Dhabi | serving the UAE." },
      { property: "og:title", content: "Contact Xshore Equipment | Get a Quote | Abu Dhabi, UAE" },
      { property: "og:description", content: "Get a quote for equipment rental, container supply, or welding consumables. Call or WhatsApp +971 2 246 5375. Based in Mussafah, Abu Dhabi | serving the UAE." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      need: formData.get("need"),
      type: formData.get("type"),
      location: formData.get("location"),
      notes: formData.get("notes"),
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
        <div className="er-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1800&h=1000&fit=crop&q=80')" }} />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">Contact</span>
          <h1>Get in Touch - <em>We Respond Fast</em></h1>
          <p className="er-hero-sub">Send us a quote request or just describe what you need. We'll come back to you the same day - usually faster. Prefer to call or WhatsApp? Even better.</p>
        </div>
      </section>

      <section className="quote">
        <div className="quote-wrap">
          <div>
            <div className="gold-line" />
            <span className="section-tag">Reach Us</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Talk to the Team</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>Fastest response is via WhatsApp. For formal enquiries, please use email or the form.</p>
            <div className="contact-strip">
              <a href="mailto:sales@xshore.ae" className="contact-item" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div><div className="contact-item-label">Email</div><div className="contact-item-val">sales@xshore.ae</div></div>
              </a>
              <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                <div><div className="contact-item-label">Phone / WhatsApp</div><div className="contact-item-val">+971 2 246 5375</div></div>
              </a>
              <div className="contact-item">
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div><div className="contact-item-label">Location</div><div className="contact-item-val">Mussafah Industrial Area, Abu Dhabi, UAE</div></div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                <div><div className="contact-item-label">Office Hours</div><div className="contact-item-val">Sunday - Thursday, 8:00 AM - 6:00 PM</div></div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                <div><div className="contact-item-label">After Hours</div><div className="contact-item-val">WhatsApp or call - we respond.</div></div>
              </div>
            </div>
          </div>

          {isSuccess ? (
            <div style={{ padding: "40px 32px", background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "2px solid var(--gold)", borderRadius: 3, textAlign: "center" }}>
              <h3 style={{ fontSize: 24, color: "var(--gold)", marginBottom: 12 }}>Thank you.</h3>
              <p style={{ color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>Your enquiry has been sent to our team. We will contact you shortly.</p>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit}>
              <input type="text" name="company_website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              
              <div className="qf-field full">
                <label className="qf-label" htmlFor="c-need">What do you need?</label>
                <input id="c-need" name="need" className="qf-input" required placeholder="e.g. 750 CFM compressor + hydro test unit" />
              </div>
              <div className="qf-field full">
                <label className="qf-label" htmlFor="c-type">Type</label>
                <select id="c-type" name="type" className="qf-select" required>
                  <option value="Short-term Rental">Short-term Rental</option>
                  <option value="Long-Term Rental">Long-Term Rental</option>
                  <option value="Container">Container</option>
                  <option value="Welding Supply">Welding Supply</option>
                </select>
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="c-name">Your Name</label>
                <input id="c-name" name="name" className="qf-input" required />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="c-company">Company Name</label>
                <input id="c-company" name="company" className="qf-input" required />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="c-phone">Phone / WhatsApp</label>
                <input id="c-phone" name="phone" type="tel" className="qf-input" required />
              </div>
              <div className="qf-field">
                <label className="qf-label" htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" className="qf-input" required />
              </div>
              <div className="qf-field full">
                <label className="qf-label" htmlFor="c-location">Emirate / Site Location</label>
                <input id="c-location" name="location" className="qf-input" required placeholder="e.g. Ruwais, Abu Dhabi" />
              </div>
              <div className="qf-field full">
                <label className="qf-label" htmlFor="c-notes">Notes</label>
                <textarea id="c-notes" name="notes" className="qf-textarea" placeholder="Specifications, accessories, delivery notes..." />
              </div>
              
              {isError && (
                <div className="qf-field full" style={{ color: "#ff4444", fontSize: 13, background: "rgba(255,0,0,0.1)", padding: "12px 16px", borderRadius: 2 }}>
                  There was an error sending your request. Please try again or contact us directly via WhatsApp.
                </div>
              )}
              
              <button className="qf-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
              <p className="qf-note" style={{ marginTop: "12px", fontSize: "11px", opacity: 0.7, textAlign: "center" }}>
                By submitting this request, you agree to our <Link to="/rental-terms" style={{ color: "var(--gold)", textDecoration: "underline" }}>Equipment Rental Terms &amp; Conditions</Link>.
              </p>
              <p className="qf-note">Prefer to skip the form? WhatsApp us directly at <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer">+971 2 246 5375</a> - we'll get back to you straight away.</p>
            </form>
          )}
        </div>
      </section>

      <section style={{ padding: "0 5% 100px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ padding: "24px", background: "var(--bg2)", border: "1px solid var(--border)", borderTop: "2px solid var(--gold)", borderRadius: 3 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8, color: "#fff" }}>Visit Our Yard</h2>
          <p style={{ color: "var(--text-dim)", marginBottom: 20, fontSize: 14 }}>Mussafah Industrial Area, Abu Dhabi, UAE</p>
          <div style={{ width: "100%", height: 400, backgroundColor: "var(--bg3)", border: "1px solid var(--border)" }}>
            <iframe 
              title="Xshore Equipment Location - Mussafah, Abu Dhabi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115939.92476595535!2d54.43630654877233!3d24.329864275069796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4125b2d56a31%3A0x38e2d4d8fc2245b0!2sMussafah%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(90%) invert(10%) contrast(1.1)" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}