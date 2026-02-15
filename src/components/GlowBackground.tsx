import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Green glow blobs:
 * - CSS pulse via Tailwind keyframes (see tailwind.config.ts)
 * - Subtle parallax via framer motion springs (pointer move)
 */
export function GlowBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 18, mass: 0.6 });

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mx.set(x * 18);
      my.set(y * 18);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const blob =
    "absolute rounded-full blur-[70px] mix-blend-screen will-change-transform " +
    "bg-[radial-gradient(circle_at_30%_30%,rgba(25,247,176,.42),transparent_58%),radial-gradient(circle_at_70%_60%,rgba(16,197,142,.25),transparent_55%)]";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute inset-0"
      >
        <div className={`${blob} left-[-220px] top-[-260px] h-[720px] w-[720px] opacity-[.40] animate-glow1`} />
        <div className={`${blob} right-[-260px] top-[80px] h-[640px] w-[640px] opacity-[.32] animate-glow2`} />
        <div className={`${blob} left-[35%] bottom-[-420px] h-[820px] w-[820px] opacity-[.29] animate-glow3`} />
      </motion.div>

      <div className="noise absolute inset-0" />
      <div className="vignette absolute -inset-px" />
    </div>
  );
}
