import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/DetailPage";
import { fabricationCategories, findFabrication } from "@/data/catalog";

export const Route = createFileRoute("/fabrication/$slug")({
  component: FabricationDetail,
  loader: ({ params }) => {
    const cat = findFabrication(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.cat;
    const title = cat?.seoTitle ?? `${cat?.title ?? "Fabrication"} UAE | Xshore Equipment`;
    const description = cat?.seoDescription ?? `${cat?.title ?? "Fabrication"} from Xshore Equipment in Abu Dhabi, UAE. Contact us for fabrication, certification, availability, and quote details.`;

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
        <h1>Capability not found</h1>
        <p style={{ marginTop: 12 }}><a href="/fabrication" style={{ color: "var(--gold)" }}>← Fabrication & Containers</a></p>
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

function FabricationDetail() {
  const { cat } = Route.useLoaderData();
  
  const related = cat.relatedPages 
    ? cat.relatedPages.map(slug => {
        const rCat = findFabrication(slug);
        return rCat ? { title: rCat.title, to: `/fabrication/${rCat.slug}`, img: rCat.hero, alt: rCat.heroAlt } : null;
      }).filter(Boolean) as any[]
    : fabricationCategories
        .filter((c) => c.slug !== cat.slug)
        .slice(0, 4)
        .map((c) => ({ title: c.title, to: `/fabrication/${c.slug}`, img: c.hero, alt: c.heroAlt }));

  return (
    <DetailPage
      category={cat}
      parent={{ label: "Fabrication & Containers", to: "/fabrication" }}
      related={related}
      rentalCtaLabel="Need a custom build for your project?"
    />
  );
}