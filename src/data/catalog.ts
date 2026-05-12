// Central catalog of all category data, with image filenames per the image guide.
// Missing files render with onError={hide} in the gallery component.

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  badge?: string;
  body: string;
  hero: string; // path under /images/<area>/
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  imageNote?: string;
};

const r = (f: string) => `/images/rental/${f}`;
const f = (file: string) => `/images/fabrication/${file}`;

export const rentalCategories: Category[] = [
  {
    slug: "hydro-testing-equipment",
    title: "Hydro Testing Equipment",
    shortTitle: "Hydro Testing Equipment",
    badge: "High Pressure",
    body: "High-pressure hydrostatic test units for pipeline testing, pressure vessel inspection, and structural integrity verification. Our most-requested product — available for short and long-term hire across the UAE.",
    hero: r("xshore-hydro-testing-equipment-rental-uae-04.jpg"),
    heroAlt: "High pressure hydrostatic test equipment rental UAE",
    gallery: [
      "xshore-hydro-testing-equipment-rental-uae-03.jpg",
      "xshore-hydro-testing-equipment-rental-uae-06.jpg",
      "xshore-hydro-testing-equipment-rental-uae-01.jpg",
      "xshore-hydro-testing-equipment-rental-uae-02.jpg",
      "xshore-hydro-testing-equipment-rental-uae-05.jpg",
      "xshore-hydro-testing-equipment-rental-uae-07.jpg",
      "xshore-hydro-testing-equipment-rental-uae-08.jpg",
      "xshore-hydro-testing-equipment-rental-uae-09.jpg",
    ].map((file) => ({ src: r(file), alt: "Hydro testing equipment rental UAE — pipeline pressure vessel testing" })),
  },
  {
    slug: "air-compressors",
    title: "Air Compressors",
    shortTitle: "Air Compressors",
    badge: "Diesel / Electric",
    body: "185 to 1600 CFM diesel and electric air compressors for all site conditions. Available in multiple configurations for offshore, construction, and industrial applications.",
    hero: r("xshore-air-compressor-rental-uae-01.jpg"),
    heroAlt: "Industrial air compressor rental UAE diesel electric",
    gallery: [],
    imageNote: "Additional air compressor images available on request.",
  },
  {
    slug: "electric-welding-machines",
    title: "Electric Welding Machines",
    shortTitle: "Electric Welding Machines",
    badge: "MMA / MIG / TIG",
    body: "MMA, MIG, TIG, and submerged arc welding machines for all industrial welding requirements. Available for weekly hire or long-term project deployment.",
    hero: r("xshore-welding-machine-rental-uae-05.jpg"),
    heroAlt: "MIG TIG MMA welding machine rental UAE",
    gallery: [
      "xshore-welding-machine-rental-uae-02.jpg",
      "xshore-welding-machine-rental-uae-01.jpg",
      "xshore-welding-machine-rental-uae-03.jpg",
      "xshore-welding-machine-rental-uae-04.jpg",
      "xshore-welding-machine-rental-uae-06.jpg",
      "xshore-welding-machine-rental-uae-07.jpg",
    ].map((file) => ({ src: r(file), alt: "Electric welding machine rental UAE — MMA MIG TIG industrial" })),
  },
  {
    slug: "high-pressure-washers",
    title: "High Pressure Washers",
    shortTitle: "High Pressure Washers",
    badge: "Cold & Hot Water",
    body: "Cold and hot water industrial pressure washers for surface preparation, cleaning, and maintenance. Suitable for offshore, construction, and plant environments.",
    hero: r("xshore-high-pressure-washer-rental-uae-03.jpg"),
    heroAlt: "Industrial high pressure washer rental UAE cold hot",
    gallery: [
      "xshore-high-pressure-washer-rental-uae-04.jpg",
      "xshore-high-pressure-washer-rental-uae-02.jpg",
      "xshore-high-pressure-washer-rental-uae-01.jpg",
      "xshore-high-pressure-washer-rental-uae-05.jpg",
    ].map((file) => ({ src: r(file), alt: "High pressure washer rental UAE — industrial cold hot water cleaning" })),
  },
  {
    slug: "mobile-gantry-lifting-gear",
    title: "Mobile Gantry & Lifting Gear",
    shortTitle: "Mobile Gantry & Lifting Gear",
    badge: "SWL Certified",
    body: "Gantry cranes, chain blocks, lever hoists, wire rope slings, and rigging accessories — all SWL certified and inspection-ready for safe lifting operations.",
    hero: r("xshore-mobile-gantry-lifting-gear-uae-01.jpg"),
    heroAlt: "Mobile gantry crane lifting gear rental UAE",
    gallery: [
      "xshore-mobile-gantry-lifting-gear-uae-02.jpg",
      "xshore-mobile-gantry-lifting-gear-uae-03.jpg",
      "xshore-mobile-gantry-lifting-gear-uae-04.jpg",
      "xshore-mobile-gantry-lifting-gear-uae-05.jpg",
      "xshore-mobile-gantry-lifting-gear-uae-06.jpg",
      "xshore-mobile-gantry-lifting-gear-uae-07.jpg",
    ].map((file) => ({ src: r(file), alt: "Mobile gantry crane lifting equipment rental UAE — SWL certified" })),
  },
  {
    slug: "pneumatic-equipment",
    title: "Pneumatic Equipment",
    shortTitle: "Pneumatic Equipment",
    badge: "Air-Powered",
    body: "Air-powered tools for drilling, grinding, scaling, chipping, and impact work. Suitable for offshore and onshore industrial applications.",
    hero: r("xshore-pneumatic-equipment-rental-uae-16.jpg"),
    heroAlt: "Pneumatic air powered equipment rental UAE",
    gallery: [
      "xshore-pneumatic-equipment-rental-uae-04.jpg",
      "xshore-pneumatic-equipment-rental-uae-17.jpg",
      "xshore-pneumatic-equipment-rental-uae-23.jpg",
      "xshore-pneumatic-equipment-rental-uae-01.jpg",
      "xshore-pneumatic-equipment-rental-uae-05.jpg",
      "xshore-pneumatic-equipment-rental-uae-06.jpg",
      "xshore-pneumatic-equipment-rental-uae-11.jpg",
      "xshore-pneumatic-equipment-rental-uae-15.jpg",
      "xshore-pneumatic-equipment-rental-uae-20.jpg",
      "xshore-pneumatic-equipment-rental-uae-10.jpg",
      "xshore-pneumatic-equipment-rental-uae-07.jpg",
    ].map((file) => ({ src: r(file), alt: "Pneumatic air-powered tool rental UAE — offshore industrial" })),
  },
  {
    slug: "electric-equipment-tools",
    title: "Electric Equipment & Tools",
    shortTitle: "Electric Equipment & Tools",
    badge: "110V / 220V",
    body: "Angle grinders, core drills, portable power tools, and electrical equipment in 110V and 220V configurations for site use.",
    hero: r("xshore-electric-equipment-rental-uae-10.jpg"),
    heroAlt: "Electric power tools equipment rental UAE 110V 220V",
    gallery: [
      "xshore-electric-equipment-rental-uae-05.jpg",
      "xshore-electric-equipment-rental-uae-04.jpg",
      "xshore-electric-equipment-rental-uae-09.jpg",
      "xshore-electric-equipment-rental-uae-02.jpg",
      "xshore-electric-equipment-rental-uae-08.jpg",
      "xshore-electric-equipment-rental-uae-03.jpg",
      "xshore-electric-equipment-rental-uae-01.jpg",
    ].map((file) => ({ src: r(file), alt: "Electric power tool rental UAE — angle grinder core drill site equipment" })),
  },
  {
    slug: "other-equipment",
    title: "Other Equipment",
    shortTitle: "Other Equipment",
    badge: "On Request",
    body: "Gas cutting sets, gas detectors, generators, dehumidifiers, lighting towers, and specialist equipment. Contact us with specific requirements.",
    hero: r("xshore-other-equipment-rental-uae-03.jpg"),
    heroAlt: "Gas cutting machine multi gas detector rental UAE",
    gallery: [
      "xshore-other-equipment-rental-uae-02.jpg",
      "xshore-other-equipment-rental-uae-01.jpg",
    ].map((file) => ({ src: r(file), alt: "Specialist equipment rental UAE — gas cutting set, gas detector" })),
    imageNote: "Generators, dehumidifiers, and lighting towers available on request.",
  },
];

