import { useState } from "react";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";

const homeScreen = new URL("./assets/home.png", import.meta.url).href;
const loggingScreen = new URL("./assets/logging.png", import.meta.url).href;
const chatScreen = new URL("./assets/chat.png", import.meta.url).href;
const reportScreen = new URL("./assets/report.png", import.meta.url).href;
const bayMini = new URL("./assets/baymini.png", import.meta.url).href;

const screens = [
  {
    title: "Device — Your little companion",
    desc: "Our little companion device that you can speak with to log your symptom during a flare-up.",
    image: bayMini,
  },
  {
    title: "Home — Your Daily Check-In",
    desc: "The home screen greets the user by name and shows a glanceable summary of recent logs and the next upcoming appointment.",
    image: homeScreen,
  },
  {
    title: "Logging — Track Symptoms",
    desc: "The in-app feature guides you through pre-determined questions to most accurately keep track of your flare ups.",
    image: loggingScreen,
  },
  {
    title: "Chat — Clarify further questions",
    desc: "A chatbot feature with BayMini to ask clarifying questions about your triggers or your flare ups.",
    image: chatScreen,
  },
  {
    title: "Doctor Report — Ready to Share",
    desc: "One tap generates a clean, structured PDF report of symptom history. Customizable date ranges mean you can prepare exactly what your doctor needs before every visit.",
    image: reportScreen,
  },
];

export function Demo() {
  const [active, setActive] = useState(0);
  const cur = screens[active];

  return (
    <section id="demo" style={{ background: "linear-gradient(160deg, #1a1128 0%, #2d1b5e 100%)", padding: "96px 24px" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(167,139,250,0.2)", color: "#c4b5fd", borderRadius: 999, padding: "5px 14px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            <Home size={13} /> Product Demo
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "white", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px 0" }}>
            See BayMini in action.
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", color: "#c4b5fd", lineHeight: 1.65, maxWidth: "48ch", margin: "0 auto" }}>
            Key screens from our high-fidelity prototype, designed to minimize friction and maximize recall.
          </p>
        </div>

        {/* Screen switcher tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {screens.map((s, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ background: i === active ? "#7c3aed" : "rgba(124,58,237,0.15)", color: i === active ? "white" : "#c4b5fd", border: i === active ? "none" : "1.5px solid rgba(124,58,237,0.3)", borderRadius: 999, padding: "8px 18px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer", transition: "all 0.2s" }}>
              {i + 1}. {s.title.split("—")[0].trim()}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Screen mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 280, borderRadius: 32, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.18)" }}>
              <img src={cur.image} alt={cur.title} style={{ width: "100%", display: "block" }} />
            </div>
          </div>

          {/* Description */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "rgba(167,139,250,0.25)", lineHeight: 1 }}>0{active + 1}</div>
            </div>
            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 16px 0" }}>{cur.title}</h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", color: "#c4b5fd", lineHeight: 1.75, margin: "0 0 32px 0" }}>{cur.desc}</p>

            {/* Navigation arrows */}
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setActive(Math.max(0, active - 1))}
                disabled={active === 0}
                style={{ width: 44, height: 44, borderRadius: "50%", background: active === 0 ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.3)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: active === 0 ? "default" : "pointer", opacity: active === 0 ? 0.4 : 1 }}>
                <ChevronLeft size={18} color="white" />
              </button>
              <button onClick={() => setActive(Math.min(screens.length - 1, active + 1))}
                disabled={active === screens.length - 1}
                style={{ width: 44, height: 44, borderRadius: "50%", background: active === screens.length - 1 ? "rgba(124,58,237,0.1)" : "#7c3aed", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: active === screens.length - 1 ? "default" : "pointer", opacity: active === screens.length - 1 ? 0.4 : 1 }}>
                <ChevronRight size={18} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
