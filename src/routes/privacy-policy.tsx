import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy - Xshore Equipment" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

const sections = [
  { id: "who-we-are", label: "1. Who We Are" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "who-we-share", label: "4. Who We Share Information With" },
  { id: "cookies", label: "5. Cookies" },
  { id: "data-retention", label: "6. Data Retention" },
  { id: "your-rights", label: "7. Your Rights" },
  { id: "links", label: "8. Links to Other Websites" },
  { id: "changes", label: "9. Changes to This Policy" },
  { id: "contact", label: "10. Contact" },
];

function PrivacyPolicyPage() {
  return (
    <>
      <SiteNav />

      {/* Hero Section */}
      <section style={{ background: "var(--bg3)", borderBottom: "1px solid var(--border)", paddingTop: "100px", paddingBottom: "60px", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "24px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "block", marginBottom: "14px" }}>
              Legal Documentation
            </span>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontFamily: "'Oswald', sans-serif", textTransform: "uppercase", fontWeight: 700, color: "var(--text)", marginBottom: "12px", lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section style={{ background: "var(--bg)", padding: "60px 5vw 100px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }} className="legal-layout">

          {/* Main Content */}
          <div>
            {/* Intro */}
            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", borderRadius: "3px", padding: "28px 32px", marginBottom: "32px" }}>
              <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", margin: 0 }}>
                Xshore Equipment LLC ("Xshore", "we", "our", "us") is committed to protecting the privacy of visitors to our website at xshore.ae. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it.
              </p>
            </div>

            {/* Section 1 */}
            <div id="who-we-are" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>01</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Who We Are</h2>
                <div style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p style={{ margin: 0 }}><strong style={{ color: "var(--text)" }}>Company:</strong> Xshore Equipment LLC</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "var(--text)" }}>Address:</strong> Mussafah Industrial Area, Abu Dhabi, UAE</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "var(--text)" }}>Email:</strong> sales@xshore.ae</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "var(--text)" }}>Phone:</strong> +971 2 246 5375</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="information-we-collect" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>02</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Information We Collect</h2>
                <div style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85" }}>
                  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text)" }}>Information you provide directly:</strong></p>
                  <p style={{ marginBottom: "20px" }}>When you submit a quote request or contact form on our website, we collect the information you enter - which may include your name, company name, email address, phone number, site location, and details of your equipment requirements.</p>
                  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text)" }}>Information collected automatically:</strong></p>
                  <p style={{ marginBottom: "16px" }}>When you visit our website, we use Google Analytics to collect anonymous usage data, including pages visited, time spent on site, device type, and general geographic location (country/city level). This data does not identify you personally.</p>
                  <p style={{ margin: 0 }}>We also use standard website cookies to support basic site functionality.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="how-we-use" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>03</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>How We Use Your Information</h2>
                <div style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85" }}>
                  <p style={{ marginBottom: "12px" }}>We use the information you provide to:</p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "20px", listStyleType: "square" }}>
                    <li style={{ marginBottom: "8px" }}>Respond to your quote request or enquiry</li>
                    <li style={{ marginBottom: "8px" }}>Communicate with you about your rental, container, or supply requirements</li>
                    <li style={{ marginBottom: "8px" }}>Follow up on previous conversations where relevant</li>
                  </ul>
                  <p style={{ marginBottom: "12px" }}>We use analytics data to:</p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "20px", listStyleType: "square" }}>
                    <li style={{ marginBottom: "8px" }}>Understand how visitors use our website</li>
                    <li style={{ marginBottom: "8px" }}>Improve the content and structure of our site</li>
                  </ul>
                  <p style={{ margin: 0 }}>We do not use your information for automated decision-making or profiling. We do not send marketing emails unless you have specifically requested to hear from us.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="who-we-share" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>04</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Who We Share Information With</h2>
                <div style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85" }}>
                  <p style={{ marginBottom: "16px" }}>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
                  <p style={{ marginBottom: "12px" }}>We use the following third-party services which may process data on our behalf:</p>
                  <ul style={{ paddingLeft: "20px", margin: 0, listStyleType: "square" }}>
                    <li style={{ marginBottom: "12px" }}>
                      <strong style={{ color: "var(--text)" }}>Google Analytics</strong> - anonymous website usage analytics (Google LLC, USA). You can opt out via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "underline" }}>Google Analytics Opt-out Browser Add-on</a>.
                    </li>
                    <li style={{ marginBottom: "0" }}>
                      <strong style={{ color: "var(--text)" }}>Email / hosting providers</strong> - to receive and store enquiry form submissions securely.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="cookies" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>05</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Cookies</h2>
                <div style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85" }}>
                  <p style={{ marginBottom: "12px" }}>Our website uses cookies. Cookies are small text files stored on your device. We use:</p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "16px", listStyleType: "square" }}>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text)" }}>Functional cookies</strong> - required for the website to work correctly</li>
                    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text)" }}>Analytics cookies</strong> - Google Analytics, to understand site usage (anonymous)</li>
                  </ul>
                  <p style={{ margin: 0 }}>You can disable cookies in your browser settings at any time. Disabling analytics cookies will not affect your ability to use the website.</p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="data-retention" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>06</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Data Retention</h2>
                <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", margin: 0 }}>
                  We retain enquiry data for as long as is reasonably necessary to manage our business relationship with you, or as required by applicable UAE law. If you would like your information deleted, contact us at <a href="mailto:sales@xshore.ae" style={{ color: "var(--gold)", textDecoration: "underline" }}>sales@xshore.ae</a>.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="your-rights" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>07</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Your Rights</h2>
                <div style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85" }}>
                  <p style={{ marginBottom: "12px" }}>Under applicable UAE law and international best practice, you have the right to:</p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "16px", listStyleType: "square" }}>
                    <li style={{ marginBottom: "8px" }}>Request a copy of the personal information we hold about you</li>
                    <li style={{ marginBottom: "8px" }}>Request correction of inaccurate information</li>
                    <li style={{ marginBottom: "8px" }}>Request deletion of your information (subject to legal obligations)</li>
                    <li style={{ marginBottom: "8px" }}>Withdraw consent for any processing based on consent</li>
                  </ul>
                  <p style={{ margin: 0 }}>To exercise any of these rights, contact us at <a href="mailto:sales@xshore.ae" style={{ color: "var(--gold)", textDecoration: "underline" }}><strong>sales@xshore.ae</strong></a>.</p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div id="links" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>08</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Links to Other Websites</h2>
                <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", margin: 0 }}>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies separately.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div id="changes" style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>09</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Changes to This Policy</h2>
                <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", margin: 0 }}>
                  We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect any changes. We recommend checking this page periodically.
                </p>
              </div>
            </div>

            {/* Section 10 - Contact */}
            <div id="contact" style={{ marginBottom: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>10</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", borderRadius: "3px", padding: "28px 32px" }}>
                <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>Contact</h2>
                <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", marginBottom: "24px" }}>
                  For any questions about this Privacy Policy or how we handle your data:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <Mail style={{ color: "var(--gold)", width: "18px", height: "18px", flexShrink: 0 }} />
                    <a href="mailto:sales@xshore.ae" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "15px" }}>sales@xshore.ae</a>
                  </div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <Phone style={{ color: "var(--gold)", width: "18px", height: "18px", flexShrink: 0 }} />
                    <a href="tel:+97122465375" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "15px" }}>+971 2 246 5375</a>
                  </div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <MapPin style={{ color: "var(--gold)", width: "18px", height: "18px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dim)", fontSize: "15px" }}>Mussafah Industrial Area, Abu Dhabi, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar TOC */}
          <aside style={{ position: "sticky", top: "100px" }} className="legal-toc">
            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", borderRadius: "3px", padding: "24px 20px" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: "16px", fontFamily: "'Oswald', sans-serif" }}>
                On This Page
              </p>
              <nav>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        style={{ display: "block", fontSize: "13px", color: "var(--text-dim)", textDecoration: "none", padding: "6px 10px", borderRadius: "2px", transition: "color 0.2s, background 0.2s", lineHeight: "1.4" }}
                        onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "var(--gold)"; (e.target as HTMLAnchorElement).style.background = "rgba(200,137,42,0.06)"; }}
                        onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "var(--text-dim)"; (e.target as HTMLAnchorElement).style.background = "transparent"; }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
