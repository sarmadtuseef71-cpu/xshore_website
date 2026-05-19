import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFab } from "./WhatsAppFab";
import { Breadcrumb, type Crumb } from "./Breadcrumb";
import type { Category } from "@/data/catalog";

type Props = {
  category: Category;
  parent: { label: string; to: string };
  related: { title: string; to: string; img: string; alt: string }[];
  rentalCtaLabel?: string;
};

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="gal-cell">
      <img src={src} alt={alt} loading="lazy" onError={() => setHidden(true)} />
    </div>
  );
}

export function DetailPage({ category, parent, related, rentalCtaLabel = "Need this equipment for your site?" }: Props) {
  const crumbs: Crumb[] = [
    { label: "Home", to: "/" },
    { label: parent.label, to: parent.to },
    { label: category.title },
  ];

  return (
    <>
      <SiteNav />

      <section className="detail-hero">
        <div className="detail-hero-bg" style={{ backgroundImage: `url('${category.hero}')` }} aria-label={category.heroAlt} role="img" />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <span className="hero-tag">{parent.label}</span>
          <h1>{category.detailH1 || category.title}</h1>
          <p className="er-hero-sub">{category.heroSubtitle || category.body}</p>
          <div className="hero-actions" style={{ marginBottom: 0 }}>
            <Link to="/contact" className="btn-primary">{category.ctaText || "Request Quote"}</Link>
            <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <div className="bc-bar">
        <Breadcrumb items={crumbs} />
      </div>

      <section className="overview">
        <div className="gold-line" />
        <span className="section-tag">Overview</span>
        <h2 className="section-title">{category.title}</h2>
        <p className="overview-body">{category.overviewCopy || category.body}</p>
        {category.imageNote && <p className="overview-note">{category.imageNote}</p>}

        {category.bulletItems && category.bulletItems.length > 0 && (
          <div className="spec-section" style={{ marginTop: 48 }}>
            <h3 style={{ fontSize: 18, marginBottom: 20 }}>{category.bulletSectionTitle || "Key Capabilities"}</h3>
            <div className="spec-list">
              {category.bulletItems.map((item, i) => (
                <div key={i} className="spec-item">
                  <div className="spec-dot" />
                  <span className="spec-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {category.gallery.length >= 1 && (
        <section className="gallery">
          <div className="gold-line" />
          <span className="section-tag">Gallery</span>
          <h2 className="section-title" style={{ marginBottom: 32 }}>Equipment in the Field</h2>
          <div className="gal-grid">
            {category.gallery.map((g) => (
              <GalleryImage key={g.src} src={g.src} alt={g.alt} />
            ))}
          </div>
        </section>
      )}

      <section className="rental-cta">
        <div className="rc-inner">
          <span className="section-tag">Get a Quote</span>
          <h2 className="section-title">{rentalCtaLabel}</h2>
          <p className="section-sub" style={{ margin: "0 auto 32px" }}>
            Send us your requirement, location, and rental duration. We will respond with availability and quote details.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">{category.ctaText || "Request a Quote"}</Link>
            <a href="https://wa.me/97122465375" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp +971 2 246 5375</a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="rental" aria-label="Related categories">
          <div className="gold-line" />
          <span className="section-tag">Related</span>
          <h2 className="section-title">More From {parent.label}</h2>
          <div className="eq-grid" style={{ gridTemplateColumns: `repeat(${Math.min(related.length, 4)}, 1fr)` }}>
            {related.map((r) => (
              <Link to={r.to} key={r.to} className="eq-card">
                <img className="eq-card-img" src={r.img} alt={r.alt} loading="lazy" />
                <div className="eq-card-body">
                  <div className="eq-dot" />
                  <h4>{r.title}</h4>
                  <span className="eq-badge">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}