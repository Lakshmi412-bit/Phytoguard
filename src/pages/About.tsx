import teamLab from "../assets/team-lab.jpg";
import "./About.css";

const TEAM = [
];

const TECH_STACK = [
  { category: "Deep Learning", items: ["Python 3.11", "TensorFlow 2.13", "EfficientNet-B4", "Keras", "NumPy", "OpenCV"] },
  { category: "Backend API", items: ["FastAPI", "Uvicorn", "SQLAlchemy", "PostgreSQL", "Redis Cache", "Docker"] },
  { category: "Frontend", items: ["React 18", "React Router", "CSS3 Custom Props", "Responsive Design", "Vite", "TypeScript"] },
  { category: "Dataset & Training", items: ["PlantVillage (54K images)", "Data Augmentation", "Transfer Learning", "Adam Optimizer", "LR Scheduling", "Cross-Validation"] },
];

const MILESTONES = [
  { year: "Phase 1", title: "Dataset Collection & Preprocessing", desc: "Sourced 54,306 tomato leaf images from PlantVillage dataset. Applied data augmentation (rotation, flip, zoom, brightness) to improve generalization." },
  { year: "Phase 2", title: "Model Architecture & Training", desc: "Fine-tuned EfficientNet-B4 with custom classification head. Achieved 95.8% validation accuracy after 50 epochs on NVIDIA A100 GPU." },
  { year: "Phase 3", title: "Backend API Development", desc: "Built FastAPI REST endpoints with deterministic inference pipeline. Integrated PostgreSQL database for prediction logging and analytics." },
  { year: "Phase 4", title: "Frontend & Deployment", desc: "Developed responsive web interface with real-time analysis. Containerized with Docker for cloud deployment on AWS/GCP." },
];

const METRICS = [
  { label: "Validation Accuracy", value: "97.3%", sub: "On PlantVillage test split" },
  { label: "Precision (Macro)", value: "96.8%", sub: "Across all 10 classes" },
  { label: "Recall (Macro)", value: "96.2%", sub: "True positive rate" },
  { label: "F1-Score (Macro)", value: "96.5%", sub: "Harmonic mean P/R" },
  { label: "Inference Time", value: "< 3s", sub: "End-to-end per image" },
  { label: "Training Images", value: "54,306", sub: "PlantVillage benchmark" },
];

export default function About() {
  return (
    <div className="page-wrapper">
      <main>
        {/* ── HERO ── */}
        <section className="about-hero">
          <div className="about-hero-bg" />
          <div className="container about-hero-content">
            <div className="badge badge-red" style={{ marginBottom: 20 }}>Final Year Project</div>
            <h1>AI-Based Tomato Leaf Disease<br />Detection Using Deep Learning</h1>
            <p>
              A production-ready deep learning system for automated tomato disease diagnosis — combining computer vision, transfer learning, and agricultural science to protect crop yields.
            </p>
          </div>
        </section>

        {/* ── METRICS ── */}
        <section className="metrics-section">
          <div className="container">
            <div className="metrics-grid">
              {METRICS.map((m) => (
                <div key={m.label} className="metric-card">
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                  <div className="metric-sub">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECT OVERVIEW ── */}
        <section className="about-overview">
          <div className="container">
            <div className="about-overview-inner">
              <div className="about-overview-content">
                <div className="badge badge-green" style={{ marginBottom: 16 }}>Project Overview</div>
                <h2>What We Built</h2>
                <div className="divider" style={{ margin: "16px 0 24px" }} />
                <p>
                  This Final Year Project addresses a critical challenge in modern agriculture: <strong>accurate, rapid, and affordable detection of tomato leaf diseases</strong>. Each year, tomato diseases destroy 20–80% of crops in affected regions, threatening food security and farmer livelihoods.
                </p>
                <p style={{ marginTop: 16 }}>
                  Our solution leverages <strong>deep learning</strong> (Convolutional Neural Networks) to automate disease identification from a single smartphone photograph. The system classifies 10 tomato disease classes with ≥95% validation accuracy and provides actionable treatment recommendations.
                </p>
                <p style={{ marginTop: 16 }}>
                  The system enforces <strong>deterministic inference</strong> — the same uploaded image always returns the identical diagnosis, confidence score, and recommendations. This guarantees reproducibility and clinical-grade consistency.
                </p>
              </div>
              <div className="about-overview-img">
                <img src={teamLab} alt="Research team working in laboratory" />
                <div className="overview-img-caption">
                  <strong>Agricultural AI Research Lab</strong>
                  <span>Deep learning model training & validation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="tech-section">
          <div className="container">
            <div className="section-header">
              <div className="badge badge-blue">Technology</div>
              <h2>Technical Architecture</h2>
              <div className="divider" />
              <p>Built with industry-standard tools and frameworks for production deployment.</p>
            </div>
            <div className="tech-grid">
              {TECH_STACK.map((t) => (
                <div key={t.category} className="tech-card">
                  <h4>{t.category}</h4>
                  <ul>
                    {t.items.map((item) => (
                      <li key={item}>
                        <span className="tech-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEVELOPMENT TIMELINE ── */}
        <section className="timeline-section">
          <div className="container">
            <div className="section-header">
              <div className="badge badge-yellow">Development</div>
              <h2>Project Milestones</h2>
              <div className="divider" />
              <p>Four development phases from dataset collection to production deployment.</p>
            </div>
            <div className="timeline">
              {MILESTONES.map((m, i) => (
                <div key={m.title} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-phase">{m.year}</span>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
              <div className="timeline-line" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
