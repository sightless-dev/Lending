import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Two giant lines of text that slide in opposite directions as the page scrolls.
 */
export function ScrollMarquee({ top, bottom }: { top: string; bottom: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xTop = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);
  const xBottom = useTransform(scrollYProgress, [0, 1], ["-35%", "5%"]);

  const repeat = (s: string) => Array.from({ length: 4 }, () => s).join("  ");

  return (
    <div ref={ref} className="overflow-hidden py-16 md:py-24" aria-hidden="true">
      <motion.div style={{ x: xTop }} className="whitespace-nowrap font-display text-[clamp(56px,11vw,180px)] font-bold leading-none tracking-[-0.05em] text-paper">
        {repeat(top)}
      </motion.div>
      <motion.div
        style={{ x: xBottom }}
        className="whitespace-nowrap font-display text-[clamp(56px,11vw,180px)] font-bold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_#FF5A1F]"
      >
        {repeat(bottom)}
      </motion.div>
    </div>
  );
}
