import { useState } from "react";
import { Menu, X } from "lucide-react";

const bayMiniLogo = new URL("./assets/baymini.png", import.meta.url).href;

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Process", href: "#process" },
  { label: "Demo", href: "#demo" },
  { label: "Team", href: "#team" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(250,248,255,0.88)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(124,58,237,0.1)" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#overview" className="flex items-center gap-2">
          <div style={{ width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={bayMiniLogo}
              alt="BayMini"
              style={{ width: 42, height: 42, objectFit: "cover" }}
            />
          </div>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#7c3aed", fontSize: "1.2rem", letterSpacing: "-0.02em" }}>BayMini</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#4c1d95", textDecoration: "none" }}
              className="hover:opacity-70 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} color="#7c3aed" /> : <Menu size={22} color="#7c3aed" />}
        </button>
      </div>

      {open && (
        <div style={{ background: "white", borderBottom: "1px solid rgba(124,58,237,0.1)" }} className="md:hidden px-6 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#4c1d95", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
