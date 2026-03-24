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
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="22" r="14" fill="#c0392b" />
              <path d="M20 8 C20 8 16 4 12 5 C16 6 18 10 20 8Z" fill="#27ae60" />
              <path d="M20 8 C20 8 24 4 28 5 C24 6 22 10 20 8Z" fill="#27ae60" />
              <path d="M20 8 L20 14" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="20" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="25" cy="24" r="2" fill="rgba(255,255,255,0.20)" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Tomato Leaf AI</span>
            <span className="logo-tagline">Disease Detection</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="header-actions">
          
          {/* Desktop CTA */}
          <Link to="/prediction" className="header-cta">
            Analyze Leaf
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-nav-link ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile CTA */}
        <Link to="/prediction" className="mobile-nav-cta">
          Analyze Leaf Now →
        </Link>
      </div>
    </header>
  );
}