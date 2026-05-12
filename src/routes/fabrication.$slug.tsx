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
    const title = loaderData?.cat?.title ?? "Fabrication";
    return {
      meta: [
        { title: `${title} UAE | Xshore Equipment` },
        { name: "description", content: `${title} from Xshore Equipment in Abu Dhabi, UAE. Contact us for fabrication, certification, availability, and quote details.` },
        { property: "og:title", content: `${title} UAE | Xshore Equipment` },
        { property: "og:description", content: `${title} from Xshore Equipment in Abu Dhabi, UAE.` },
        { property: "og:type", content: "website" },
        ...(loaderData?.cat?.hero ? [{ property: "og:image", content: loaderData.cat.hero }] : []),
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
  const related = fabricationCategories
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