export const fabricationCategories: Category[] = [
  {
    slug: "dnv-2-7-1-offshore-containers",
    title: "DNV 2.7-1 Offshore Containers",
    shortTitle: "DNV 2.7-1 Containers",
    badge: "DNV 2.7-1 / EN12079",
    body: "Cargo-carrying units fabricated to DNV 2.7-1 / EN12079 standards for offshore lifting. Fully certified with third-party verification and built to handle the demands of offshore deployment.",
    hero: f("xshore-dnv-offshore-container-uae-07.jpg"),
    heroAlt: "DNV 2.7-1 certified offshore container fabrication UAE",
    gallery: [
      "xshore-dnv-offshore-container-uae-09.jpg",
      "xshore-dnv-offshore-container-uae-11.jpg",
      "xshore-dnv-offshore-container-uae-08.jpg",
      "xshore-dnv-offshore-container-uae-04.jpg",
      "xshore-dnv-offshore-container-uae-03.jpg",
      "xshore-dnv-offshore-container-uae-10.jpg",
      "xshore-dnv-offshore-container-uae-01.jpg",
      "xshore-dnv-offshore-container-uae-02.jpg",
      "xshore-dnv-offshore-container-uae-06.jpg",
      "xshore-dnv-offshore-container-uae-05.jpg",
    ].map((file) => ({ src: f(file), alt: "DNV 2.7-1 offshore container fabrication UAE — certified offshore lifting unit" })),
  },
  {
    slug: "zone-2-atex-enclosures",
    title: "Zone-2 / ATEX Enclosures",
    shortTitle: "Zone-2 / ATEX",
    badge: "ATEX Zone-2",
    body: "Explosion-protected containers and enclosures certified for Zone-2 hazardous areas. Built for offshore platforms, petrochemical plants, and refinery environments.",
    hero: f("xshore-zone2-atex-container-uae-05.jpg"),
    heroAlt: "ATEX Zone-2 explosion proof container UAE",
    gallery: [
      "xshore-zone2-atex-container-uae-11.jpg",
      "xshore-zone2-atex-container-uae-03.jpg",
      "xshore-zone2-atex-container-uae-04.jpg",
      "xshore-zone2-atex-container-uae-06.jpg",
      "xshore-zone2-atex-container-uae-10.jpg",
      "xshore-zone2-atex-container-uae-07.jpg",
      "xshore-zone2-atex-container-uae-08.jpg",
    ].map((file) => ({ src: f(file), alt: "ATEX Zone-2 hazardous area container UAE — explosion proof enclosure" })),
  },
  {
    slug: "workshop-containers",
    title: "Workshop Containers",
    shortTitle: "Workshop Containers",
    badge: "Custom Fitted",
    body: "Custom-fitted workshop units with workbenches, storage, tooling, and ventilation for remote site deployment. Built to client specification for offshore and onshore projects.",
    hero: f("xshore-workshop-container-uae-01.jpg"),
    heroAlt: "Custom workshop container offshore UAE",
    gallery: [
      "xshore-workshop-container-uae-03.jpg",
      "xshore-workshop-container-uae-02.jpg",
      "xshore-workshop-container-uae-04.jpg",
      "xshore-workshop-container-uae-05.jpg",
    ].map((file) => ({ src: f(file), alt: "Workshop container fabrication UAE — site workshop unit" })),
  },
  {
    slug: "accommodation-office-units",
    title: "Accommodation & Office Units",
    shortTitle: "Accommodation & Office",
    badge: "Modular Build",
    body: "Modular containerised accommodation and site office units built for rapid deployment in remote project locations. Fitted to client requirements.",
    hero: f("xshore-dnv-offshore-container-uae-07.jpg"),
    heroAlt: "Containerised accommodation and site office unit UAE",
    gallery: [],
    imageNote: "Project images for accommodation and office units coming soon. Reference images shown.",
  },
  {
    slug: "custom-fabrication",
    title: "Custom Fabrication",
    shortTitle: "Custom Fabrication",
    badge: "To Spec",
    body: "Bespoke structural steel fabrication, skid units, and custom builds delivered to client drawings and specifications. From concept to certified delivery, managed in-house.",
    hero: f("xshore-dnv-offshore-container-uae-03.jpg"),
    heroAlt: "Custom industrial fabrication UAE — structural steel skid units",
    gallery: [],
    imageNote: "Custom fabrication project images coming soon.",
  },
];

