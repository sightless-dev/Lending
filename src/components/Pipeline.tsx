import { motion, useReducedMotion } from "framer-motion";

const inputs = [
  { label: "prompt.txt", y: 80 },
  { label: "seedance_2.5", y: 230 },
  { label: "wan_3.0", y: 380 },
];
const outputs = [
  { label: "→ meta_ads", y: 120, solid: true },
  { label: "→ tiktok_ads", y: 330, solid: false },
];

// Small "data packets" that run along the graph: inputs -> AI core -> ad platforms.
const PACKETS = [
  ...inputs.map((n, i) => ({
    path: `M90 ${n.y} C 180 ${n.y}, 170 220, 260 220`,
    dur: 2.4,
    delay: i * 0.8,
    r: 3,
    color: "#F2EDE6",
  })),
  { path: "M260 220 C 330 220, 330 120, 380 120", dur: 1.6, delay: 0.4, r: 4, color: "#FFB27A" },
  { path: "M260 220 C 330 220, 330 330, 380 330", dur: 1.6, delay: 1.2, r: 4, color: "#FFB27A" },
];

export function Pipeline() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-[440/460] w-full max-w-[460px]" aria-hidden="true">
      <svg viewBox="0 0 440 460" className="absolute inset-0 h-full w-full">
        <g stroke="#3A322C" strokeWidth="1.5" fill="none">
          {inputs.map((n) => (
            <motion.path
              key={n.label}
              d={`M90 ${n.y} C 180 ${n.y}, 170 220, 260 220`}
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
            />
          ))}
        </g>
        <path d="M260 220 C 330 220, 330 120, 380 120" stroke="#FF5A1F" strokeWidth="2" fill="none" />
        {!reduce &&
          PACKETS.map((pk, i) => (
            <circle key={i} r={pk.r} fill={pk.color}>
              <animateMotion dur={`${pk.dur}s`} begin={`${pk.delay}s`} repeatCount="indefinite" path={pk.path} />
            </circle>
          ))}
        <path className="flow" d="M260 220 C 330 220, 330 330, 380 330" stroke="#FF5A1F" strokeWidth="2" fill="none" />
        <circle className="pulse" cx="260" cy="220" r="74" fill="none" stroke="#FF5A1F" strokeOpacity="0.5" />
        <circle cx="260" cy="220" r="108" fill="none" stroke="#FF5A1F" strokeOpacity="0.15" />
        <circle cx="260" cy="220" r="74" fill="none" stroke="#FF5A1F" strokeOpacity="0.3" />
        <circle cx="260" cy="220" r="46" fill="#FF5A1F" />
        <text x="260" y="225" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#0D0B0A">
          AI
        </text>
      </svg>
      {inputs.map((n, i) => (
        <motion.div
          key={n.label}
          initial={reduce ? false : { opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 * i }}
          className="absolute left-0 -translate-y-1/2 border border-edge bg-panel px-2.5 py-2 font-mono text-[10px] sm:px-3.5 sm:text-xs"
          style={{ top: `${(n.y / 460) * 100}%` }}
        >
          {n.label}
        </motion.div>
      ))}
      {outputs.map((n, i) => (
        <motion.div
          key={n.label}
          initial={reduce ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + 0.15 * i }}
          className={`absolute right-0 -translate-y-1/2 px-2.5 py-2 font-mono text-[10px] sm:px-3.5 sm:text-xs ${
            n.solid ? "bg-paper text-ink" : "border border-accent bg-ink text-accent"
          }`}
          style={{ top: `${(n.y / 460) * 100}%` }}
        >
          {n.label}
        </motion.div>
      ))}
    </div>
  );
}
