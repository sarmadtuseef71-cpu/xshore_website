import { useState } from "react";
import { Link } from "@tanstack/react-router";

const rentalItems: { label: string; to: string }[] = [
  { label: "All Equipment Rental", to: "/equipment-rental" },
  { label: "Hydro Testing Equipment", to: "/equipment-rental/hydro-testing-equipment" },
  { label: "Air Compressors", to: "/equipment-rental/air-compressors" },
  { label: "Electric Welding Machines", to: "/equipment-rental/electric-welding-machines" },
  { label: "High Pressure Washers", to: "/equipment-rental/high-pressure-washers" },
  { label: "Mobile Gantry & Lifting Gear", to: "/equipment-rental/mobile-gantry-lifting-gear" },
  { label: "Pneumatic Equipment", to: "/equipment-rental/pneumatic-equipment" },
  { label: "Electric Equipment & Tools", to: "/equipment-rental/electric-equipment-tools" },
  { label: "Other Equipment", to: "/equipment-rental/other-equipment" },
];
const fabItems: { label: string; to: string }[] = [
  { label: "Fabrication & Containers", to: "/fabrication" },
  { label: "DNV 2.7-1 Offshore Containers", to: "/fabrication/dnv-2-7-1-offshore-containers" },
  { label: "Zone-2 / ATEX Enclosures", to: "/fabrication/zone-2-atex-enclosures" },
  { label: "Workshop Containers", to: "/fabrication/workshop-containers" },
  { label: "Accommodation & Office Units", to: "/fabrication/accommodation-office-units" },
  { label: "Custom Fabrication", to: "/fabrication/custom-fabrication" },
];
const tradeItems: { label: string; to: string }[] = [
  { label: "Industrial Trading", to: "/trading" },
  { label: "Welding Consumables", to: "/trading/welding-consumables" },
  { label: "Welding Accessories & Tools", to: "/trading/welding-accessories-tools" },
  { label: "PPE & Safety Equipment", to: "/trading/ppe-safety-equipment" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="xs-nav">
        <Link to="/" className="nav-logo" aria-label="Xshore home">X<span>SHORE</span></Link>
        <ul className="nav-links">
          <li>
            <Link to="/equipment-rental">Rental <span className="nav-arrow" /></Link>
            <div className="dropdown">
              <div className="dropdown-header">Equipment Rental</div>
              {rentalItems.map((i) => <Link key={i.to} to={i.to}>{i.label}</Link>)}
            </div>
          </li>
          <li>
            <Link to="/fabrication">Fabrication <span className="nav-arrow" /></Link>
            <div className="dropdown">
              <div className="dropdown-header">Fabrication & Containers</div>
              {fabItems.map((i) => <Link key={i.to} to={i.to}>{i.label}</Link>)}
            </div>
          </li>
          <li>
            <Link to="/trading">Trading <span className="nav-arrow" /></Link>
            <div className="dropdown">
              <div className="dropdown-header">Industrial Trading</div>
              {tradeItems.map((i) => <Link key={i.to} to={i.to}>{i.label}</Link>)}
            </div>
          </li>
          <li><Link to="/fabrication/zone-2-atex-enclosures">DNV & Zone-2</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact" className="nav-cta">Get a Quote</Link></li>
        </ul>
        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <details>
            <summary>Rental</summary>
            {rentalItems.map((i) => (
              <Link key={i.to} to={i.to} className="m-sub" onClick={close}>{i.label}</Link>
            ))}
          </details>
          <details>
            <summary>Fabrication</summary>
            {fabItems.map((i) => (
              <Link key={i.to} to={i.to} className="m-sub" onClick={close}>{i.label}</Link>
            ))}
          </details>
          <details>
            <summary>Trading</summary>
            {tradeItems.map((i) => (
              <Link key={i.to} to={i.to} className="m-sub" onClick={close}>{i.label}</Link>
            ))}
          </details>
          <Link className="m-link" to="/fabrication/zone-2-atex-enclosures" onClick={close}>DNV & Zone-2</Link>
          <Link className="m-link" to="/about" onClick={close}>About Us</Link>
          <a className="m-link" href="tel:+97122465375" onClick={close}>Call +971 2 246 5375</a>
          <Link className="m-cta" to="/contact" onClick={close}>Get a Quote</Link>
        </div>
      )}
    </>
  );
}
