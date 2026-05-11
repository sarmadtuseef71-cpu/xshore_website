import { useState } from "react";
import { Link } from "@tanstack/react-router";

const rentalItems: { label: string; to: string }[] = [
  { label: "Hydro Testing Equipment", to: "/equipment-rental/hydro-testing-equipment" },
  { label: "Air Compressors", to: "/equipment-rental/air-compressors" },
  { label: "Electric Welding Machines", to: "/equipment-rental/electric-welding-machines" },
  { label: "High Pressure Washers", to: "/equipment-rental/high-pressure-washers" },
  { label: "Mobile Gantry & Lifting Gear", to: "/equipment-rental/mobile-gantry-lifting-gear" },
  { label: "Pneumatic Equipment", to: "/equipment-rental/pneumatic-equipment" },
  { label: "Electric Equipment & Tools", to: "/equipment-rental/electric-equipment-tools" },
  { label: "Other Equipment", to: "/equipment-rental/other-equipment" },
  { label: "All Equipment", to: "/equipment-rental" },
];
const fabItems = [
  "DNV 2.7-1 Offshore Containers",
  "Zone-2 / ATEX Enclosures",
  "Workshop Containers",
  "Accommodation & Office Units",
  "Custom Fabrication",
];
const tradeItems = [
  "PPE & Safety Equipment",
  "Welding Consumables",
  "Welding Accessories & Tools",
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
            <a href="/#fabrication">Fabrication <span className="nav-arrow" /></a>
            <div className="dropdown">
              <div className="dropdown-header">Fabrication & Containers</div>
              {fabItems.map((i) => <a key={i} href="/#fabrication">{i}</a>)}
            </div>
          </li>
          <li>
            <a href="/#trading">Trading <span className="nav-arrow" /></a>
            <div className="dropdown">
              <div className="dropdown-header">Industrial Trading</div>
              {tradeItems.map((i) => <a key={i} href="/#trading">{i}</a>)}
            </div>
          </li>
          <li><a href="/#dnv">DNV & Zone-2</a></li>
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#contact" className="nav-cta">Get a Quote</a></li>
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
              <a key={i} href="/#fabrication" className="m-sub" onClick={close}>{i}</a>
            ))}
          </details>
          <details>
            <summary>Trading</summary>
            {tradeItems.map((i) => (
              <a key={i} href="/#trading" className="m-sub" onClick={close}>{i}</a>
            ))}
          </details>
          <a className="m-link" href="/#dnv" onClick={close}>DNV & Zone-2</a>
          <a className="m-link" href="/#about" onClick={close}>About Us</a>
          <a className="m-cta" href="/#contact" onClick={close}>Get a Quote</a>
        </div>
      )}
    </>
  );
}
