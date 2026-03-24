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

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) return;

  setFormState("sending");

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await res.json();
    console.log("Response:", data);

    setFormState("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "general",
      message: "",
    });

  } catch (error) {
    console.error("Error:", error);
    setFormState("error");
  }
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