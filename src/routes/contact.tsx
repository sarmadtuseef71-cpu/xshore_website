import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Xshore | Equipment Rental, Fabrication & Trading — Abu Dhabi" },
      { name: "description", content: "Get in touch with Xshore for equipment rental, DNV-certified fabrication or trading enquiries. Based in Mussafah, Abu Dhabi, UAE — same-day response." },
      { property: "og:title", content: "Contact Xshore — Abu Dhabi, UAE" },
      { property: "og:description", content: "Email, WhatsApp or call our team for equipment rental and supply enquiries." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <SiteNav />

      <section className="er-hero">
        <div className="er-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1800&h=1000&fit=crop&q=80')" }} />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">Contact</span>
          <h1>Get a <em>Quote.</em><br />Same-Day Response.</h1>
          <p className="er-hero-sub">Tell us what you need — equipment, specifications, dates, and site location. We respond same day with availability and pricing.</p>
        </div>
      </section>

      <section className="quote">
        <div className="quote-wrap">
          <div>
            <div className="gold-line" />
            <span className="section-tag">Reach Us</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Talk to the Team</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>Fastest response is via WhatsApp. For formal enquiries, please use email or the form.</p>
            <div className="contact-strip" style={{ marginTop: 24, gridTemplateColumns: "1fr" }}>
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
            </div>
          </div>

          <form className="quote-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch shortly."); }}>
            <div className="qf-field">
              <label className="qf-label" htmlFor="c-name">Your Name</label>
              <input id="c-name" className="qf-input" required />
            </div>
            <div className="qf-field">
              <label className="qf-label" htmlFor="c-company">Company Name</label>
              <input id="c-company" className="qf-input" required />
            </div>
            <div className="qf-field">
              <label className="qf-label" htmlFor="c-phone">Phone / WhatsApp</label>
              <input id="c-phone" type="tel" className="qf-input" required />
            </div>
            <div className="qf-field">
              <label className="qf-label" htmlFor="c-email">Email</label>
              <input id="c-email" type="email" className="qf-input" required />
            </div>
            <div className="qf-field full">
              <label className="qf-label" htmlFor="c-division">Enquiry Type</label>
              <select id="c-division" className="qf-select">
                <option value="rental">Equipment Rental</option>
                <option value="fabrication">Fabrication & Containers</option>
                <option value="trading">Trading / Supply</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="qf-field full">
              <label className="qf-label" htmlFor="c-message">Your Requirement</label>
              <textarea id="c-message" className="qf-textarea" required placeholder="Equipment / scope, site location, required dates, duration…" />
            </div>
            <button className="qf-submit" type="submit">Send Enquiry</button>
            <p className="qf-note">Or WhatsApp us directly: <a href="https://wa.me/97122465375">+971 2 246 5375</a> — we respond instantly.</p>
          </form>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}