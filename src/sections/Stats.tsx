import { useLang } from "../lang";
import { CountUp } from "../fx/CountUp";

export function Stats() {
  const { t } = useLang();
  return (
    <section className="border-y border-line" aria-label="Key numbers">
      <div className="mx-auto grid max-w-container grid-cols-2 lg:grid-cols-4">
        {t.stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col gap-2 border-line px-4 py-8 sm:px-6 ${i % 2 === 0 ? "border-r" : ""} ${
              i < 2 ? "border-b lg:border-b-0" : ""
            } ${i === 1 ? "lg:border-r" : ""}`}
          >
            <span className={`font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl ${i === 3 ? "text-accent" : ""}`}><CountUp value={s.value} /></span>
            <span className="label text-[11px] text-muted md:text-xs">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
