import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38" aria-hidden="true">
                  <circle cx="20" cy="22" r="14" fill="#c0392b" />
                  <path d="M20 8 C20 8 16 4 12 5 C16 6 18 10 20 8Z" fill="#27ae60" />
                  <path d="M20 8 C20 8 24 4 28 5 C24 6 22 10 20 8Z" fill="#27ae60" />
                  <path d="M20 8 L20 14" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>TomatoAI</span>
              </div>
              <p>
                AI-powered tomato leaf disease detection using deep learning. Protecting crops, empowering farmers, securing food systems.
              </p>
              <div className="footer-badges">
                <span className="footer-badge">≥95% Accuracy</span>
                <span className="footer-badge">150+ Disease Classes</span>
                <span className="footer-badge">Instant Results</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/prediction">Disease Detection</Link></li>
                <li><Link to="/about">About the Project</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Diseases */}
            <div className="footer-col">
              <h4>Detected Diseases</h4>
              <ul>
                <li><span>Bacterial Spot</span></li>
                <li><span>Early Blight</span></li>
                <li><span>Late Blight</span></li>
                <li><span>Leaf Mold</span></li>
                <li><span>Septoria Leaf Spot</span></li>
                <li><span>Spider Mites</span></li>
                <li><span>Target Spot</span></li>
                <li><span>Yellow Leaf Curl Virus</span></li>
                <li><span>Mosaic Virus</span></li>
                <li><span>More 100+ diseases</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:Phytoguard@gmail.com">phytoguard@gmail.com</a>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>+91 8413260303</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Department of Data Science</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} TomatoAI Disease Detection System. Final Year Project — AI & Deep Learning.</p>
          <p>Built with CNN Deep Learning | PlantVillage Dataset | ≥95% Validation Accuracy</p>
        </div>
      </div>
    </footer>
  );
}
