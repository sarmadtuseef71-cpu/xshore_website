import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/DetailPage";
import { tradingCategories, findTrading } from "@/data/catalog";

export const Route = createFileRoute("/trading/$slug")({
  component: TradingDetail,
  loader: ({ params }) => {
    const cat = findTrading(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.cat;
    const title = cat?.seoTitle ?? `${cat?.title ?? "Trading"} UAE | Xshore Equipment`;
    const description = cat?.seoDescription ?? `${cat?.title ?? "Trading"} from Xshore Equipment in Abu Dhabi, UAE. Contact us for supply, availability, and quote details.`;

    return {
      meta: [
        { title: title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        ...(cat?.hero ? [{ property: "og:image", content: cat.hero }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div style={{ textAlign: "center" }}>
        <h1>Product line not found</h1>
        <p style={{ marginTop: 12 }}><a href="/trading" style={{ color: "var(--gold)" }}>← Industrial Trading</a></p>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div style={{ textAlign: "center" }}>
        <h1>Something went wrong</h1>
        <p style={{ marginTop: 12 }}>{error.message}</p>
        <button onClick={reset} style={{ marginTop: 16 }}>Retry</button>
      </div>
    </div>
  ),
});

function TradingDetail() {
  const { cat } = Route.useLoaderData();
  
  const related = cat.relatedPages 
    ? cat.relatedPages.map(slug => {
        // Trading might relate to trading, but also potentially others.
        // For simplicity and following current pattern, we search tradingCategories first.
        const rCat = findTrading(slug);
        return rCat ? { title: rCat.title, to: `/trading/${rCat.slug}`, img: rCat.hero, alt: rCat.heroAlt } : null;
      }).filter(Boolean) as any[]
    : tradingCategories
        .filter((c) => c.slug !== cat.slug)
        .slice(0, 4)
        .map((c) => ({ title: c.title, to: `/trading/${c.slug}`, img: c.hero, alt: c.heroAlt }));

  return (
    <DetailPage
      category={cat}
      parent={{ label: "Industrial Trading", to: "/trading" }}
      related={related}
      rentalCtaLabel="Need to source this for your project?"
    />
  );
}