import { useState } from "react";
import { useLang } from "../lang";
import { Reveal, SectionLabel } from "../components/Reveal";

export function Experience() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="mx-auto max-w-container px-4 py-20 sm:px-6 md:py-28">
      <SectionLabel index="01">{t.exp.label}</SectionLabel>
      <div className="border-b border-line">
        {t.exp.jobs.map((job, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={job.period} delay={i * 0.05}>
              <div className="border-t border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full flex-wrap items-baseline gap-x-10 gap-y-2 py-7 text-left"
                >
                  <span className="label w-[180px] shrink-0 text-muted">{job.period}</span>
                  <span className="min-w-0 flex-[1_1_320px] text-2xl font-medium tracking-[-0.02em] transition-colors group-hover:text-accent md:text-[30px]">
                    {job.role}
                  </span>
                  <span className={`text-base ${i === 0 ? "text-accent" : "text-muted"}`}>{job.company}</span>
                  <span
                    className={`ml-auto font-mono text-xl text-muted transition-transform duration-300 ${isOpen ? "rotate-45 text-accent" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <ul className="overflow-hidden md:pl-[220px]">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-4 pb-4 text-muted last:pb-8">
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                        <span className="max-w-[760px]">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
