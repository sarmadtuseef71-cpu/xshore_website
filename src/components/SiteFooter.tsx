import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="xs-footer">
      <Link to="/" className="footer-logo">
        <img 
          src="/images/logo/xshore_new_logo.svg" 
          alt="Xshore Equipment logo" 
          className="footer-logo-img" 
        />
      </Link>
      <div className="footer-links">
        <Link to="/equipment-rental">Rental</Link>
        <Link to="/fabrication">Fabrication</Link>
        <Link to="/trading">Trading</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/rental-terms">Rental Terms &amp; Conditions</Link>
      </div>
      <span className="footer-copy">© 2026 Xshore. All Rights Reserved.</span>
    </footer>
  );
}