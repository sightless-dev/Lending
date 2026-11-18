import { useLang } from "../lang";
import { Reveal, SectionLabel } from "../components/Reveal";

export function Project() {
  const { t } = useLang();
  return (
    <section id="project" className="mx-auto max-w-container px-4 py-20 sm:px-6 md:py-28">
      <SectionLabel index="02">{t.projects.label}</SectionLabel>
      <Reveal>
        <div className="relative overflow-hidden bg-accent p-8 text-ink md:p-14">
          <svg className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-90" viewBox="0 0 420 420" aria-hidden="true">
            <circle cx="210" cy="210" r="200" fill="none" stroke="#0D0B0A" strokeOpacity="0.18" />
            <circle cx="210" cy="210" r="140" fill="none" stroke="#0D0B0A" strokeOpacity="0.25" />
            <circle cx="210" cy="210" r="80" fill="#0D0B0A" fillOpacity="0.9" />
          </svg>
          <div className="relative flex max-w-[640px] flex-col gap-6">
            <h3 className="font-display text-5xl font-bold tracking-[-0.04em] md:text-7xl">{t.projects.title}</h3>
            <p className="text-lg leading-relaxed md:text-xl">{t.projects.text}</p>
            <div className="flex flex-wrap gap-2">
              {t.projects.tags.map((tag) => (
                <span key={tag} className="border border-ink/40 px-3 py-1.5 font-mono text-xs uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
