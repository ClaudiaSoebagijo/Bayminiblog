const bayMiniFooter = new URL("./assets/BayMini.png", import.meta.url).href;

export function Footer() {
  return (
    <footer style={{ background: "#1a1128", padding: "60px 24px 40px", textAlign: "center" }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <img src={bayMiniFooter} alt="BayMini" style={{ width: 64, height: 64, objectFit: "cover" }} />
        <div>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
            Bay<span style={{ color: "#a78bfa" }}>Mini</span>
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: "rgba(196,181,253,0.6)", margin: 0 }}>
            Your voice-powered chronic illness companion.
          </p>
        </div>
        <div style={{ width: "100%", height: 1, background: "rgba(124,58,237,0.2)" }} />
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", color: "rgba(196,181,253,0.45)", margin: 0 }}>
          © 2026 BayMini — CSE 440, University of Washington · Yi, Anna, Claudia, Kevin, Sahana
        </p>
      </div>
    </footer>
  );
}
