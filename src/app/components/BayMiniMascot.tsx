export function BayMiniMascot({ size = 120, animated = false }: { size?: number; animated?: boolean }) {
  const h = Math.round(size * 1.3);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 120 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={animated ? { animation: "mascotFloat 3.2s ease-in-out infinite" } : {}}
    >
      <style>{`
        @keyframes mascotFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes mascotBlink {
          0%,88%,100% { transform: scaleY(1); }
          92% { transform: scaleY(0.08); }
        }
      `}</style>

      {/* Shadow */}
      <ellipse cx="60" cy="153" rx="28" ry="5" fill="rgba(124,58,237,0.15)" />

      {/* Body — chunky teardrop */}
      <path d="M60 70 C30 70 16 90 16 112 C16 133 36 150 60 150 C84 150 104 133 104 112 C104 90 90 70 60 70Z" fill="#7c3aed" />
      {/* Body sheen */}
      <path d="M38 82 Q30 100 32 118" stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Left arm */}
      <rect x="4" y="88" width="20" height="34" rx="10" fill="#6d28d9" transform="rotate(-15 14 105)" />
      <circle cx="8" cy="124" r="8" fill="#6d28d9" />

      {/* Right arm */}
      <rect x="96" y="88" width="20" height="34" rx="10" fill="#6d28d9" transform="rotate(15 106 105)" />
      <circle cx="112" cy="124" r="8" fill="#6d28d9" />

      {/* Neck connector */}
      <rect x="52" y="68" width="16" height="12" rx="4" fill="#6d28d9" />

      {/* Head — circle */}
      <circle cx="60" cy="42" r="36" fill="#8b5cf6" />
      {/* Head highlight */}
      <circle cx="47" cy="28" r="10" fill="rgba(255,255,255,0.15)" />

      {/* Antenna */}
      <line x1="60" y1="6" x2="60" y2="18" stroke="#c4b5fd" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="60" cy="4.5" r="4.5" fill="#c4b5fd" />

      {/* Eyes */}
      <g style={{ animation: "mascotBlink 5s ease-in-out infinite", transformOrigin: "60px 43px" }}>
        <circle cx="47" cy="43" r="7" fill="white" />
        <circle cx="73" cy="43" r="7" fill="white" />
        <circle cx="49" cy="44" r="3.5" fill="#1a1128" />
        <circle cx="75" cy="44" r="3.5" fill="#1a1128" />
        <circle cx="50.5" cy="42" r="1.5" fill="white" />
        <circle cx="76.5" cy="42" r="1.5" fill="white" />
      </g>

      {/* Smile */}
      <path d="M48 56 Q60 66 72 56" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Chest mic circle */}
      <circle cx="60" cy="105" r="12" fill="rgba(255,255,255,0.15)" />
      <circle cx="60" cy="105" r="6" fill="rgba(255,255,255,0.25)" />
      <rect x="57" y="115" width="6" height="5" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="54" y="119" width="12" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}
