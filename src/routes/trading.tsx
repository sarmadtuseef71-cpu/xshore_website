import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { tradingCategories } from "@/data/catalog";

export const Route = createFileRoute("/trading")({
  component: TradingIndex,
  head: () => ({
    meta: [
      { title: "Industrial Trading UAE | Welding Consumables & PPE Supply — Xshore" },
      { name: "description", content: "Welding consumables, welding accessories & tools and PPE supply across the UAE. Fast sourcing for major contractors from our Abu Dhabi base." },
      { property: "og:title", content: "Industrial Trading UAE — Xshore" },
      { property: "og:description", content: "Welding consumables, accessories and PPE supply for UAE projects." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function TradingIndex() {
  return (
    <>
      <SiteNav />

      <section className="er-hero">
        <div className="er-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1730584476141-232435a40c32?w=1800&h=1000&fit=crop&q=80')" }} />
        <div className="er-hero-overlay" />
        <div className="er-hero-content">
          <span className="hero-tag">Division 03 · Trading</span>
          <h1>Industrial <em>Trading</em></h1>
          <p className="er-hero-sub">Welding consumables, accessories, tools and PPE — sourced and supplied for project teams and major contractors across the UAE. Fast turnaround from our Mussafah base.</p>
        </div>
      </section>

      <section className="trading">
        <div className="gold-line" />
        <span className="section-tag">Product Lines</span>
        <h2 className="section-title">What We Supply</h2>
        <p className="section-sub">Stocked product lines and on-request supply for industrial, oil &amp; gas and construction projects.</p>
        <div className="trade-grid">
          {tradingCategories.map((c) => (
            <Link to={`/trading/${c.slug}`} key={c.slug} className="trade-card">
              <img className="trade-card-img" src={c.hero} alt={c.heroAlt} loading="lazy" />
              <div className="trade-card-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="eq-badge">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}