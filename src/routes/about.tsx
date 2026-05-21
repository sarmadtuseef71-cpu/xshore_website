import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Clock, MapPin, Mail, Phone, Settings, Box, Layers, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Xshore Equipment | Industrial Rental & Supply - Abu Dhabi, UAE" },
      { name: "description", content: "Xshore Equipment is an Abu Dhabi-based industrial company providing equipment rental, DNV container supply, and welding consumables to oil & gas and construction projects across the UAE." },
      { property: "og:title", content: "About Xshore Equipment | Industrial Rental & Supply - Abu Dhabi, UAE" },
      { property: "og:description", content: "Xshore Equipment is an Abu Dhabi-based industrial company providing equipment rental, DNV container supply, and welding consumables to oil & gas and construction projects across the UAE." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <SiteNav />

      {/* Hero Section */}
      <section className="er-hero" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
        <div 
          className="er-hero-bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1800&h=1000&fit=crop&q=80')" }} 
          aria-label="Xshore industrial logistics yard in Abu Dhabi" 
          role="img" 
        />
        <div className="about-hero-overlay" style={{ background: "linear-gradient(90deg, rgba(9,9,12,0.95) 0%, rgba(9,9,12,0.5) 100%)" }} />
        <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 5vw", position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "720px", textAlign: "left", background: "rgba(20, 21, 27, 0.4)", padding: "40px", borderRadius: "3px", borderLeft: "3px solid var(--gold)", backdropFilter: "blur(10px)" }}>
            <span 
              style={{ 
                textTransform: "uppercase", 
                letterSpacing: "0.14em", 
                fontSize: "12px", 
                color: "var(--gold)", 
                fontWeight: 600,
                display: "block",
                marginBottom: "16px"
              }}
            >
              Abu Dhabi, UAE
            </span>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.05", marginBottom: "28px", color: "#fff", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif" }}>
              About Xshore Equipment
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-dim)", margin: 0 }}>
              Xshore Equipment is an Abu Dhabi-based industrial company serving the oil &amp; gas, construction, and offshore sectors across the UAE. We provide certified rental equipment, DNV and ATEX certified container solutions, and welding consumables - operating from Mussafah Industrial Area with the capability to mobilise and deliver anywhere in the country.
            </p>
          </div>
        </div>
      </section>

      {/* Section: What We Do */}
      <section style={{ background: "var(--bg)", padding: "100px 5vw", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <h2 className="section-title">What We Do</h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "40px", borderRadius: "3px", transition: "transform 0.3s ease", boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}>
              <Settings style={{ color: "var(--gold)", width: "32px", height: "32px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "24px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px" }}>
                Equipment Rental
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                Equipment Rental is our core business. We supply industrial equipment on short-term hire from one week, or on long-term project contracts running months to years. Our rental fleet covers hydro testing equipment, air compressors, welding machines, high pressure washers, lifting gear, pneumatic tools, and electric equipment. For long-term contracts, we commission brand new equipment specifically for the project - not units coming off another site.
              </p>
            </div>

            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "40px", borderRadius: "3px", transition: "transform 0.3s ease", boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}>
              <Box style={{ color: "var(--gold)", width: "32px", height: "32px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "24px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px" }}>
                Container Fabrication
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                Container Fabrication covers DNV 2.7-1 certified offshore containers, ATEX Zone-2 explosion-protected enclosures, workshop containers, and custom structural fabrication. We have delivered 10+ certified units to offshore operators and ADNOC-contracted projects across the UAE and Middle East, managing the full process from specification to certified delivery.
              </p>
            </div>

            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "40px", borderRadius: "3px", transition: "transform 0.3s ease", boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}>
              <Layers style={{ color: "var(--gold)", width: "32px", height: "32px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "24px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px" }}>
                Industrial Trading
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                Industrial Trading supplies welding consumables and accessories directly to project sites. Electrodes, MIG and TIG wires, flux-cored wire, grinding discs, NDT tools, and welding accessories - sourced and delivered fast to contractors who need materials without the procurement overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How We Work */}
      <section style={{ background: "var(--bg2)", padding: "100px 5vw", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="about-split-grid" style={{ gap: "60px" }}>
            <div>
              <div className="gold-line" />
              <h2 className="section-title">How We Work</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "40px" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--gold)", background: "var(--bg)", border: "1px solid var(--border)", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", flexShrink: 0, marginTop: "4px" }}>01</div>
                  <p style={{ fontSize: "17px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                    We work directly with procurement managers and project engineers - not through layers of admin. When you contact Xshore, you speak to someone who understands what you need and can confirm availability, pricing, and delivery on the same call.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--gold)", background: "var(--bg)", border: "1px solid var(--border)", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", flexShrink: 0, marginTop: "4px" }}>02</div>
                  <p style={{ fontSize: "17px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                    For short-term hire, we turn around quotes and deliveries fast. For long-term projects, we build the rental contract around your project timeline - with brand new equipment commissioned on day one and maintained throughout.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--gold)", background: "var(--bg)", border: "1px solid var(--border)", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", flexShrink: 0, marginTop: "4px" }}>03</div>
                  <p style={{ fontSize: "17px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                    For container builds, we take your specification, scope the build, manage fabrication and quality control, coordinate third-party certification, and deliver to your yard or site. You get one point of contact from start to finish.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="about-split-img-wrap">
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "3px", background: "var(--gold)", zIndex: 1 }} />
                <img 
                  src="/images/Office%20Pictures%20Enhanced/xshore-office-interior-uae-01.webp" 
                  alt="Modern industrial design office interior of Xshore Equipment in Abu Dhabi"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Commitment */}
      <section style={{ background: "var(--bg)", padding: "100px 5vw", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="about-split-grid commitment-grid" style={{ gap: "60px" }}>
            <div className="order-2 md:order-1">
              <div className="about-split-img-wrap commitment-img">
                <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "3px", background: "var(--gold)", zIndex: 1 }} />
                <img 
                  src="/images/Office%20Pictures%20Enhanced/xshore-office-interior-uae-02.webp" 
                  alt="Professional project manager workspace at Xshore Equipment office in Mussafah"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="gold-line" />
              <ShieldCheck style={{ color: "var(--gold)", width: "36px", height: "36px", marginBottom: "16px" }} />
              <h2 className="section-title">Our Commitment</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }}>
                <p style={{ fontSize: "17px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                  We respond after hours. Not because it is a policy - because projects do not stop at 5pm and neither do we. Call or WhatsApp any time and you will reach someone on the team, ready to help. When something stops on a project site, every hour costs money. We understand that.
                </p>
                <p style={{ fontSize: "17px", color: "var(--text-dim)", lineHeight: "1.8", margin: 0 }}>
                  We do not inflate our fleet numbers or overstate our track record. What we can tell you is that the clients running multi-year projects with us today came back because the equipment arrived on time, worked, and stayed working. That is what we are built for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Location */}
      <section style={{ background: "var(--bg2)", padding: "100px 5vw", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="about-location-grid">
            <div>
              <div className="gold-line" />
              <h2 className="section-title">Our Location</h2>
              <p style={{ fontSize: "17px", color: "var(--text-dim)", lineHeight: "1.8", margin: "32px 0 40px" }}>
                Xshore Equipment is based in <strong>Mussafah Industrial Area, Abu Dhabi</strong> - the heart of the UAE's industrial and oil &amp; gas supply chain. From Mussafah, we supply and deliver across Abu Dhabi, Dubai, Sharjah, and all seven emirates. We also supply container and equipment solutions to projects across the wider Middle East region.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", padding: "40px", borderRadius: "3px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <MapPin style={{ color: "var(--gold)", width: "20px", height: "20px", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Office</div>
                    <div style={{ fontSize: "16px", color: "var(--text-dim)" }}>Mussafah Industrial Area, Abu Dhabi, UAE</div>
                  </div>
                </div>
                
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Mail style={{ color: "var(--gold)", width: "20px", height: "20px", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</div>
                    <div style={{ fontSize: "16px" }}><a href="mailto:sales@xshore.ae" style={{ color: "var(--gold)", textDecoration: "none" }}>sales@xshore.ae</a></div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Phone style={{ color: "var(--gold)", width: "20px", height: "20px", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Phone / WhatsApp</div>
                    <div style={{ fontSize: "16px" }}><a href="tel:+97122465375" style={{ color: "var(--gold)", textDecoration: "none" }}>+971 2 246 5375</a></div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Clock style={{ color: "var(--gold)", width: "20px", height: "20px", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Office Hours</div>
                    <div style={{ fontSize: "16px", color: "var(--text-dim)" }}>Sunday - Thursday, 8:00 AM - 6:00 PM</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Zap style={{ color: "var(--gold)", width: "20px", height: "20px", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>After Hours</div>
                    <div style={{ fontSize: "16px", color: "var(--text-dim)" }}>Call or WhatsApp - we respond.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-location-img-wrap">
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--gold)", zIndex: 1 }} />
              <img 
                src="/images/Office%20Pictures%20Enhanced/xshore-office-front-entrance-uae-01.webp" 
                alt="Front entrance of Xshore Equipment office in Mussafah Industrial Area, Abu Dhabi"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Work With Us (CTA) */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 5vw" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", background: "var(--bg3)", padding: "60px", borderRadius: "3px", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", boxShadow: "0 10px 50px rgba(0,0,0,0.3)" }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, textTransform: "uppercase", color: "var(--text)", marginBottom: "24px" }}>
            Work With Us
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-dim)", margin: "0 auto 40px", lineHeight: "1.8" }}>
            If you are putting together a project and need a supplier that is straightforward to work with - get in touch. We will come back to you the same day.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="mailto:sales@xshore.ae" className="btn-primary" style={{ flex: "1 1 200px", maxWidth: "250px", display: "inline-flex", justifyContent: "center", alignItems: "center", padding: "16px 24px", fontSize: "16px", textDecoration: "none" }}>
              Get a Quote
            </a>
            <a 
              href="https://wa.me/97122465375" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline" 
              style={{ flex: "1 1 200px", maxWidth: "250px", display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "10px", padding: "16px 24px", fontSize: "16px", textDecoration: "none" }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
          
          <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "15px", color: "var(--text-dim)" }}><span style={{ color: "var(--gold)", marginRight: "8px" }}>Email:</span> <a href="mailto:sales@xshore.ae" style={{ color: "inherit", textDecoration: "none" }}>sales@xshore.ae</a></div>
            <div style={{ fontSize: "15px", color: "var(--text-dim)" }}><span style={{ color: "var(--gold)", marginRight: "8px" }}>Phone:</span> <a href="tel:+97122465375" style={{ color: "inherit", textDecoration: "none" }}>+971 2 246 5375</a></div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}