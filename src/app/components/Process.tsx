import { useState } from "react";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";

const assignment1Pdf = new URL("./assets/2a.pdf", import.meta.url).href;
const assignment2Pdf = new URL("./assets/2b.pdf", import.meta.url).href;
const assignment3Pdf = new URL("./assets/2c.pdf", import.meta.url).href;
const assignment4Pdf = new URL("./assets/2d.pdf", import.meta.url).href;
const assignment5Pdf = new URL("./assets/2e.pdf", import.meta.url).href;
const assignment6Pdf = new URL("./assets/2f.pdf", import.meta.url).href;
const assignment7Pdf = new URL("./assets/2g.pdf", import.meta.url).href;
const assignment8Pdf = new URL("./assets/2g.pdf", import.meta.url).href;
const assignment9Pdf = new URL("./assets/3a.pdf", import.meta.url).href;
const assignment10Pdf = new URL("./assets/3c.pdf", import.meta.url).href;

const steps = [
  {
    phase: "01",
    title: "Project Ideation",
    date: "Assignment 1",
    summary: "We brainstormed problems worth solving and converged on chronic illness symptom tracking after exploring the lived experiences of patients in our network.",
    bullets: [
      "Generated 30+ problem space candidates through group brainstorming",
      "Voted and narrowed to health-tech based on user need and feasibility",
      "Defined initial problem framing: the gap between lived symptom experience and clinical recall",
      "Established team norms and project management approach",
    ],
    docLabel: "Project Ideation PDF",
    docUrl: assignment1Pdf,
  },
  {
    phase: "02",
    title: "Design Research Plan",
    date: "Assignment 2",
    summary: "Planned our qualitative research methodology — who to talk to, what to ask, and how to synthesize findings into actionable design insights.",
    bullets: [
      "Identified target participant groups: chronic illness patients",
      "Wrote interview guides focused on symptom-logging habits and doctor visit preparation",
      "Chose semi-structured interviews and contextual inquiry as primary methods",
      "Defined research goals and success criteria",
    ],
    docLabel: "Design Research Plan PDF",
    docUrl: assignment2Pdf,
  },
  {
    phase: "03",
    title: "Design Research Review",
    date: "Assignment 3",
    summary: "Conducted 5 user interviews and synthesized findings into affinity diagrams, personas, and key design insights that shaped our entire solution.",
    bullets: [
      "3 semi-structured interviews with chronic illness patients",
      "Affinity mapping revealed 3 core themes: memory burden, emotional fatigue, doctor-patient disconnect",
      "Created 2 primary personas: 'The Overwhelmed Tracker' and 'The Silent Sufferer'",
      "Key insight: in-the-moment, low-effort logging is more valuable than any retrospective tool",
    ],
    docLabel: "Design Research Review PDF",
    docUrl: assignment3Pdf,
  },
  {
    phase: "04",
    title: "Task Analysis",
    date: "Assignment 4",
    summary: "Decomposed the core user journeys into hierarchical task flows, identifying where existing tools fail and where BayMini could intervene.",
    bullets: [
      "Identified 4 critical tasks: log a symptom, review history, prepare for appointment, share with doctor",
      "HTA (Hierarchical Task Analysis) for the voice logging flow",
      "Mapped failure points in current patient workflows",
      "Task prioritization matrix informed by research data",
    ],
    docLabel: "Task Analysis PDF",
    docUrl: assignment4Pdf,
  },
  {
    phase: "05",
    title: "Design Check-In (3×4)",
    date: "Assignment 5",
    summary: "Three rounds of 4-sketch ideation: each team member produced 4 divergent design concepts per round, followed by structured critique.",
    bullets: [
      "Round 1: 20 individual sketches exploring companion device vs. pure app vs. wearable",
      "Round 2: refined concepts with scenario storyboards",
      "Round 3: converged on companion device + app ecosystem",
      "Key pivot: physical companion device emerged as the preferred modality for in-the-moment logging",
    ],
    docLabel: "Design Check-In PDF",
    docUrl: assignment5Pdf,
  },
  {
    phase: "06",
    title: "Design Review (1×2)",
    date: "Assignment 6",
    summary: "Presented two polished design directions to peers and instructors for structured critique. Received feedback that shaped our final concept.",
    bullets: [
      "Direction A: ambient bedside device with passive sensing",
      "Direction B: active voice companion + mobile app (selected)",
      "Feedback highlighted need for clear customization controls",
      "Instructors recommended simplifying the report generation step",
    ],
    docLabel: "Design Review PDF",
    docUrl: assignment6Pdf,
  },
  {
    phase: "07",
    title: "Concept Video",
    date: "Assignment 7",
    summary: "Produced a short narrative video showing BayMini in a real-world scenario: a flare-up at home, logging with the device, and sharing a report at a clinic.",
    bullets: [
      "Wrote and storyboarded a 90-second scenario script",
      "Filmed at home and on-campus locations",
      "Narrated to emphasize emotional journey alongside the product interaction",
      "Video embedded on this site and presented in class",
    ],
    docLabel: "Concept Video",
    docUrl: assignment7Pdf,
  },
  {
    phase: "08",
    title: "Paper Prototype",
    date: "Assignment 8",
    summary: "Built a hands-on paper prototype of the companion device and mobile app, used in the first round of usability testing.",
    bullets: [
      "Paper prototype of physical device with interchangeable screen states",
      "Mobile app flows: onboarding, voice log, history view, report generation",
      "4 usability sessions using think-aloud protocol",
      "Identified top 3 issues: unclear mic activation, confusing history navigation, report format ambiguity",
    ],
    docLabel: "Paper Prototype PDF",
    docUrl: assignment8Pdf,
  },
  {
    phase: "09",
    title: "Usability Testing",
    date: "Assignment 9",
    summary: "Two rounds of structured usability testing with 8 participants total. Measured task completion, error rates, and satisfaction across key flows.",
    bullets: [
      "Round 1 (paper): 4 participants, think-aloud, identified navigation issues",
      "Heuristic evaluation: 8 violations across visibility, feedback, and error recovery",
      "Round 2 (digital mockup): 4 participants, SUS score improved from 62 → 81",
      "Final changes: one-tap mic start, simplified history calendar, streamlined report wizard",
    ],
    docLabel: "Usability Testing PDF",
    docUrl: assignment9Pdf,
  },
  {
    phase: "10",
    title: "Digital Mockup",
    date: "Assignment 10",
    summary: "High-fidelity Figma prototype incorporating all research and evaluation learnings — the design you see in the Demo section above.",
    bullets: [
      "Full high-fidelity prototype across 4 primary flows",
      "Consistent design system: purple palette, Nunito + Plus Jakarta Sans typography",
      "Reduced average symptom log time from 2.1 min → 42 sec",
      "Presented to class panel; received commendation for accessibility considerations",
    ],
    docLabel: "Digital Mockup PDF",
    docUrl: assignment10Pdf,
  },
];

