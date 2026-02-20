import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/prediction", label: "Disease Detection" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="22" r="14" fill="#c0392b" />
              <path d="M20 8 C20 8 16 4 12 5 C16 6 18 10 20 8Z" fill="#27ae60" />
              <path d="M20 8 C20 8 24 4 28 5 C24 6 22 10 20 8Z" fill="#27ae60" />
              <path d="M20 8 L20 14" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="20" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="25" cy="24" r="2" fill="rgba(255,255,255,0.20)" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">TomatoAI</span>
            <span className="logo-tagline">Disease Detection</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="header-actions">
          <Link to="/prediction" className="header-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
            </svg>
            Analyze Leaf
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-nav-link ${location.pathname === link.path ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/prediction" className="mobile-nav-cta">
          Analyze Leaf Now →
        </Link>
      </div>
    </header>
  );
}
