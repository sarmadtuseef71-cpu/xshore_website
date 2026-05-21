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
  // Phase 1: Structured Detail Content
  detailH1?: string;
  seoTitle?: string;
  seoDescription?: string;
  heroSubtitle?: string;
  overviewCopy?: string;
  bulletSectionTitle?: string;
  bulletItems?: string[];
  ctaText?: string;
  relatedPages?: string[];
};

export const imageAltText: Record<string, string> = {
  // Rental - Air Compressors
  "xshore-air-compressor-rental-uae-01.webp": "Industrial air compressor rental UAE diesel electric",
  
  // Rental - Hydro Testing
  "xshore-hydro-testing-equipment-rental-uae-04.webp": "High pressure hydrostatic test equipment rental UAE",
  "xshore-hydro-testing-equipment-rental-uae-03.webp": "Hydrostatic test pump pipeline testing UAE",
  "xshore-hydro-testing-equipment-rental-uae-06.webp": "Hydro test unit pressure vessel inspection UAE",
  "xshore-hydro-testing-equipment-rental-uae-01.webp": "Xshore hydro testing equipment Abu Dhabi",
  "xshore-hydro-testing-equipment-rental-uae-02.webp": "Pressure test pump UAE rental",
  "xshore-hydro-testing-equipment-rental-uae-05.webp": "Hydrostatic testing equipment UAE",
  "xshore-hydro-testing-equipment-rental-uae-07.webp": "Pipeline pressure testing equipment UAE",
  "xshore-hydro-testing-equipment-rental-uae-08.webp": "Hydro test manifold UAE",
  "xshore-hydro-testing-equipment-rental-uae-09.webp": "Hydrostatic pump rental Abu Dhabi",

  // Rental - Lifting Gear
  "xshore-mobile-gantry-lifting-gear-uae-01.webp": "Mobile gantry crane lifting gear rental UAE",
  "xshore-mobile-gantry-lifting-gear-uae-02.webp": "Chain block lever hoist rental Abu Dhabi",
  "xshore-mobile-gantry-lifting-gear-uae-03.webp": "SWL certified lifting equipment UAE rental",
  "xshore-mobile-gantry-lifting-gear-uae-04.webp": "Rigging accessories slings shackles UAE",
  "xshore-mobile-gantry-lifting-gear-uae-05.webp": "Lifting gear oil gas UAE",
  "xshore-mobile-gantry-lifting-gear-uae-06.webp": "Mobile gantry Abu Dhabi Mussafah",
  "xshore-mobile-gantry-lifting-gear-uae-07.webp": "Industrial lifting equipment UAE",

  // Rental - Welding Machines
  "xshore-welding-machine-rental-uae-05.webp": "MIG TIG MMA welding machine rental UAE",
  "xshore-welding-machine-rental-uae-02.webp": "Electric welding machine hire Abu Dhabi",
  "xshore-welding-machine-rental-uae-01.webp": "Industrial welding set rental UAE",
  "xshore-welding-machine-rental-uae-03.webp": "MMA welding equipment UAE oil gas",
  "xshore-welding-machine-rental-uae-04.webp": "Submerged arc welding machine UAE",
  "xshore-welding-machine-rental-uae-06.webp": "TIG welding machine rental UAE",
  "xshore-welding-machine-rental-uae-07.webp": "Welding equipment supplier Mussafah",

  // Rental - Pressure Washers
  "xshore-high-pressure-washer-rental-uae-03.webp": "Industrial high pressure washer rental UAE cold hot",
  "xshore-high-pressure-washer-rental-uae-04.webp": "Hot water pressure washer industrial UAE",
  "xshore-high-pressure-washer-rental-uae-02.webp": "Cold water pressure washer rental Abu Dhabi",
  "xshore-high-pressure-washer-rental-uae-01.webp": "High pressure cleaning equipment UAE",
  "xshore-high-pressure-washer-rental-uae-05.webp": "Surface prep pressure washer rental UAE",

  // Rental - Pneumatic
  "xshore-pneumatic-equipment-rental-uae-16.webp": "Pneumatic air powered equipment rental UAE",
  "xshore-pneumatic-equipment-rental-uae-04.webp": "Air impact wrench grinder rental UAE",
  "xshore-pneumatic-equipment-rental-uae-17.webp": "Pneumatic drill hammer rental Abu Dhabi",
  "xshore-pneumatic-equipment-rental-uae-23.webp": "Air powered tools oil gas UAE",
  "xshore-pneumatic-equipment-rental-uae-01.webp": "Pneumatic grinder chipping tool UAE",
  "xshore-pneumatic-equipment-rental-uae-05.webp": "Air tools industrial rental UAE",
  "xshore-pneumatic-equipment-rental-uae-06.webp": "Pneumatic equipment Mussafah Abu Dhabi",
  "xshore-pneumatic-equipment-rental-uae-11.webp": "Air powered impact tool rental UAE",
  "xshore-pneumatic-equipment-rental-uae-15.webp": "Pneumatic scaling tool UAE rental",
  "xshore-pneumatic-equipment-rental-uae-20.webp": "Industrial air tool UAE oil field",
  "xshore-pneumatic-equipment-rental-uae-10.webp": "Pneumatic equipment hire UAE",
  "xshore-pneumatic-equipment-rental-uae-07.webp": "Air driven tool rental UAE",

  // Rental - Electric Tools
  "xshore-electric-equipment-rental-uae-10.webp": "Electric power tools equipment rental UAE 110V 220V",
  "xshore-electric-equipment-rental-uae-05.webp": "Angle grinder drill rental UAE industrial",
  "xshore-electric-equipment-rental-uae-04.webp": "Portable electric tools UAE oil gas",
  "xshore-electric-equipment-rental-uae-09.webp": "Electric equipment hire Abu Dhabi",
  "xshore-electric-equipment-rental-uae-02.webp": "Power tools rental UAE construction",
  "xshore-electric-equipment-rental-uae-08.webp": "110V 220V tools rental UAE",
  "xshore-electric-equipment-rental-uae-03.webp": "Industrial electric tools Mussafah UAE",
  "xshore-electric-equipment-rental-uae-01.webp": "Electric equipment rental Abu Dhabi",

  // Rental - Other
  "xshore-other-equipment-rental-uae-03.webp": "Gas cutting machine multi gas detector rental UAE",
  "xshore-other-equipment-rental-uae-02.webp": "Industrial gas cutting equipment UAE",
  "xshore-other-equipment-rental-uae-01.webp": "Multi gas detector rental Abu Dhabi UAE",

  // Fabrication - DNV Containers
  "xshore-dnv-offshore-container-uae-07.webp": "DNV 2.7-1 certified offshore container fabrication UAE",
  "xshore-dnv-offshore-container-uae-09.webp": "DNV offshore CCU container Abu Dhabi",
  "xshore-dnv-offshore-container-uae-11.webp": "DNV certified cargo container UAE",
  "xshore-dnv-offshore-container-uae-08.webp": "Offshore container fabricator UAE Abu Dhabi",
  "xshore-dnv-offshore-container-uae-04.webp": "20ft DNV container UAE Mussafah",
  "xshore-dnv-offshore-container-uae-03.webp": "DNV 2.7-1 EN12079 container UAE",
  "xshore-dnv-offshore-container-uae-10.webp": "Certified offshore lifting container UAE",
  "xshore-dnv-offshore-container-uae-01.webp": "DNV container manufacturer Abu Dhabi",
  "xshore-dnv-offshore-container-uae-02.webp": "Xshore DNV container fabrication",
  "xshore-dnv-offshore-container-uae-06.webp": "Offshore cargo unit UAE",
  "xshore-dnv-offshore-container-uae-05.webp": "DNV container Mussafah UAE",

  // Fabrication - Zone-2
  "xshore-zone2-atex-container-uae-05.webp": "ATEX Zone-2 explosion proof container UAE",
  "xshore-zone2-atex-container-uae-11.webp": "Zone-2 certified enclosure UAE offshore",
  "xshore-zone2-atex-container-uae-03.webp": "ATEX IECEx container Abu Dhabi fabrication",
  "xshore-zone2-atex-container-uae-04.webp": "Zone-2 hazardous area container UAE",
  "xshore-zone2-atex-container-uae-06.webp": "Explosion proof enclosure UAE oil gas",
  "xshore-zone2-atex-container-uae-10.webp": "ATEX Zone-2 container Mussafah UAE",
  "xshore-zone2-atex-container-uae-07.webp": "Zone 2 certified container UAE",
  "xshore-zone2-atex-container-uae-08.webp": "Hazardous area container fabrication UAE",

  // Fabrication - Workshop
  "xshore-workshop-container-uae-01.webp": "Custom workshop container offshore UAE",
  "xshore-workshop-container-uae-03.webp": "Workshop container remote site UAE",
  "xshore-workshop-container-uae-02.webp": "Fitted workshop unit Abu Dhabi fabrication",
  "xshore-workshop-container-uae-04.webp": "Workshop tool store container UAE",
  "xshore-workshop-container-uae-05.webp": "Offshore workshop container Mussafah",
};

