const bayMiniImage = new URL("./assets/BayMini.png", import.meta.url).href;

const TEAM = [
  { initial: "Y", name: "Yi", hue: 305 },
  { initial: "A", name: "Anna", hue: 245 },
  { initial: "C", name: "Claudia", hue: 260 },
  { initial: "K", name: "Kevin", hue: 290 },
  { initial: "S", name: "Sahana", hue: 275 },
];

export function Hero() {
  return (
    <section id="overview" style={{ background: "linear-gradient(155deg, #faf8ff 0%, #ede9fe 55%, #f5f3ff 100%)", minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* bg blobs */}
      <div style={{ position: "absolute", top: "10%", left: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "12%", right: "6%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-28 pb-20">
        {/* Mascot */}
        <div style={{ filter: "drop-shadow(0 12px 32px rgba(124,58,237,0.28))" }}>
          <img
            src={bayMiniImage}
            alt="BayMini device"
            width={220}
            height={220}
            style={{ width: 220, height: 220, objectFit: "contain", animation: "mascotFloat 3.2s ease-in-out infinite" }}
          />
          <style>{`@keyframes mascotFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }`}</style>
        </div>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ede9fe", color: "#7c3aed", borderRadius: 999, padding: "6px 16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          CSE 440 — Human Computer Interaction
        </div>

        {/* Title */}
        <div>
          <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem, 10vw, 6rem)", lineHeight: 0.95, color: "#1a1128", letterSpacing: "-0.04em", margin: 0 }}>
            Bay<span style={{ color: "#7c3aed" }}>Mini</span>
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#6b5fa3", marginTop: "1rem", lineHeight: 1.55, maxWidth: "38ch", marginLeft: "auto", marginRight: "auto" }}>
            Your voice-powered companion that remembers every symptom, so your doctor gets the full picture.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#solution" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7c3aed", color: "white", borderRadius: 999, padding: "14px 28px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 6px 28px rgba(124,58,237,0.38)", transition: "transform 0.15s, box-shadow 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 36px rgba(124,58,237,0.45)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(124,58,237,0.38)"; }}>
            See the Solution
          </a>
          <a href="#process" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#7c3aed", border: "2px solid #7c3aed", borderRadius: 999, padding: "13px 28px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ede9fe"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
            Our Process
          </a>
        </div>

        {/* Team avatars */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
          <div style={{ display: "flex" }}>
            {TEAM.map((m, i) => (
              <div key={m.name} style={{ width: 40, height: 40, borderRadius: "50%", border: "2.5px solid white", background: `hsl(${m.hue}, 60%, 52%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "white", marginLeft: i === 0 ? 0 : -10, boxShadow: "0 2px 8px rgba(0,0,0,0.12)", zIndex: TEAM.length - i, position: "relative" }}>
                {m.initial}
              </div>
            ))}
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6b5fa3", fontSize: "0.875rem", fontWeight: 600 }}>
            Yi · Anna · Claudia · Kevin · Sahana
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 28, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, animation: "scrollBounce 2s ease-in-out infinite" }}>
        <style>{`@keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }`}</style>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", color: "#a78bfa", letterSpacing: "0.1em", fontWeight: 700, textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #a78bfa, transparent)" }} />
      </div>
    </section>
  );
}
