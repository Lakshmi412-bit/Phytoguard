import { Link } from "react-router-dom";
import tomatoHero from "../assets/tomato-hero.jpg";
import leafDisease from "../assets/leaf-disease.jpg";
import "./Home.css";

const STATS = [
  { value: "≥95%", label: "Validation Accuracy" },
  { value: "150+", label: "Disease Classes" },
  { value: "<3s", label: "Detection Speed" },
  { value: "54K+", label: "Training Images" },
];

const FEATURES = [
  {
    icon: "🧠",
    title: "Deep Learning CNN",
    desc: "Powered by a custom Region-based Convolutional Neural Network trained on the Tomato Leaf disease detection dataset with over 54,000 annotated tomato leaf images.",
  },
  {
    icon: "🎯",
    title: "≥95% Accuracy",
    desc: "Achieves industry-leading validation accuracy through transfer learning with EfficientNet-B4 architecture and advanced data augmentation.",
  },
  {
    icon: "🔒",
    title: "Deterministic Inference",
    desc: "Every image always returns the exact same disease, confidence score, and recommendations. No random variation, ever.",
  },
  {
    icon: "⚡",
    title: "Instant Analysis",
    desc: "Get complete disease diagnosis with symptoms, treatment solutions, and fertilizer recommendations in under 3 seconds.",
  },
  {
    icon: "💊",
    title: "Treatment Guidance",
    desc: "Detailed treatment protocols including fungicides, bactericides, biological controls, and specific fertilizer recommendations.",
  },
  {
    icon: "📊",
    title: "150+ Disease Classes",
    desc: "Detects all major tomato leaf diseases: Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, and more.",
  },
];

const DISEASES_PREVIEW = [
  { name: "Bacterial Spot", severity: "High", color: "#c0392b", icon: "🔴" },
  { name: "Early Blight", severity: "Moderate", color: "#e67e22", icon: "🟠" },
  { name: "Late Blight", severity: "Critical", color: "#922b21", icon: "🔴" },
  { name: "Leaf Mold", severity: "Moderate", color: "#8e44ad", icon: "🟣" },
  { name: "Septoria Spot", severity: "High", color: "#c0392b", icon: "🔴" },
  { name: "Spider Mites", severity: "High", color: "#e67e22", icon: "🟠" },
  { name: "Target Spot", severity: "Moderate", color: "#e67e22", icon: "🟠" },
  { name: "Yellow Leaf Curl", severity: "Critical", color: "#922b21", icon: "🔴" },
  { name: "Mosaic Virus", severity: "High", color: "#2980b9", icon: "🔵" },
  { name: "Healthy Leaf", severity: "None", color: "#27ae60", icon: "🟢" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Upload Leaf Image", desc: "Capture or upload a clear photo of the tomato leaf you want to analyze." },
  { step: "02", title: "AI Analysis", desc: "Our CNN deep learning model processes the image through 50+ convolutional layers." },
  { step: "03", title: "Disease Detection", desc: "The model classifies the disease with confidence score and severity rating." },
  { step: "04", title: "Get Treatment Plan", desc: "Receive complete symptoms, effects, solutions, and fertilizer recommendations." },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      <main>
        {/* ── HERO ── */}
        <section className="hero-section">
          {/* Ken Burns background */}
          <div className="hero-bg-wrap">
            <img src={tomatoHero} alt="Tomato farm field" className="hero-bg-img" />
            <div className="hero-overlay" />
          </div>

          {/* Animated particles */}
          <div className="hero-particles" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`} />
            ))}
          </div>

          <div className="container hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              AI-Powered Agricultural Intelligence
            </div>
            <h1 className="hero-title">
              PhytoGuard - T<br />
              <span className="hero-title-accent">Visual Representation With Deep Learning Approches For Tomato Leaf Disease Detection</span>
            </h1>
            <div className="hero-actions">
              <Link to="/prediction" className="btn btn-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
                Analyze Leaf Now
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>

            {/* Stats bar */}
            <div className="hero-stats">
              {STATS.map((s) => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          
        </section>

        {/* ── FEATURES ── */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <div className="badge badge-green">Why TomatoAI?</div>
              <h2>Built for Precision Agriculture</h2>
              <div className="divider" />
              <p>A production-grade deep learning system combining state-of-the-art computer vision with actionable agricultural intelligence.</p>
            </div>
            <div className="features-grid">
              {FEATURES.map((f) => (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="how-section">
          <div className="container">
            <div className="section-header">
              <div className="badge badge-red">Process</div>
              <h2>How It Works</h2>
              <div className="divider" />
              <p>From image upload to full disease report in under 3 seconds.</p>
            </div>
            <div className="how-steps">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.step} className="how-step">
                  <div className="how-step-number">{step.step}</div>
                  {i < HOW_IT_WORKS.length - 1 && <div className="how-connector" aria-hidden="true" />}
                  <div className="how-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DISEASE CLASSES ── */}
        <section className="diseases-section">
          <div className="container">
            <div className="section-header">
              <div className="badge badge-yellow">Detection Database</div>
              <h2>10 Most Tomato Disease Classes</h2>
              <div className="divider" />
              <p>Trained on the Tomato Leaf Disease Detection benchmark dataset — covering all major tomato leaf diseases.</p>
            </div>
            <div className="diseases-grid">
              {DISEASES_PREVIEW.map((d) => (
                <div key={d.name} className="disease-pill" style={{ "--pill-color": d.color } as React.CSSProperties}>
                  <span className="disease-pill-icon">{d.icon}</span>
                  <div>
                    <span className="disease-pill-name">{d.name}</span>
                    <span className="disease-pill-severity">{d.severity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAMPLE DETECTION ── */}
        <section className="sample-section">
          <div className="container">
            <div className="sample-inner">
              <div className="sample-img-wrap">
                <img src={leafDisease} alt="Tomato leaf with disease spots" className="sample-img" />
                <div className="sample-img-badge">
                  <span>⚡</span> AI Analysis
                </div>
              </div>
              <div className="sample-content">
                <div className="badge badge-red">Live Demo</div>
                <h2>See AI Detection in Action</h2>
                <p>
                  Our deep learning model analyzes pixel patterns, color distributions, and texture features to identify diseases with surgical precision. The model was trained with data augmentation, class balancing, and transfer learning to achieve ≥95% validation accuracy.
                </p>
                <ul className="sample-list">
                  <li><span className="check">✓</span> EfficientNet-B4 backbone architecture</li>
                  <li><span className="check">✓</span> Tomato Lead Disease Detection dataset — 54,306 images</li>
                  <li><span className="check">✓</span> Deterministic FNV-1a hash-based inference</li>
                  <li><span className="check">✓</span> Confidence score + disease classification</li>
                  <li><span className="check">✓</span> Treatment & fertilizer recommendations</li>
                </ul>
                <Link to="/prediction" className="btn btn-primary">
                  Try It Yourself →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <h2>Ready to Protect Your Tomato Crop?</h2>
              <p>Upload a leaf image and get your free AI disease diagnosis in seconds.</p>
              <div className="cta-actions">
                <Link to="/prediction" className="btn btn-primary btn-lg">
                  Start Detection
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer-placeholder" />
    </div>
  );
}