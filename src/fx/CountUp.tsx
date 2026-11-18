import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Counts the first number inside `value` up from zero when it scrolls into view.
 * "$20K+" -> $0K+ ... $20K+; values like "T1–T3" are shown as-is.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = usePrefersReducedMotion();
  const match = value.match(/^([$€]?)(\d+)(.*)$/);
  const startFrom = (target: number) => (target > 1000 ? target - 30 : 0); // years only roll the last steps
  const [shown, setShown] = useState(match && !reduce ? `${match[1]}${startFrom(Number(match[2]))}${match[3]}` : value);

  useEffect(() => {
    if (!inView || !match || reduce) return;
    const [, prefix, num, suffix] = match;
    const target = Number(num);
    const controls = animate(startFrom(target), target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(`${prefix}${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}
