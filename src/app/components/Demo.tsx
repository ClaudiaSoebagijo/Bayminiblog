import { useState } from "react";
import { Mic, BarChart2, FileText, Home, ChevronLeft, ChevronRight, MicOff } from "lucide-react";

const screens = [
  {
    title: "Home — Your Daily Check-In",
    desc: "The home screen greets the user by name and shows a glanceable summary of recent logs and the next upcoming appointment. The prominent mic button invites a quick voice log at any moment.",
    ui: <HomeScreen />,
  },
  {
    title: "Voice Logging — Talk Naturally",
    desc: "Tap the mic to start logging. BayMini listens and transcribes in real time. Users can describe how they feel in their own words — no forms, no tapping through menus while in pain.",
    ui: <VoiceScreen />,
  },
  {
    title: "Symptom History — See Your Patterns",
    desc: "A visual timeline of past flare-ups, with severity trends and frequency charts. Users can quickly identify triggers and share this view directly with their doctor.",
    ui: <HistoryScreen />,
  },
  {
    title: "Doctor Report — Ready to Share",
    desc: "One tap generates a clean, structured PDF report of symptom history. Customizable date ranges mean you can prepare exactly what your doctor needs before every visit.",
    ui: <ReportScreen />,
  },
];

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 260, background: "#1a1128", borderRadius: 36, padding: 3, boxShadow: "0 24px 64px rgba(124,58,237,0.3), 0 0 0 1px rgba(124,58,237,0.2)" }}>
      {/* Notch */}
      <div style={{ background: "#7c3aed", borderRadius: "32px 32px 0 0", height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 56, height: 8, background: "#1a1128", borderRadius: 4 }} />
      </div>
      <div style={{ background: "white", minHeight: 480, borderRadius: "0 0 32px 32px", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div style={{ padding: "20px 16px", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column", gap: 14, height: 480 }}>
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, fontSize: "0.75rem", color: "#7c3aed" }}>BayMini</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <div style={{ width: 16, height: 8, border: "1.5px solid #1a1128", borderRadius: 2, position: "relative" }}><div style={{ position: "absolute", left: 2, top: 1.5, width: 8, height: 4, background: "#7c3aed", borderRadius: 1 }} /></div>
        </div>
      </div>
      {/* Greeting */}
      <div>
        <p style={{ fontSize: "0.72rem", color: "#a78bfa", fontWeight: 600, margin: 0, letterSpacing: "0.04em", textTransform: "uppercase" }}>Good morning</p>
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "#1a1128", margin: "2px 0 0" }}>How are you feeling?</h3>
      </div>
      {/* Mini mascot */}
      <div style={{ background: "linear-gradient(135deg, #ede9fe, #f3f0ff)", borderRadius: 16, padding: "12px", textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: 4 }}>🟣</div>
        <p style={{ fontSize: "0.72rem", color: "#7c3aed", fontWeight: 700, margin: 0 }}>Tap to log a symptom</p>
      </div>
      {/* Mic button */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}>
          <Mic size={22} color="white" />
        </div>
      </div>
      {/* Recent logs */}
      <div>
        <p style={{ fontSize: "0.7rem", color: "#a78bfa", fontWeight: 700, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Recent</p>
        {["Joint pain · 2h ago", "Fatigue · Yesterday"].map((log, i) => (
          <div key={i} style={{ background: "#faf8ff", borderRadius: 10, padding: "8px 12px", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#a78bfa", flexShrink: 0 }} />
            <span style={{ fontSize: "0.75rem", color: "#4a4060", fontWeight: 600 }}>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VoiceScreen() {
  return (
    <div style={{ padding: "20px 16px", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column", gap: 18, alignItems: "center", height: 480 }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <ChevronLeft size={18} color="#a78bfa" />
        <span style={{ fontWeight: 700, fontSize: "0.75rem", color: "#7c3aed" }}>Voice Log</span>
        <MicOff size={16} color="#a78bfa" />
      </div>
      {/* Waveform visual */}
      <div style={{ background: "linear-gradient(160deg, #1a1128, #2d1b5e)", borderRadius: 20, width: "100%", height: 120, display: "flex", alignItems: "center", justifyContent: "center", gap: 3, padding: "0 16px" }}>
        {Array.from({ length: 24 }).map((_, i) => {
          const h = [4, 8, 14, 22, 30, 22, 16, 28, 36, 28, 18, 10, 22, 34, 26, 14, 20, 30, 22, 16, 10, 18, 12, 6][i];
          return <div key={i} style={{ width: 4, height: h, background: i > 10 ? "#c4b5fd" : "#7c3aed", borderRadius: 2, opacity: i > 16 ? 0.35 : 1 }} />;
        })}
      </div>
      {/* Transcript */}
      <div style={{ background: "#faf8ff", borderRadius: 14, padding: "12px 14px", width: "100%", border: "1.5px solid rgba(124,58,237,0.12)" }}>
        <p style={{ fontSize: "0.72rem", color: "#a78bfa", fontWeight: 700, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Transcribing…</p>
        <p style={{ fontSize: "0.82rem", color: "#1a1128", lineHeight: 1.55, margin: 0 }}>"I'm having really sharp pain in my left knee, about a 7 out of 10. It started about an hour ago after walking."</p>
      </div>
      {/* Detected symptoms */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
        {["Joint pain", "Severity: 7/10", "Left knee", "1h duration"].map((tag) => (
          <span key={tag} style={{ background: "#ede9fe", color: "#7c3aed", borderRadius: 999, padding: "4px 10px", fontSize: "0.7rem", fontWeight: 700 }}>{tag}</span>
        ))}
      </div>
      {/* Stop button */}
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px rgba(124,58,237,0.15)", marginTop: 4 }}>
        <Mic size={22} color="white" />
      </div>
      <p style={{ fontSize: "0.7rem", color: "#a78bfa", margin: 0, fontWeight: 600 }}>Tap to stop</p>
    </div>
  );
}

function HistoryScreen() {
  const bars = [3, 5, 2, 7, 4, 6, 3, 8, 5, 4, 6, 3, 7, 5];
  return (
    <div style={{ padding: "20px 16px", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column", gap: 14, height: 480 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#1a1128", fontFamily: "'Nunito', sans-serif" }}>Symptom History</span>
        <span style={{ fontSize: "0.7rem", color: "#a78bfa", fontWeight: 600 }}>May 2025</span>
      </div>
      {/* Chart */}
      <div style={{ background: "#faf8ff", borderRadius: 14, padding: "12px 14px", border: "1.5px solid rgba(124,58,237,0.08)" }}>
        <p style={{ fontSize: "0.65rem", color: "#a78bfa", fontWeight: 700, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Flare-ups this month</p>
        <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 50 }}>
          {bars.map((b, i) => (
            <div key={i} style={{ flex: 1, height: `${b * 12}%`, background: i === 7 ? "#7c3aed" : "#c4b5fd", borderRadius: "3px 3px 0 0", minHeight: 4 }} />
          ))}
        </div>
      </div>
      {/* Logs */}
      {[
        { day: "Today", symptoms: "Fatigue, brain fog", severity: "Moderate" },
        { day: "Yesterday", symptoms: "Joint pain", severity: "Severe" },
        { day: "May 28", symptoms: "Headache, nausea", severity: "Mild" },
      ].map((log) => (
        <div key={log.day} style={{ background: "white", border: "1.5px solid rgba(124,58,237,0.1)", borderRadius: 12, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.78rem", color: "#1a1128", margin: 0 }}>{log.day}</p>
            <p style={{ fontSize: "0.7rem", color: "#6b5fa3", margin: 0 }}>{log.symptoms}</p>
          </div>
          <span style={{ background: log.severity === "Severe" ? "#ede9fe" : log.severity === "Moderate" ? "#f3f0ff" : "#f9f7ff", color: log.severity === "Severe" ? "#7c3aed" : "#a78bfa", fontSize: "0.65rem", fontWeight: 700, padding: "3px 8px", borderRadius: 999 }}>{log.severity}</span>
        </div>
      ))}
    </div>
  );
}

function ReportScreen() {
  return (
    <div style={{ padding: "20px 16px", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column", gap: 14, height: 480 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#1a1128", fontFamily: "'Nunito', sans-serif" }}>Doctor Report</span>
        <span style={{ background: "#ede9fe", color: "#7c3aed", fontSize: "0.65rem", fontWeight: 700, padding: "3px 8px", borderRadius: 999 }}>Ready</span>
      </div>
      {/* Report preview */}
      <div style={{ background: "linear-gradient(160deg, #7c3aed, #5b21b6)", borderRadius: 14, padding: "16px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <FileText size={16} color="rgba(255,255,255,0.8)" />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.05em" }}>BayMini Report</span>
        </div>
        <p style={{ fontWeight: 800, fontSize: "0.9rem", margin: "0 0 2px" }}>Sarah's Symptom Summary</p>
        <p style={{ fontSize: "0.7rem", opacity: 0.7, margin: 0 }}>May 1 – June 2, 2025 · 23 entries</p>
      </div>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          { label: "Total logs", value: "23" },
          { label: "Avg severity", value: "5.8/10" },
          { label: "Top symptom", value: "Fatigue" },
          { label: "Peak day", value: "Tue–Thu" },
        ].map((s) => (
          <div key={s.label} style={{ background: "#faf8ff", borderRadius: 10, padding: "10px 12px", border: "1.5px solid rgba(124,58,237,0.08)" }}>
            <p style={{ fontSize: "0.65rem", color: "#a78bfa", fontWeight: 700, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1rem", color: "#1a1128", margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>
      {/* Share button */}
      <div style={{ background: "#7c3aed", borderRadius: 12, padding: "12px", textAlign: "center", marginTop: "auto" }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: "0.82rem" }}>Share with Doctor</span>
      </div>
    </div>
  );
}

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
            Key screens from our high-fidelity prototype — designed to minimize friction and maximize recall.
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
          {/* Phone mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PhoneShell>{cur.ui}</PhoneShell>
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
