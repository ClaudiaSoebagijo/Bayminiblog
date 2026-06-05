import { AlertCircle, Lightbulb, Mic, FileText, ClipboardList } from "lucide-react";

const conceptVideo = new URL("./assets/baymini.mov", import.meta.url).href;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ede9fe", color: "#7c3aed", borderRadius: 999, padding: "5px 14px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
      {children}
    </div>
  );
}

export function Problem() {
  return (
    <section id="problem" style={{ background: "#ffffff", padding: "96px 24px" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionLabel><AlertCircle size={13} /> The Problem</SectionLabel>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1a1128", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
              Chronic illness makes doctor visits a guessing game.
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "1.05rem", color: "#4a4060", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Patients with chronic illness face serious difficulties keeping track of their flare-up symptoms and when they finally get to a doctor's appointment, they can't accurately recall what they experienced days or weeks ago.
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "1.05rem", color: "#4a4060", lineHeight: 1.75 }}>
              This gap between lived experience and clinical recall leads to misdiagnoses, under-treatment, and patients feeling unheard.
            </p>
          </div>

          {/* Visual stat cards */}
          <div className="flex flex-col gap-4">
            {[
              { stat: "60%", label: "of chronic illness patients report forgetting key symptoms before appointments", color: "#7c3aed" },
              { stat: "2×", label: "longer to get accurate diagnosis without consistent symptom tracking", color: "#a78bfa" },
              { stat: "52%", label: "patients feel their doctor doesn't fully understand their condition", color: "#6d28d9" },
            ].map((item) => (
              <div key={item.stat} style={{ background: "#faf8ff", border: "1.5px solid rgba(124,58,237,0.12)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "2rem", color: item.color, whiteSpace: "nowrap" }}>{item.stat}</div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: "#6b5fa3", lineHeight: 1.5, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  const features = [
    { icon: <Mic size={22} color="#7c3aed" />, title: "Voice Interaction", desc: "Talk to BayMini naturally during a flare-up, no typing needed when you're in pain." },
    { icon: <ClipboardList size={22} color="#7c3aed" />, title: "Customizable Questions", desc: "Pre-loaded symptom prompts you can tailor to your specific condition and triggers." },
    { icon: <FileText size={22} color="#7c3aed" />, title: "Doctor-Ready Reports", desc: "Auto-generated summaries so your experience is accurately conveyed at every visit." },
  ];

  return (
    <section id="solution" style={{ background: "linear-gradient(160deg, #faf8ff 0%, #f3f0ff 100%)", padding: "96px 24px" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Feature cards */}
          <div className="flex flex-col gap-5 order-2 md:order-1">
            {features.map((f) => (
              <div key={f.title} style={{ background: "white", border: "1.5px solid rgba(124,58,237,0.1)", borderRadius: 18, padding: "22px 24px", display: "flex", gap: 18, alignItems: "flex-start", boxShadow: "0 2px 16px rgba(124,58,237,0.06)" }}>
                <div style={{ background: "#ede9fe", borderRadius: 12, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#1a1128", margin: "0 0 4px 0" }}>{f.title}</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: "#6b5fa3", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}

            <div style={{ background: "#1a1128", borderRadius: 18, overflow: "hidden", position: "relative", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(124,58,237,0.3)" }}>
              <video controls loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src={conceptVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <SectionLabel><Lightbulb size={13} /> The Solution</SectionLabel>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1a1128", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
              A little companion with a big memory.
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "1.05rem", color: "#4a4060", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              BayMini is a companion device you can verbally interact with to track your symptoms the moment you experience them, no friction, no forgetting.
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "1.05rem", color: "#4a4060", lineHeight: 1.75 }}>
              The app lets you log symptoms with customizable pre-set questions. At your next doctor visit, BayMini generates an accurate report so your doctor gets the full picture, not just what you can remember under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
