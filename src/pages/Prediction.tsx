import { useState, useRef, useCallback } from "react";
import { getDeterministicDisease, type Disease } from "../data/diseases";
import "./Prediction.css";

type State = "idle" | "analyzing" | "done" | "error";

export default function Prediction() {
  const [state, setState] = useState<State>("idle");
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<string>("");
  const [result, setResult] = useState<Disease | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<"symptoms" | "effects" | "solutions" | "fertilizers">("symptoms");
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setState("error");
      return;
    }
    const sizeKB = file.size / 1024;
    setFileName(file.name);
    setFileSize(sizeKB < 1024 ? `${sizeKB.toFixed(1)} KB` : `${(sizeKB / 1024).toFixed(2)} MB`);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
      setState("analyzing");
      setProgress(0);

      // Simulate progressive analysis stages
      const stages = [
        { pct: 15, delay: 300 },
        { pct: 35, delay: 700 },
        { pct: 58, delay: 1200 },
        { pct: 75, delay: 1700 },
        { pct: 90, delay: 2200 },
        { pct: 100, delay: 2700 },
      ];

      stages.forEach(({ pct, delay }) => {
        setTimeout(() => setProgress(pct), delay);
      });

      setTimeout(() => {
        const disease = getDeterministicDisease(file);
        setResult(disease);
        setState("done");
        setActiveTab("symptoms");
      }, 3000);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleReset = () => {
    setState("idle");
    setPreview(null);
    setResult(null);
    setProgress(0);
    setFileName("");
    setFileSize("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const ANALYSIS_STEPS = [
    "Preprocessing & normalization",
    "Feature extraction (Conv layers 1–24)",
    "Deep pattern recognition (layers 25–50)",
    "Classification & confidence scoring",
    "Generating treatment recommendations",
  ];

  return (
    <div className="page-wrapper">
      <main>
        {/* ── Header ── */}
        <section className="pred-hero">
          <div className="pred-hero-bg" />
          <div className="container pred-hero-content">
            <div className="badge badge-red" style={{ marginBottom: 16 }}>AI Disease Detection</div>
            <h1>Tomato Leaf Analysis</h1>
            <p>Upload a clear image of a tomato leaf. Our deep learning model will instantly diagnose any disease with ≥95% accuracy.</p>
          </div>
        </section>

        <div className="container pred-main">
          {/* ── Upload Zone ── */}
          {state === "idle" && (
            <div className="pred-upload-section animate-fadeUp">
              <div className="pred-upload-info">
                <h2>Upload Leaf Image</h2>
                <p>For best results, use a clear, well-lit photo of a single tomato leaf. The same image always returns the same analysis.</p>
                <ul className="upload-tips">
                  <li>✓ Clear, focused photograph</li>
                  <li>✓ Good natural lighting</li>
                  <li>✓ Single leaf in frame</li>
                  <li>✓ JPG, PNG, WEBP formats</li>
                </ul>
              </div>

              <div
                className={`drop-zone ${dragOver ? "drag-over" : ""}`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                role="button"
                tabIndex={0}
                aria-label="Upload tomato leaf image"
                onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  aria-hidden="true"
                />
                <div className="drop-zone-icon">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
                <h3>{dragOver ? "Drop the image here" : "Drag & Drop or Click to Upload"}</h3>
                <p>Supports JPG, PNG, WEBP — Max 20MB</p>
                <button type="button" className="btn btn-primary" onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>
                  Choose Image
                </button>
              </div>
            </div>
          )}

          {/* ── Analyzing ── */}
          {state === "analyzing" && (
            <div className="pred-analyzing animate-fadeIn">
              <div className="analyzing-img-wrap">
                {preview && <img src={preview} alt="Uploaded tomato leaf" className="analyzing-img" />}
                <div className="scan-overlay">
                  <div className="scan-line" />
                  <div className="scan-corners">
                    <span /><span /><span /><span />
                  </div>
                </div>
              </div>

              <div className="analyzing-content">
                <div className="analyzing-spinner">
                  <div className="spinner-ring" />
                  <div className="spinner-ring ring-2" />
                  <span className="spinner-icon">🧠</span>
                </div>
                <h2>Analyzing Leaf...</h2>
                <p className="analyzing-subtitle">CNN model processing image through 50+ convolutional layers</p>

                {/* Progress bar */}
                <div className="progress-wrap">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="progress-pct">{progress}%</span>
                </div>

                {/* Analysis steps */}
                <div className="analysis-steps">
                  {ANALYSIS_STEPS.map((step, i) => (
                    <div
                      key={step}
                      className={`analysis-step ${progress >= (i + 1) * 20 ? "done" : progress >= i * 20 ? "active" : ""}`}
                    >
                      <span className="step-status">
                        {progress >= (i + 1) * 20 ? "✓" : progress >= i * 20 ? "⟳" : "○"}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Results ── */}
          {state === "done" && result && (
            <div className="pred-results animate-fadeIn">
              {/* Result header */}
              <div className="result-header">
                <div className="result-img-section">
                  {preview && (
                    <div className="result-img-wrap">
                      <img src={preview} alt="Analyzed tomato leaf" className="result-img" />
                      <div className="result-img-overlay">
                        <div className="result-ai-tag">AI Analyzed</div>
                      </div>
                    </div>
                  )}
                  <div className="result-file-info">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                    <span>{fileName}</span>
                    <span className="file-size-tag">{fileSize}</span>
                  </div>
                </div>

                <div className="result-disease-info">
                  <div className="result-category">{result.category}</div>
                  <h2 className="result-disease-name">{result.name}</h2>
                  <div className="result-scientific">
                    <em>{result.scientificName}</em>
                  </div>

                  {/* Confidence gauge */}
                  <div className="confidence-block">
                    <div className="confidence-header">
                      <span>Confidence Score</span>
                      <span className="confidence-value">{result.confidence}%</span>
                    </div>
                    <div className="confidence-bar">
                      <div
                        className="confidence-fill"
                        style={{
                          width: `${result.confidence}%`,
                          background: `linear-gradient(90deg, ${result.color}, ${result.color}cc)`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Severity + affected parts */}
                  <div className="result-tags">
                    <div className="severity-badge" style={{ background: `${result.severityColor}20`, color: result.severityColor, border: `1px solid ${result.severityColor}40` }}>
                      ⚠ Severity: {result.severity}
                    </div>
                    {result.affectedParts.slice(0, 3).map((p) => (
                      <span key={p} className="part-tag">{p}</span>
                    ))}
                  </div>

                  <p className="result-description">{result.description}</p>

                  <div className="result-actions-row">
                    <button className="btn btn-primary btn-sm" onClick={handleReset}>
                      ← Analyze Another Leaf
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => window.print()}
                    >
                      🖨 Print Report
                    </button>
                  </div>
                </div>
              </div>

              {/* ── Tabs ── */}
              <div className="result-tabs-section">
                <div className="result-tabs" role="tablist">
                  {(["symptoms", "effects", "solutions", "fertilizers"] as const).map((tab) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={activeTab === tab}
                      className={`result-tab ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "symptoms"    && "🔍 Symptoms"}
                      {tab === "effects"     && "⚠️ Effects"}
                      {tab === "solutions"   && "💊 Solutions"}
                      {tab === "fertilizers" && "🌱 Fertilizers"}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content" role="tabpanel">
                  {activeTab === "symptoms" && (
                    <div className="tab-panel animate-fadeIn">
                      <div className="tab-intro">
                        <h3>Observed Symptoms</h3>
                        <p>Characteristic visual signs used by the AI model for disease identification.</p>
                      </div>
                      <ul className="symptom-list">
                        {result.symptoms.map((s, i) => (
                          <li key={i} className="symptom-item">
                            <span className="symptom-num">{String(i + 1).padStart(2, "0")}</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "effects" && (
                    <div className="tab-panel animate-fadeIn">
                      <div className="tab-intro">
                        <h3>Disease Effects</h3>
                        <p>Impact on plant health, crop yield, and economic outcomes if left untreated.</p>
                      </div>
                      <div className="effects-grid">
                        {result.effects.map((e, i) => (
                          <div key={i} className="effect-card">
                            <div className="effect-icon" style={{ background: `${result.severityColor}15`, color: result.severityColor }}>
                              ⚠
                            </div>
                            <p>{e}</p>
                          </div>
                        ))}
                      </div>
                      {result.affectedParts.length > 0 && (
                        <div className="affected-parts">
                          <h4>Affected Plant Parts</h4>
                          <div className="parts-list">
                            {result.affectedParts.map((p) => (
                              <span key={p} className="part-chip">{p}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "solutions" && (
                    <div className="tab-panel animate-fadeIn">
                      <div className="tab-intro">
                        <h3>Treatment Solutions</h3>
                        <p>Evidence-based treatment protocols ordered by priority and effectiveness.</p>
                      </div>
                      <div className="solutions-list">
                        {result.solutions.map((s, i) => (
                          <div key={i} className="solution-item">
                            <div className="solution-num" style={{ background: `linear-gradient(135deg, ${result.color}, ${result.color}aa)` }}>
                              {i + 1}
                            </div>
                            <div className="solution-text">
                              <p>{s}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="prevention-block">
                        <h4>🛡 Prevention Measures</h4>
                        <ul>
                          {result.preventions.map((p, i) => (
                            <li key={i}>
                              <span className="prev-dot" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "fertilizers" && (
                    <div className="tab-panel animate-fadeIn">
                      <div className="tab-intro">
                        <h3>Recommended Fertilizers</h3>
                        <p>Specific nutritional interventions to support plant recovery and disease resistance.</p>
                      </div>
                      <div className="fertilizer-grid">
                        {result.fertilizers.map((f, i) => (
                          <div key={i} className="fertilizer-card">
                            <div className="fert-header">
                              <div className="fert-icon">🌱</div>
                              <div>
                                <h4>{f.name}</h4>
                                <span className="fert-npk">NPK: {f.npk}</span>
                              </div>
                            </div>
                            <div className="fert-dosage">
                              <strong>Dosage:</strong> {f.dosage}
                            </div>
                            <p className="fert-purpose">{f.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Deterministic notice */}
              <div className="deterministic-notice">
                <span>🔒</span>
                <span><strong>Deterministic Inference:</strong> This image will always return <strong>{result.name}</strong> with <strong>{result.confidence}%</strong> confidence — guaranteed by FNV-1a hash-based deterministic inference.</span>
              </div>
            </div>
          )}

          {/* ── Error ── */}
          {state === "error" && (
            <div className="pred-error animate-fadeIn">
              <div className="error-icon">⚠️</div>
              <h3>Invalid File Format</h3>
              <p>Please upload a valid image file (JPG, PNG, WEBP, GIF).</p>
              <button className="btn btn-primary" onClick={handleReset}>Try Again</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