export function Process() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="process" style={{ background: "#ffffff", padding: "96px 24px" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ede9fe", color: "#7c3aed", borderRadius: 999, padding: "5px 14px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            <FileText size={13} /> Our Process
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1a1128", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px 0" }}>
            From insight to interface.
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", color: "#6b5fa3", lineHeight: 1.65, maxWidth: "52ch", margin: "0 auto" }}>
            Ten assignments across a full semester of CSE 440 — research, ideation, prototyping, testing, and everything in between.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 27, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #7c3aed, #c4b5fd 80%, transparent)", borderRadius: 2 }} className="hidden md:block" />

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => {
              const isOpen = open === i;
              const hue = 260 + i * 3;
              const color = `hsl(${hue}, 72%, ${46 - i * 1.5}%)`;
              return (
                <div key={i} style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
                  {/* Dot + spacer */}
                  <div className="hidden md:flex" style={{ width: 56, flexShrink: 0, justifyContent: "center", paddingTop: 22 }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: color, border: "3px solid white", boxShadow: `0 0 0 3px ${color}44`, flexShrink: 0 }} />
                  </div>

                  {/* Card */}
                  <div style={{ flex: 1, background: isOpen ? "#faf8ff" : "white", border: `1.5px solid ${isOpen ? "#7c3aed40" : "rgba(124,58,237,0.1)"}`, borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s, background 0.2s", boxShadow: isOpen ? "0 4px 24px rgba(124,58,237,0.1)" : "none" }}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      style={{ width: "100%", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 14, textAlign: "left" }}
                    >
                      {/* Phase badge */}
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: isOpen ? color : "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "0.8rem", color: isOpen ? "white" : color }}>{step.phase}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", color: "#a78bfa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{step.date}</span>
                        </div>
                        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#1a1128", margin: 0 }}>{step.title}</h3>
                      </div>
                      <div style={{ color: "#c4b5fd", flexShrink: 0 }}>
                        {isOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div style={{ padding: "0 22px 22px" }}>
                        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#4a4060", lineHeight: 1.7, marginBottom: 14 }}>{step.summary}</p>
                        <ul style={{ margin: "0 0 18px 0", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 5 }}>
                          {step.bullets.map((b, j) => (
                            <li key={j} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.84rem", color: "#6b5fa3", lineHeight: 1.6 }}>{b}</li>
                          ))}
                        </ul>
                        {/* PDF slot */}
                        {step.docUrl ? (
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                              <FileText size={18} color="#a78bfa" />
                              <div>
                                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#7c3aed", margin: 0 }}>{step.docLabel}</p>
                                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", color: "#4a4060", margin: "2px 0 0" }}>Click to open the PDF in a new tab.</p>
                              </div>
                            </div>
                            <a href={step.docUrl} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 16px", borderRadius: 999, background: "#7c3aed", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, textDecoration: "none", width: "fit-content" }}>
                              View PDF
                            </a>
                          </div>
                        ) : (
                          <div style={{ background: "#f3f0ff", border: "2px dashed rgba(124,58,237,0.22)", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                            <FileText size={18} color="#a78bfa" />
                            <div>
                              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#7c3aed", margin: 0 }}>{step.docLabel}</p>
                              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", color: "#a78bfa", margin: "2px 0 0" }}>Upload your PDF here to share it publicly</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