export const getAlt = (file: string, fallback: string) => {
  const filename = file.split('/').pop() || "";
  const jpgKey = filename.replace(/\.(webp|jpeg)$/i, '.jpg');
  return imageAltText[filename] || imageAltText[jpgKey] || fallback;
};

const r = (f: string) => `/images/rental/${f}`;
const f = (file: string) => `/images/fabrication/${file}`;

export const rentalCategories: Category[] = [
  {
    slug: "hydro-testing-equipment",
    title: "Hydro Testing Equipment",
    shortTitle: "Hydro Testing Equipment",
    badge: "High Pressure",
    body: "High-pressure hydrostatic test units for pipeline testing, pressure vessel inspection, and structural integrity verification. Our most-requested product - available for short and long-term hire across the UAE.",
    hero: r("hydro-testing/xshore-hydro-testing-equipment-rental-uae-04.webp"),
    heroAlt: "High pressure hydrostatic test equipment rental UAE",
    gallery: [
      "xshore-hydro-testing-equipment-rental-uae-01.webp",
      "xshore-hydro-testing-equipment-rental-uae-02.webp",
      "xshore-hydro-testing-equipment-rental-uae-03.webp",
      "xshore-hydro-testing-equipment-rental-uae-04.webp",
      "xshore-hydro-testing-equipment-rental-uae-05.webp",
      "xshore-hydro-testing-equipment-rental-uae-06.webp",
      "xshore-hydro-testing-equipment-rental-uae-07.webp",
      "xshore-hydro-testing-equipment-rental-uae-08.webp",
      "xshore-hydro-testing-equipment-rental-uae-09.webp",
    ].map((file) => ({ src: r(`hydro-testing/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - hydro testing equipment") })),
    detailH1: "Hydro Testing Equipment Rental & Supply UAE",
    seoTitle: "Hydro Testing Equipment Rental UAE | Hydrostatic Test Pumps - Xshore",
    seoDescription: "Pipeline integrity, pressure vessel inspection, and structural testing units available for weekly hire or long-term project rental across the UAE. Abu Dhabi.",
    heroSubtitle: "Pipeline integrity, pressure vessel inspection, structural testing | if it needs a hydrostatic test, we have the unit for it. Available for weekly hire or long-term project rental.",
    overviewCopy: "Hydro testing is our most-requested equipment service. Our units are designed for high-pressure hydrostatic testing of pipelines, vessels, and structural components. Maintained, calibrated, and ready for mobilization across the UAE.",
    bulletSectionTitle: "Key Capabilities",
    bulletItems: [
      "High-pressure hydrostatic test units",
      "Pipeline integrity and leak testing",
      "Pressure vessel inspection and certification",
      "Structural integrity verification",
      "Available for weekly or multi-year hire"
    ],
    ctaText: "Request a Unit →",
    relatedPages: ["air-compressors", "high-pressure-washers", "pneumatic-equipment"]
  },
  {
    slug: "air-compressors",
    title: "Air Compressors",
    shortTitle: "Air Compressors",
    badge: "Diesel / Electric",
    body: "185 to 1600 CFM diesel and electric air compressors for all site conditions. Available in multiple configurations for offshore, construction, and industrial applications.",
    hero: r("air-compressors/xshore-air-compressor-rental-uae-01.webp"),
    heroAlt: "Industrial air compressor rental UAE diesel electric",
    gallery: [
      "xshore-air-compressor-rental-uae-01.webp",
    ].map((file) => ({ src: r(`air-compressors/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - air compressor") })),
    imageNote: "Additional air compressor images available on request.",
    detailH1: "Industrial Air Compressor Rental Diesel & Electric",
    seoTitle: "Air Compressor Rental UAE | 185 to 1600 CFM Industrial Hire - Xshore",
    seoDescription: "Industrial air compressor rental across the UAE. 185 to 1600 CFM diesel and electric units for offshore, construction, and plant environments. Abu Dhabi.",
    heroSubtitle: "185 to 1600 CFM diesel and electric air compressors for all site conditions. Available in multiple configurations for offshore, construction, and industrial applications.",
    overviewCopy: "Xshore provides a comprehensive range of air compressors suited for the UAE's demanding industrial environments. From small portable units to high-capacity offshore configurations, we supply the air power needed for your project's timeline.",
    bulletSectionTitle: "Specifications",
    bulletItems: [
      "185 to 1600 CFM capacity",
      "Diesel and electric powered variants",
      "Offshore and construction configurations",
      "Weekly hire to long-term project supply",
      "Maintenance support available for long-term projects"
    ],
    ctaText: "Request a Quote →",
    relatedPages: ["pneumatic-equipment", "hydro-testing-equipment", "high-pressure-washers"]
  },
  {
    slug: "electric-welding-machines",
    title: "Electric Welding Machines",
    shortTitle: "Electric Welding Machines",
    badge: "MMA / MIG / TIG",
    body: "MMA, MIG, TIG, and submerged arc welding machines for all industrial welding requirements. Available for weekly hire or long-term project deployment.",
    hero: r("welding-machines/xshore-welding-machine-rental-uae-05.webp"),
    heroAlt: "MIG TIG MMA welding machine rental UAE",
    gallery: [
      "xshore-welding-machine-rental-uae-01.webp",
      "xshore-welding-machine-rental-uae-02.webp",
      "xshore-welding-machine-rental-uae-03.webp",
      "xshore-welding-machine-rental-uae-04.webp",
      "xshore-welding-machine-rental-uae-05.webp",
      "xshore-welding-machine-rental-uae-06.webp",
      "xshore-welding-machine-rental-uae-07.webp",
    ].map((file) => ({ src: r(`welding-machines/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - welding machine") })),
    detailH1: "Electric Welding Machine Rental MIG, TIG, MMA",
    seoTitle: "Welding Machine Rental UAE | Industrial MIG, TIG & MMA Hire - Xshore",
    seoDescription: "Industrial welding machines for hire in the UAE. MMA, MIG, TIG, and submerged arc welding sets for weekly hire or multi-year project deployment. Abu Dhabi.",
    heroSubtitle: "MMA, MIG, TIG, and submerged arc welding machines for all industrial welding requirements. Available for weekly hire or long-term project deployment.",
    overviewCopy: "Our welding fleet consists of industrial welding machines capable of handling heavy-duty welding processes. Whether you need a single unit for a week or a fleet for a long-term project, we provide machines with proven reliability for industrial work.",
    bulletSectionTitle: "Available Machines",
    bulletItems: [
      "MIG / MAG welding sets",
      "TIG welding machines",
      "MMA / Stick welding units",
      "Submerged arc welding (SAW) systems",
      "Available for long-term project supply"
    ],
    ctaText: "View Rental Options →",
    relatedPages: ["welding-consumables", "welding-accessories-tools", "electric-equipment-tools"]
  },
  {
    slug: "high-pressure-washers",
    title: "High Pressure Washers",
    shortTitle: "High Pressure Washers",
    badge: "Cold & Hot Water",
    body: "Cold and hot water industrial pressure washers for surface preparation, cleaning, and maintenance. Suitable for offshore, construction, and plant environments.",
    hero: r("pressure-washers/xshore-high-pressure-washer-rental-uae-03.webp"),
    heroAlt: "Industrial high pressure washer rental UAE cold hot",
    gallery: [
      "xshore-high-pressure-washer-rental-uae-01.webp",
      "xshore-high-pressure-washer-rental-uae-02.webp",
      "xshore-high-pressure-washer-rental-uae-03.webp",
      "xshore-high-pressure-washer-rental-uae-04.webp",
      "xshore-high-pressure-washer-rental-uae-05.webp",
    ].map((file) => ({ src: r(`pressure-washers/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - pressure washer") })),
    detailH1: "High Pressure Washers Industrial Cold & Hot Water",
    seoTitle: "High Pressure Washer Rental UAE | Industrial Cleaning Equipment - Xshore",
    seoDescription: "Industrial high-pressure washers for cleaning and surface prep. Cold and hot water units available for rental across the UAE. Offshore and site ready.",
    heroSubtitle: "Cold and hot water industrial pressure washers for surface preparation, cleaning, and maintenance. Suitable for offshore, construction, and plant environments.",
    overviewCopy: "Xshore supplies heavy-duty pressure washers designed for the toughest industrial cleaning tasks. Our units are field-proven in offshore environments and industrial plants, providing the reliable pressure needed for surface prep and maintenance.",
    bulletSectionTitle: "Unit Specifications",
    bulletItems: [
      "Cold water pressure washers",
      "Hot water / steam cleaners",
      "Industrial surface preparation units",
      "Offshore and plant ready configurations",
      "Short and long-term hire available"
    ],
    ctaText: "Request a Quote →",
    relatedPages: ["hydro-testing-equipment", "air-compressors", "other-equipment"]
  },
  {
    slug: "mobile-gantry-lifting-gear",
    title: "Mobile Gantry & Lifting Gear",
    shortTitle: "Mobile Gantry & Lifting Gear",
    badge: "SWL Certified",
    body: "Gantry cranes, chain blocks, lever hoists, wire rope slings, and rigging accessories - all SWL certified and inspection-ready for safe lifting operations.",
    hero: r("lifting-gear/xshore-mobile-gantry-lifting-gear-uae-01.webp"),
    heroAlt: "Mobile gantry crane lifting gear rental UAE",
    gallery: [
      "xshore-mobile-gantry-lifting-gear-uae-01.webp",
      "xshore-mobile-gantry-lifting-gear-uae-02.webp",
      "xshore-mobile-gantry-lifting-gear-uae-03.webp",
      "xshore-mobile-gantry-lifting-gear-uae-04.webp",
      "xshore-mobile-gantry-lifting-gear-uae-05.webp",
      "xshore-mobile-gantry-lifting-gear-uae-06.webp",
      "xshore-mobile-gantry-lifting-gear-uae-07.webp",
    ].map((file) => ({ src: r(`lifting-gear/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - lifting gear") })),
    detailH1: "Certified Mobile Gantry & Lifting Gear Rental",
    seoTitle: "Mobile Gantry Crane Rental UAE | Certified Lifting Equipment - Xshore",
    seoDescription: "Certified mobile gantry cranes and lifting gear rental in the UAE. Chain blocks, hoists, slings, and rigging accessories with full SWL certification.",
    heroSubtitle: "Gantry cranes, chain blocks, lever hoists, wire rope slings, and rigging accessories | all SWL certified and inspection-ready for safe lifting operations.",
    overviewCopy: "Safety is the priority in all lifting operations. Every item in our lifting fleet carries valid certification and is rigorously inspected before mobilization. From mobile A-frame gantries to small rigging accessories, we provide the gear that keeps your lift compliant and safe.",
    bulletSectionTitle: "Equipment List",
    bulletItems: [
      "Mobile A-frame gantry cranes",
      "Chain blocks and lever hoists",
      "Wire rope slings and shackles",
      "Full SWL certification on all items",
      "Inspection-ready for offshore use"
    ],
    ctaText: "Request Quote →",
    relatedPages: ["other-equipment", "pneumatic-equipment", "electric-equipment-tools"]
  },
  {
    slug: "pneumatic-equipment",
    title: "Pneumatic Equipment",
    shortTitle: "Pneumatic Equipment",
    badge: "Air-Powered",
    body: "Air-powered tools for drilling, grinding, scaling, chipping, and impact work. Suitable for offshore and onshore industrial applications.",
    hero: r("pneumatic-equipment/xshore-pneumatic-equipment-rental-uae-16.webp"),
    heroAlt: "Pneumatic air powered equipment rental UAE",
    gallery: [
      "xshore-pneumatic-equipment-rental-uae-16.webp",
      "xshore-pneumatic-equipment-rental-uae-04.webp",
      "xshore-pneumatic-equipment-rental-uae-17.webp",
      "xshore-pneumatic-equipment-rental-uae-23.webp",
      "xshore-pneumatic-equipment-rental-uae-01.webp",
      "xshore-pneumatic-equipment-rental-uae-05.webp",
      "xshore-pneumatic-equipment-rental-uae-06.webp",
      "xshore-pneumatic-equipment-rental-uae-11.webp",
      "xshore-pneumatic-equipment-rental-uae-15.webp",
      "xshore-pneumatic-equipment-rental-uae-20.webp",
      "xshore-pneumatic-equipment-rental-uae-10.webp",
      "xshore-pneumatic-equipment-rental-uae-07.webp",
      "xshore-pneumatic-equipment-rental-uae-02.webp",
      "xshore-pneumatic-equipment-rental-uae-03.webp",
      "xshore-pneumatic-equipment-rental-uae-08.webp",
      "xshore-pneumatic-equipment-rental-uae-09.webp",
      "xshore-pneumatic-equipment-rental-uae-12.webp",
      "xshore-pneumatic-equipment-rental-uae-13.webp",
      "xshore-pneumatic-equipment-rental-uae-14.webp",
      "xshore-pneumatic-equipment-rental-uae-18.webp",
      "xshore-pneumatic-equipment-rental-uae-19.webp",
      "xshore-pneumatic-equipment-rental-uae-21.webp",
      "xshore-pneumatic-equipment-rental-uae-22.webp",
      "xshore-pneumatic-equipment-rental-uae-24.webp",
    ].map((file) => ({ src: r(`pneumatic-equipment/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - offshore industrial") })),
    detailH1: "Pneumatic Air-Powered Equipment Rental & Supply",
    seoTitle: "Pneumatic Tools & Air Equipment Rental UAE | Abu Dhabi - Xshore",
    seoDescription: "Pneumatic tool and air equipment rental across the UAE. Air-powered tools for drilling, grinding, scaling, chipping, and impact work - for offshore and onshore industrial sites. Abu Dhabi.",
    heroSubtitle: "Air-powered tools for drilling, grinding, scaling, chipping, and impact work. Suitable for offshore and onshore industrial applications.",
    overviewCopy: "Our pneumatic equipment fleet is built for the high-intensity environments of the oil, gas, and construction sectors. Air-powered tools provide the safety and performance required in hazardous or heavy-duty site conditions.",
    bulletSectionTitle: "Product Range",
    bulletItems: [
      "Air impact wrenches and grinders",
      "Pneumatic drills and chipping hammers",
      "Scaling and surface prep tools",
      "Offshore-ready air power solutions",
      "High-durability industrial builds"
    ],
    ctaText: "Request a Quote →",
    relatedPages: ["air-compressors", "electric-equipment-tools", "high-pressure-washers"]
  },
  {
    slug: "electric-equipment-tools",
    title: "Electric Equipment & Tools",
    shortTitle: "Electric Equipment & Tools",
    badge: "110V / 220V",
    body: "Angle grinders, core drills, portable power tools, and electrical equipment in 110V and 220V configurations for site use.",
    hero: r("electric-equipment/xshore-electric-equipment-rental-uae-10.webp"),
    heroAlt: "Electric power tools equipment rental UAE 110V 220V",
    gallery: [
      "xshore-electric-equipment-rental-uae-10.webp",
      "xshore-electric-equipment-rental-uae-05.webp",
      "xshore-electric-equipment-rental-uae-04.webp",
      "xshore-electric-equipment-rental-uae-09.webp",
      "xshore-electric-equipment-rental-uae-02.webp",
      "xshore-electric-equipment-rental-uae-08.webp",
      "xshore-electric-equipment-rental-uae-03.webp",
      "xshore-electric-equipment-rental-uae-01.webp",
      "xshore-electric-equipment-rental-uae-06.webp",
      "xshore-electric-equipment-rental-uae-07.webp",
      "xshore-electric-equipment-rental-uae-11.webp",
      "xshore-electric-equipment-rental-uae-12.webp",
    ].map((file) => ({ src: r(`electric-equipment/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - angle grinder core drill site equipment") })),
    detailH1: "Tools Rental UAE - Electric & Power Tools for Site Use",
    seoTitle: "Tools Rental UAE | Electric & Power Tool Hire Abu Dhabi - Xshore Equipment",
    seoDescription: "Tools rental across the UAE and Abu Dhabi. Industrial electric and power tools for hire - angle grinders, core drills, and site tools in 110V and 220V. Weekly hire or long-term project supply. Mussafah, Abu Dhabi.",
    heroSubtitle: "Angle grinders, core drills, portable power tools, and electrical site equipment available for weekly hire or long-term project rental across the UAE. Available in 110V and 220V configurations.",
    overviewCopy: "Xshore is one of the very few companies in the UAE offering dedicated tools rental alongside full industrial equipment hire. While most suppliers focus on heavy plant, we stock and maintain a complete range of electric and power tools available for weekly hire or long-term project deployment - saving your team the cost of purchasing tools that sit idle between projects.\n\nOur tools are maintained and safety-checked before every deployment. Available for mobilisation across Abu Dhabi, Dubai, Sharjah, and the wider UAE.",
    bulletSectionTitle: "Tool Specifications",
    bulletItems: [
      "Angle grinders and cutting tools",
      "Magnetic and core drills",
      "110V and 220V site configurations",
      "Portable power distribution",
      "Certified for industrial site use"
    ],
    ctaText: "View Details →",
    relatedPages: ["pneumatic-equipment", "electric-welding-machines", "other-equipment"]
  },
  {
    slug: "other-equipment",
    title: "Other Equipment",
    shortTitle: "Other Equipment",
    badge: "On Request",
    body: "Gas cutting sets, gas detectors, generators, dehumidifiers, lighting towers, and specialist equipment. Contact us with specific requirements.",
    hero: r("other-equipment/xshore-other-equipment-rental-uae-03.webp"),
    heroAlt: "Gas cutting machine multi gas detector rental UAE",
    gallery: [
      "xshore-other-equipment-rental-uae-01.webp",
      "xshore-other-equipment-rental-uae-02.webp",
      "xshore-other-equipment-rental-uae-03.webp",
    ].map((file) => ({ src: r(`other-equipment/${file}`), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - specialist equipment") })),
    imageNote: "Generators, dehumidifiers, and lighting towers available on request.",
    detailH1: "Specialist Industrial Equipment Rental UAE",
    seoTitle: "Specialist Industrial Equipment Rental Abu Dhabi | Gas Cutting & More - Xshore",
    seoDescription: "Specialist industrial equipment for hire in the UAE. Gas cutting sets, gas detectors, generators, and dehumidifiers available on request. Abu Dhabi.",
    heroSubtitle: "Gas cutting sets, gas detectors, generators, dehumidifiers, lighting towers, and specialist equipment. Contact us with specific requirements.",
    overviewCopy: "Beyond our core categories, Xshore provides a range of specialist equipment to support complex site operations. If you need a specific tool or unit not listed elsewhere, contact our team for sourcing and availability.",
    bulletSectionTitle: "Available Equipment",
    bulletItems: [
      "Gas cutting sets and accessories",
      "Multi-gas detectors and safety monitors",
      "Portable generators and lighting",
      "Dehumidifiers and climate control",
      "Custom sourcing on request"
    ],
    ctaText: "Request a Quote →",
    relatedPages: ["high-pressure-washers", "mobile-gantry-lifting-gear", "hydro-testing-equipment"]
  },
];

const f_dnv = (file: string) => `/images/fabrication/dnv-containers/${file}`;
const f_zone2 = (file: string) => `/images/fabrication/zone-2-atex/${file}`;
const f_workshop = (file: string) => `/images/fabrication/workshop-containers/${file}`;

export const fabricationCategories: Category[] = [
  {
    slug: "dnv-2-7-1-offshore-containers",
    title: "DNV 2.7-1 Offshore Containers",
    shortTitle: "DNV 2.7-1 Containers",
    badge: "DNV 2.7-1 / EN12079",
    body: "Cargo-carrying units fabricated to DNV 2.7-1 / EN12079 standards for offshore lifting. Fully certified with third-party verification and built to handle the demands of offshore deployment.",
    hero: f_dnv("xshore-dnv-offshore-container-uae-07.webp"),
    heroAlt: "DNV 2.7-1 certified offshore container fabrication UAE",
    gallery: [
      "xshore-dnv-offshore-container-uae-07.webp",
      "xshore-dnv-offshore-container-uae-09.webp",
      "xshore-dnv-offshore-container-uae-11.webp",
      "xshore-dnv-offshore-container-uae-08.webp",
      "xshore-dnv-offshore-container-uae-04.webp",
      "xshore-dnv-offshore-container-uae-03.webp",
      "xshore-dnv-offshore-container-uae-10.webp",
      "xshore-dnv-offshore-container-uae-01.webp",
      "xshore-dnv-offshore-container-uae-02.webp",
      "xshore-dnv-offshore-container-uae-06.webp",
      "xshore-dnv-offshore-container-uae-05.webp",
    ].map((file) => ({ src: f_dnv(file), alt: getAlt(file, "DNV 2.7-1 offshore container fabrication UAE - certified offshore lifting unit") })),
    detailH1: "DNV 2.7-1 Offshore Container Fabrication UAE",
    seoTitle: "DNV Container Fabrication UAE | DNV 2.7-1 certified Abu Dhabi - Xshore",
    seoDescription: "DNV 2.7-1 and EN12079 certified offshore container fabrication in the UAE. 10+ units delivered. Full certification managed end-to-end. Based in Abu Dhabi.",
    heroSubtitle: "Cargo-carrying units designed and certified to DNV 2.7-1 / EN12079 standards for offshore crane lifting. Built to your specification with full independent third-party certification.",
    overviewCopy: "Xshore is a trusted supplier of DNV-certified offshore containers. We understand the stringent requirements of ADNOC-contracted projects and offshore operators. Every unit is built for durability and compliance in the harshest marine environments.",
    bulletSectionTitle: "Fabrication Specs",
    bulletItems: [
      "DNV 2.7-1 / EN12079 certified",
      "Third-party independent certification",
      "Custom internal fit-outs available",
      "Heavy-duty structural steel build",
      "10+ units successfully delivered"
    ],
    ctaText: "Request a Build →",
    relatedPages: ["zone-2-atex-enclosures", "workshop-containers", "custom-fabrication"]
  },
  {
    slug: "zone-2-atex-enclosures",
    title: "Zone-2 / ATEX Enclosures",
    shortTitle: "Zone-2 / ATEX",
    badge: "ATEX Zone-2",
    body: "Explosion-protected containers and enclosures certified for Zone-2 hazardous areas. Built for offshore platforms, petrochemical plants, and refinery environments.",
    hero: f_zone2("xshore-zone2-atex-container-uae-05.webp"),
    heroAlt: "ATEX Zone-2 explosion proof container UAE",
    gallery: [
      "xshore-zone2-atex-container-uae-05.webp",
      "xshore-zone2-atex-container-uae-11.webp",
      "xshore-zone2-atex-container-uae-03.webp",
      "xshore-zone2-atex-container-uae-04.webp",
      "xshore-zone2-atex-container-uae-06.webp",
      "xshore-zone2-atex-container-uae-10.webp",
      "xshore-zone2-atex-container-uae-07.webp",
      "xshore-zone2-atex-container-uae-08.webp",
      "xshore-zone2-atex-container-uae-01.webp",
      "xshore-zone2-atex-container-uae-02.webp",
      "xshore-zone2-atex-container-uae-09.webp",
      "xshore-zone2-atex-container-uae-12.webp",
      "xshore-zone2-atex-container-uae-13.jpg",
      "xshore-zone2-atex-container-uae-14.jpg",
      "xshore-zone2-atex-container-uae-15.webp",
      "xshore-zone2-atex-container-uae-16.webp",
      "xshore-zone2-atex-container-uae-17.webp",
      "xshore-zone2-atex-container-uae-18.webp",
    ].map((file) => ({ src: f_zone2(file), alt: getAlt(file, file.replace('xshore-', '').replace(/\.(jpg|webp)$/i, '').replace(/-/g, ' ') + " - explosion proof enclosure") })),
    detailH1: "Zone-2 / ATEX Explosion Proof Enclosures UAE",
    seoTitle: "ATEX Zone-2 Container UAE | Explosion Proof Enclosures - Xshore",
    seoDescription: "Explosion-protected containers certified for Zone-2 hazardous areas under ATEX and IECEx standards. Designed for offshore and petrochemical facilities in the UAE.",
    heroSubtitle: "Explosion-protected containers and enclosures certified for Zone-2 hazardous areas under ATEX and IECEx standards. Designed for offshore platforms and petrochemical plants.",
    overviewCopy: "In hazardous areas, standard equipment is not an option. Our Zone-2 and ATEX enclosures are engineered to protect your equipment and your personnel. Certified to international standards for use in refineries, plants, and offshore rigs.",
    bulletSectionTitle: "Compliance & Features",
    bulletItems: [
      "ATEX and IECEx certified",
      "Zone-2 hazardous area compliant",
      "Explosion-proof internal components",
      "Custom fit-out options",
      "Built to hazardous area specifications"
    ],
    ctaText: "Request a Build →",
    relatedPages: ["dnv-2-7-1-offshore-containers", "workshop-containers", "custom-fabrication"]
  },
  {
    slug: "workshop-containers",
    title: "Workshop Containers",
    shortTitle: "Workshop Containers",
    badge: "Custom Fitted",
    body: "Custom-fitted workshop units with workbenches, storage, tooling, and ventilation for remote site deployment. Built to client specification for offshore and onshore projects.",
    hero: f_workshop("xshore-workshop-container-uae-01.webp"),
    heroAlt: "Custom workshop container offshore UAE",
    gallery: [
      "xshore-workshop-container-uae-01.webp",
      "xshore-workshop-container-uae-03.webp",
      "xshore-workshop-container-uae-02.webp",
      "xshore-workshop-container-uae-04.webp",
      "xshore-workshop-container-uae-05.webp",
    ].map((file) => ({ src: f_workshop(file), alt: getAlt(file, "Workshop container fabrication UAE - site workshop unit") })),
    detailH1: "Custom Workshop Container Fabrication UAE",
    seoTitle: "Workshop Container UAE | Custom Fitted Remote Site Units - Xshore",
    seoDescription: "Custom-fitted workshop containers for remote site and offshore deployment. Built to your layout with workbenches, storage, and ventilation. Abu Dhabi.",
    heroSubtitle: "Custom-fitted workshop units with workbenches, tool storage, ventilation, and lighting | built for remote site and offshore deployment.",
    overviewCopy: "A well-organized site is a productive site. Our workshop containers provide a secure and organized space for maintenance and technical work in remote locations. Built to withstand the environment while supporting your team's operational needs.",
    bulletSectionTitle: "Standard Features",
    bulletItems: [
      "Custom internal layout and workbenches",
      "Integrated tool storage and cabinets",
      "Site and offshore ready configurations",
      "Built to specification for remote site use"
    ],
    ctaText: "Request a Build →",
    relatedPages: ["accommodation-office-units", "custom-fabrication", "dnv-2-7-1-offshore-containers"]
  },
  {
    slug: "accommodation-office-units",
    title: "Accommodation & Office Units",
    shortTitle: "Accommodation & Office",
    badge: "Modular Build",
    body: "Modular containerised accommodation and site office units built for rapid deployment in remote project locations. Fitted to client requirements.",
    hero: f_dnv("xshore-dnv-offshore-container-uae-07.webp"),
    heroAlt: "Containerised accommodation and site office unit UAE",
    gallery: [],
    imageNote: "Project images for accommodation and office units coming soon. Reference images shown.",
    detailH1: "Containerised Accommodation & Office Units UAE",
    seoTitle: "Accommodation Office Container UAE | Modular Site Units - Xshore",
    seoDescription: "Modular containerised accommodation and site office units for rapid deployment in the UAE. Built to specification for remote project locations. Abu Dhabi.",
    heroSubtitle: "Modular containerised accommodation and site office units engineered for remote project locations. Built to specification and ready for rapid deployment.",
    overviewCopy: "For remote project success, your team needs a reliable base. We provide modular office and accommodation units that are durable and ready for site deployment. Designed to your specification for rapid setup in the UAE.",
    bulletSectionTitle: "Capabilities",
    bulletItems: [
      "Modular rapid-deployment design",
      "Custom office and living layouts",
      "Durable site-ready construction",
      "(Images coming soon - project imagery pending)"
    ],
    ctaText: "Start a Conversation →",
    relatedPages: ["workshop-containers", "custom-fabrication", "dnv-2-7-1-offshore-containers"]
  },
  {
    slug: "custom-fabrication",
    title: "Custom Fabrication",
    shortTitle: "Custom Fabrication",
    badge: "To Spec",
    body: "Bespoke structural steel fabrication, skid units, and custom builds delivered to client drawings and specifications. From concept to certified delivery, managed in-house.",
    hero: f_dnv("xshore-dnv-offshore-container-uae-03.webp"),
    heroAlt: "Custom industrial fabrication UAE - structural steel skid units",
    gallery: [],
    imageNote: "Custom fabrication project images coming soon.",
    detailH1: "Custom Industrial Fabrication Structural & Skid Units",
    seoTitle: "Custom Fabrication UAE | Structural Steel & Skid Units - Xshore",
    seoDescription: "Bespoke structural steel fabrication, skid units, and equipment frames built to client drawings. Certified delivery managed in Abu Dhabi, UAE.",
    heroSubtitle: "Bespoke structural steel fabrication, skid units, equipment frames, and custom builds to client drawings. Full process managed from concept to delivery.",
    overviewCopy: "When standard solutions won't work, we build what you need. Our fabrication team handles everything from structural skids to custom equipment frames, ensuring every build meets the project's specific technical and certification requirements.",
    bulletSectionTitle: "Fabrication Services",
    bulletItems: [
      "Structural steel fabrication",
      "Custom skid units and equipment frames",
      "Build-to-print from client drawings",
      "Managed fabrication and certification process",
      "(Images coming soon - project imagery pending)"
    ],
    ctaText: "Start a Conversation →",
    relatedPages: ["dnv-2-7-1-offshore-containers", "zone-2-atex-enclosures", "workshop-containers"]
  },
];

export const tradingCategories: Category[] = [
  {
    slug: "welding-consumables",
    title: "Welding Consumables",
    shortTitle: "Welding Consumables",
    badge: "All Processes",
    body: "Full range of welding consumables for all welding processes. Stocked for fast delivery to project sites across the UAE - from MMA electrodes and MIG wires to TIG rods and exotic alloys.",
    hero: "https://images.unsplash.com/photo-1730584476141-232435a40c32?w=1600&h=900&fit=crop&q=80",
    heroAlt: "Welding consumables supply UAE - electrodes wire rods",
    gallery: [],
    imageNote: "Welding consumables product images coming soon.",
    detailH1: "Welding Consumables Supply MMA, MIG, TIG",
    seoTitle: "Welding Consumables Supplier UAE | Electrodes, Wires & Rods - Xshore",
    seoDescription: "Supplier of welding electrodes, MIG/TIG wires, and exotic alloys in the UAE. Fast delivery to project sites. Abu Dhabi.",
    heroSubtitle: "Electrodes, MIG and TIG wires, flux-cored wire, and welding accessories sourced and delivered to your site. No procurement headache.",
    overviewCopy: "We supply the materials that keep your welding operations running. From standard electrodes to exotic alloys, our consumables are sourced for quality and stocked for fast delivery to site. We understand that running out of consumables is not an option.",
    bulletSectionTitle: "Available Consumables",
    bulletItems: [
      "Electrodes - MMA / SMAW",
      "MIG / MAG wires & flux-cored",
      "TIG rods and filler metals",
      "Stainless, duplex & exotic alloys",
      "Fast site delivery across UAE"
    ],
    ctaText: "Request Supply Quote →",
    relatedPages: ["welding-accessories-tools", "electric-welding-machines", "ppe-safety-equipment"]
  },
  {
    slug: "welding-accessories-tools",
    title: "Welding Accessories & Tools",
    shortTitle: "Welding Accessories & Tools",
    badge: "Project Supply",
    body: "All the supporting accessories and tools needed for welding operations, surface preparation, and quality control - from grinders and cutting discs to clamps, jigs, and inspection tools.",
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop&q=80",
    heroAlt: "Welding accessories and tools supply UAE",
    gallery: [],
    imageNote: "Welding accessories product images coming soon.",
    detailH1: "Welding Accessories & Industrial Tools Supply UAE",
    seoTitle: "Welding Accessories Supplier UAE | Grinders, Helmets & Tools - Xshore",
    seoDescription: "Industrial welding accessories and tools supplier in the UAE. Grinding discs, helmets, gloves, and inspection tools delivered to your project site.",
    heroSubtitle: "All the supporting accessories for welding operations, surface preparation, and quality control | sourced and delivered fast.",
    overviewCopy: "Every welder needs the right tools to perform. We supply the high-quality accessories and safety gear required for a productive welding shop. Grinders, discs, helmets, and tools - delivered when you need them.",
    bulletSectionTitle: "Tools & Accessories",
    bulletItems: [
      "Grinding discs and wire brushes",
      "Welding helmets and protective gloves",
      "Clamps, jigs, and positioners",
      "NDT accessories and inspection tools",
      "Surface prep and cleaning products"
    ],
    ctaText: "Request Supply Quote →",
    relatedPages: ["welding-consumables", "electric-welding-machines", "ppe-safety-equipment"]
  },
  {
    slug: "ppe-safety-equipment",
    title: "PPE & Safety Equipment",
    shortTitle: "PPE & Safety Equipment",
    badge: "Available on Request",
    body: "Personal protective equipment for oil & gas, construction, and industrial environments - available on request. Helmets, harnesses, breathing apparatus, footwear, and gas detection.",
    hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=900&fit=crop&q=80",
    heroAlt: "PPE and safety equipment supply UAE",
    gallery: [],
    imageNote: "PPE product images coming soon.",
    detailH1: "PPE & Industrial Safety Equipment Available on Request",
    seoTitle: "PPE Supplier UAE | Industrial Safety Equipment Abu Dhabi - Xshore",
    seoDescription: "Industrial PPE and safety equipment available on request for projects in the UAE. Helmets, harnesses, and safety footwear. Abu Dhabi.",
    heroSubtitle: "Personal protective equipment for oil & gas, construction, and industrial environments | available on request.",
    overviewCopy: "Safety is non-negotiable. For our project clients and long-term partners, we provide a reliable channel for essential PPE and safety equipment. Available on request to support your site safety compliance.",
    bulletSectionTitle: "Safety Gear List",
    bulletItems: [
      "Safety helmets and head protection",
      "Harnesses and fall arrest systems",
      "Safety footwear and body protection",
      "Respiratory PPE and masks",
      "Available on request for project teams"
    ],
    ctaText: "Email your list →",
    relatedPages: ["welding-accessories-tools", "welding-consumables", "other-equipment"]
  },
];

export function findRental(slug: string) { return rentalCategories.find((c) => c.slug === slug); }
export function findFabrication(slug: string) { return fabricationCategories.find((c) => c.slug === slug); }
export function findTrading(slug: string) { return tradingCategories.find((c) => c.slug === slug); }