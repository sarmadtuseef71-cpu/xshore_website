import { useState } from "react";
import { Link } from "@tanstack/react-router";

const rentalItems: { label: string; to: string }[] = [
  { label: "Short-Term Hire", to: "/equipment-rental#short-term-hire" },
  { label: "Long-Term Projects", to: "/equipment-rental#long-term-projects" },
  { label: "All Equipment", to: "/equipment-rental" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="xs-nav">
        <Link to="/" className="nav-logo" aria-label="Xshore home">
          <img 
            src="/images/logo/xshore_new_logo.svg" 
            alt="Xshore Equipment logo" 
            className="nav-logo-img" 
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/equipment-rental">Rental <span className="nav-arrow" /></Link>
            <div className="dropdown">
              <div className="dropdown-header">Equipment Rental</div>
              {rentalItems.map((i) => <Link key={i.to} to={i.to}>{i.label}</Link>)}
            </div>
          </li>
          <li><Link to="/fabrication">Fabrication</Link></li>
          <li><Link to="/trading">Trading</Link></li>
          <li><Link to="/about">About</Link></li>
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
          <Link className="m-link" to="/fabrication" onClick={close}>Fabrication</Link>
          <Link className="m-link" to="/trading" onClick={close}>Trading</Link>
          <Link className="m-link" to="/about" onClick={close}>About</Link>
          <Link className="m-cta" to="/contact" onClick={close}>Get a Quote</Link>
        </div>
      )}
    </>
  );
}
