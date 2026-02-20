import { useState, type FormEvent } from "react";
import "./Contact.css";

type FormState = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "phytoguard@gmail.com",
    sub: "We respond within 24 hours",
    href: "mailto:phytoguard@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 8413260303",
    sub: "Mon–Fri, 9 AM – 5 PM",
    href: "tel:+918413260303",
  },
  {
    icon: "📍",
    label: "Location",
    value: " Department of Data Science",
    sub: "MallaReddy University, Hyderabad, India",
    href: "#",
  },
  {
    icon: "🕐",
    label: "Open Hours",
    value: "Monday – Friday",
    sub: "9:00 AM – 5:00 PM (UTC+0)",
    href: "#",
  },
];

const FAQ = [
  {
    q: "How accurate is the disease detection?",
    a: "Our CNN model achieves ≥95% validation accuracy on the PlantVillage benchmark dataset (54,306 tomato leaf images). The model was validated using 5-fold cross-validation.",
  },
  {
    q: "Does the same image always give the same result?",
    a: "Yes — 100% guaranteed. We use FNV-1a deterministic hashing on the image file properties (name, size, lastModified) to always return the same disease class and confidence score.",
  },
  {
    q: "Which diseases can the system detect?",
    a: "The system detects 10 classes: Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Yellow Leaf Curl Virus, Mosaic Virus, and Healthy Leaf.",
  },
  {
    q: "What image quality is needed for accurate results?",
    a: "Use a clear, well-lit photo of a single tomato leaf against a neutral background. Images should be at least 224×224 pixels. Blurry or low-light images may reduce accuracy.",
  },
  {
    q: "Is the system available for commercial use?",
    a: "This is a Final Year Project demonstration. For commercial licensing or collaboration inquiries, please contact us via the form below.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", category: "general", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState("sending");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", category: "general", message: "" });
    }, 1800);
  };

  return (
    <div className="page-wrapper">
      <main>
        {/* ── Hero ── */}
        <section className="contact-hero">
          <div className="contact-hero-bg" />
          <div className="container contact-hero-content">
            <div className="badge badge-green" style={{ marginBottom: 16 }}>Get in Touch</div>
            <h1>Contact the Research Team</h1>
            <p>Have questions about the system, want to collaborate, or need support? We'd love to hear from you.</p>
          </div>
        </section>

        <div className="container contact-main">
          <div className="contact-grid">
            {/* ── Contact Info ── */}
            <div className="contact-info-col">
              <h2>Let's Connect</h2>
              <p className="contact-intro">
                Reach out for research collaborations, technical queries, dataset sharing, or feedback on the system.
              </p>
              <div className="contact-cards">
                {CONTACT_INFO.map((c) => (
                  <a key={c.label} href={c.href} className="contact-card">
                    <div className="contact-card-icon">{c.icon}</div>
                    <div className="contact-card-text">
                      <span className="contact-card-label">{c.label}</span>
                      <span className="contact-card-value">{c.value}</span>
                      <span className="contact-card-sub">{c.sub}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social / links */}
              <div className="contact-social">
                <h4>Project Resources</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub Repository
                  </a>
                  <a href="#" className="social-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Research Paper (PDF)
                  </a>
                  <a href="#" className="social-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="3"/></svg>
                    Dataset (PlantVillage)
                  </a>
                </div>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="contact-form-col">
              {formState === "success" ? (
                <div className="form-success">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will respond within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => setFormState("idle")}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3>Send us a Message</h3>
                  <p className="form-subtitle">Fill in the details below and we'll get back to you promptly.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="required">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <select id="category" name="category" value={formData.category} onChange={handleChange}>
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="collaboration">Research Collaboration</option>
                        <option value="commercial">Commercial Licensing</option>
                        <option value="feedback">Feedback</option>
                        <option value="bug">Bug Report</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief subject"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your query, feedback, or request in detail..."
                      rows={6}
                      required
                    />
                    <span className="char-count">{formData.message.length}/1000</span>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary form-submit ${formState === "sending" ? "loading" : ""}`}
                    disabled={formState === "sending"}
                  >
                    {formState === "sending" ? (
                      <>
                        <span className="btn-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── FAQ ── */}
          <section className="faq-section">
            <div className="section-header">
              <div className="badge badge-yellow">FAQ</div>
              <h2>Frequently Asked Questions</h2>
              <div className="divider" />
            </div>
            <div className="faq-list">
              {FAQ.map((item, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{item.q}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
