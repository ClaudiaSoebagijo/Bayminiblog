const members = [
  { name: "Yi Zeng", initials: "YZ", hue: 300 },
  { name: "Anna Martin", initials: "AM", hue: 245 },
  { name: "Claudia Soebagijo", initials: "CS", hue: 258 },
  { name: "Kevin Wu", initials: "KW", hue: 286 },
  { name: "Sahana Hegde", initials: "SH", hue: 272 },
];

export function Team() {
  return (
    <section id="team" style={{ background: "#faf8ff", padding: "96px 24px" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ede9fe", color: "#7c3aed", borderRadius: 999, padding: "5px 14px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            The Team
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1a1128", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px 0" }}>
            Built with care by five.
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", color: "#6b5fa3", lineHeight: 1.65, maxWidth: "44ch", margin: "0 auto" }}>
            A multidisciplinary team from University of Washington united by a shared mission: better tools for people managing chronic illness.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 20 }}>
          {members.map((m) => (
            <div key={m.name} style={{ background: "white", border: "1.5px solid rgba(124,58,237,0.1)", borderRadius: 20, padding: "28px 22px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, boxShadow: "0 2px 16px rgba(124,58,237,0.05)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(124,58,237,0.14)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(124,58,237,0.05)"; }}>
              {/* Avatar */}
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: `hsl(${m.hue}, 62%, 56%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.3rem", color: "white", boxShadow: `0 4px 16px hsl(${m.hue}, 62%, 56%, 0.35)` }}>
                {m.initials}
              </div>
              <div>
                <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "#1a1128", margin: "0 0 4px 0" }}>{m.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
