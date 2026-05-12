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
    const title = loaderData?.cat?.title ?? "Trading";
    return {
      meta: [
        { title: `${title} UAE | Xshore Equipment` },
        { name: "description", content: `${title} from Xshore Equipment in Abu Dhabi, UAE. Contact us for supply, availability, and quote details.` },
        { property: "og:title", content: `${title} UAE | Xshore Equipment` },
        { property: "og:description", content: `${title} from Xshore Equipment in Abu Dhabi, UAE.` },
        { property: "og:type", content: "website" },
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
  const related = tradingCategories
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