import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{
    minHeight: "100vh", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", textAlign: "center",
    padding: "40px 24px", background: "var(--color-bg)",
    paddingTop: "calc(var(--header-height) + 40px)"
  }}>
    <div style={{ fontSize: "5rem", marginBottom: "16px" }}>🍅</div>
    <h1 style={{ fontSize: "6rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1 }}>404</h1>
    <h2 style={{ marginBottom: "16px", color: "var(--color-dark)" }}>Page Not Found</h2>
    <p style={{ color: "var(--color-text-muted)", marginBottom: "32px", maxWidth: "400px" }}>
      The page you're looking for doesn't exist. Head back to the home page or analyze a tomato leaf.
    </p>
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
      <Link to="/" className="btn btn-primary">← Back to Home</Link>
      <Link to="/prediction" className="btn btn-secondary">Analyze a Leaf</Link>
    </div>
  </div>
);

export default NotFound;
