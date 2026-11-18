import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const LINES = ["> init pipeline", "> load creatives ........ ok", "> route traffic ......... ok", "> render whyrat.online"];
const STORAGE_KEY = "intro-seen";

function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * A ~2s "boot sequence" that plays once per browser session.
 * Click anywhere or press any key to skip. Skipped entirely for reduced motion.
 */
export function Intro() {
  const reduce = usePrefersReducedMotion();
  const [show, setShow] = useState(() => !reduce && !alreadySeen());
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!show) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    const timers = LINES.map((_, i) => window.setTimeout(() => setStep(i + 1), 260 * (i + 1)));
    const done = window.setTimeout(() => setShow(false), 260 * LINES.length + 650);
    const skip = () => setShow(false);
    window.addEventListener("keydown", skip, { once: true });
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(done);
      window.removeEventListener("keydown", skip);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col justify-between bg-ink p-6 sm:p-10"
          onClick={() => setShow(false)}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="flex justify-between font-mono text-xs text-muted">
            <span>WHYRAT/</span>
            <span>{String(Math.min(step * 25, 100)).padStart(3, "0")}%</span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-sm text-paper sm:text-base">
            {LINES.slice(0, step).map((line, i) => (
              <motion.span key={line} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className={i === step - 1 ? "text-accent" : ""}>
                {line}
              </motion.span>
            ))}
          </div>
          <div className="h-[3px] w-full bg-line">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / LINES.length) * 100}%` }}
              transition={{ ease: "easeOut", duration: 0.25 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
