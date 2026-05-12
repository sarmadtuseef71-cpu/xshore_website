import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="xs-footer">
      <Link to="/" className="footer-logo">X<span>SHORE</span></Link>
      <div className="footer-links">
        <Link to="/equipment-rental">Rental</Link>
        <Link to="/fabrication">Fabrication</Link>
        <Link to="/trading">Trading</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <span className="footer-copy">© 2026 Xshore. All Rights Reserved.</span>
    </footer>
  );
}