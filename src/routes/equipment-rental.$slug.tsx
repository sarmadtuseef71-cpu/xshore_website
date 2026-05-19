import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/DetailPage";
import { rentalCategories, findRental } from "@/data/catalog";

export const Route = createFileRoute("/equipment-rental/$slug")({
  component: RentalDetail,
  loader: ({ params }) => {
    const cat = findRental(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.cat;
    const title = cat?.seoTitle ?? `${cat?.title ?? "Equipment Rental"} UAE | Xshore Equipment`;
    const description = cat?.seoDescription ?? `${cat?.title ?? "Equipment Rental"} available from Xshore Equipment in Abu Dhabi, UAE. Contact us for rental, supply, availability, and quote details.`;

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
        <h1>Category not found</h1>
        <p style={{ marginTop: 12 }}><a href="/equipment-rental" style={{ color: "var(--gold)" }}>← All Equipment Rental</a></p>
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

function RentalDetail() {
  const { cat } = Route.useLoaderData();
  
  const related = cat.relatedPages 
    ? cat.relatedPages.map(slug => {
        const rCat = findRental(slug);
        return rCat ? { title: rCat.title, to: `/equipment-rental/${rCat.slug}`, img: rCat.hero, alt: rCat.heroAlt } : null;
      }).filter(Boolean) as any[]
    : rentalCategories
        .filter((c) => c.slug !== cat.slug)
        .slice(0, 4)
        .map((c) => ({ title: c.title, to: `/equipment-rental/${c.slug}`, img: c.hero, alt: c.heroAlt }));

  return (
    <DetailPage
      category={cat}
      parent={{ label: "Equipment Rental", to: "/equipment-rental" }}
      related={related}
    />
  );
}