export const tradingCategories: Category[] = [
  {
    slug: "welding-consumables",
    title: "Welding Consumables",
    shortTitle: "Welding Consumables",
    badge: "All Processes",
    body: "Full range of welding consumables for all welding processes. Stocked for fast delivery to project sites across the UAE — from MMA electrodes and MIG wires to TIG rods and exotic alloys.",
    hero: "https://images.unsplash.com/photo-1730584476141-232435a40c32?w=1600&h=900&fit=crop&q=80",
    heroAlt: "Welding consumables supply UAE — electrodes wire rods",
    gallery: [],
    imageNote: "Welding consumables product images coming soon.",
  },
  {
    slug: "welding-accessories-tools",
    title: "Welding Accessories & Tools",
    shortTitle: "Welding Accessories & Tools",
    badge: "Project Supply",
    body: "All the supporting accessories and tools needed for welding operations, surface preparation, and quality control — from grinders and cutting discs to clamps, jigs, and inspection tools.",
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop&q=80",
    heroAlt: "Welding accessories and tools supply UAE",
    gallery: [],
    imageNote: "Welding accessories product images coming soon.",
  },
  {
    slug: "ppe-safety-equipment",
    title: "PPE & Safety Equipment",
    shortTitle: "PPE & Safety Equipment",
    badge: "Available on Request",
    body: "Personal protective equipment for oil & gas, construction, and industrial environments — available on request. Helmets, harnesses, breathing apparatus, footwear, and gas detection.",
    hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=900&fit=crop&q=80",
    heroAlt: "PPE and safety equipment supply UAE",
    gallery: [],
    imageNote: "PPE product images coming soon.",
  },
];

export function findRental(slug: string) { return rentalCategories.find((c) => c.slug === slug); }
export function findFabrication(slug: string) { return fabricationCategories.find((c) => c.slug === slug); }
export function findTrading(slug: string) { return tradingCategories.find((c) => c.slug === slug); }