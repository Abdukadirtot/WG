"use client";

/**
 * Signature hero visual: an abstract network diagram linking a central
 * Horn-of-Africa hub to the four international partner nodes
 * (India, Kenya, Egypt, Türkiye).
 *
 * Pure SVG on brand blue/brown — no stock imagery. Connection lines gently
 * pulse (disabled automatically under `prefers-reduced-motion` via globals.css).
 */

type Node = { x: number; y: number; label: string; hub?: boolean };

const HUB: Node = { x: 250, y: 250, label: "Horn of Africa", hub: true };

const NODES: Node[] = [
  { x: 250, y: 250, label: "Horn of Africa", hub: true },
  { x: 405, y: 150, label: "India" },
  { x: 300, y: 405, label: "Kenya" },
  { x: 120, y: 130, label: "Egypt" },
  { x: 90, y: 320, label: "Türkiye" },
];

export default function NetworkGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <svg
        viewBox="0 0 500 500"
        role="img"
        aria-label="Network diagram connecting the Horn of Africa to partner countries India, Kenya, Egypt, and Türkiye"
        className="h-auto w-full"
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2E7FB8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2E7FB8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2E7FB8" />
            <stop offset="100%" stopColor="#A9683F" />
          </linearGradient>
        </defs>

        {/* Decorative concentric rings around the hub */}
        {[210, 150, 95].map((r, i) => (
          <circle
            key={r}
            cx={HUB.x}
            cy={HUB.y}
            r={r}
            fill="none"
            stroke="#CBDDEC"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity={0.7 - i * 0.12}
          />
        ))}
        <circle cx={HUB.x} cy={HUB.y} r={150} fill="url(#hubGlow)" />

        {/* Connection lines hub -> partner nodes */}
        {NODES.filter((n) => !n.hub).map((n, i) => (
          <line
            key={n.label}
            x1={HUB.x}
            y1={HUB.y}
            x2={n.x}
            y2={n.y}
            stroke="url(#lineGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-pulse-line"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}

        {/* Partner nodes */}
        {NODES.filter((n) => !n.hub).map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="9" fill="#A9683F" />
            <circle cx={n.x} cy={n.y} r="16" fill="none" stroke="#A9683F" strokeWidth="1.5" opacity="0.4" />
            <text
              x={n.x}
              y={n.y - 24}
              textAnchor="middle"
              className="fill-navy-700"
              style={{ fontSize: "15px", fontWeight: 700 }}
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Central hub */}
        <circle cx={HUB.x} cy={HUB.y} r="30" fill="#0B3B60" />
        <circle cx={HUB.x} cy={HUB.y} r="30" fill="none" stroke="#2E7FB8" strokeWidth="2" />
        {/* Small star in hub echoing the logo */}
        <path
          d="M250 235l3.2 7.1 7.8.74-5.9 5.2 1.75 7.66L250 258.9l-6.85 3.9 1.75-7.66-5.9-5.2 7.8-.74L250 235z"
          fill="#ffffff"
        />
        <text
          x={HUB.x}
          y={HUB.y + 52}
          textAnchor="middle"
          className="fill-navy-700"
          style={{ fontSize: "14px", fontWeight: 800 }}
        >
          Horn of Africa
        </text>
      </svg>
    </div>
  );
}
