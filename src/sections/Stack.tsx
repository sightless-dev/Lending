import { useLang } from "../lang";
import { Reveal, SectionLabel } from "../components/Reveal";

export function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="mx-auto max-w-container px-4 py-20 sm:px-6 md:py-28">
      <SectionLabel index="03">{t.stack.label}</SectionLabel>
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {t.stack.groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05} className="flex flex-col gap-5 bg-ink p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-medium">{g.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="border border-edge bg-panel px-3 py-1.5 font-mono text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
        <div className="hidden items-center justify-center bg-ink p-8 lg:flex" aria-hidden="true">
          <svg viewBox="0 0 200 120" className="w-full max-w-[220px]">
            <g stroke="#3A322C" strokeWidth="1.5" fill="none">
              <path d="M20 20 C 70 20, 60 60, 100 60" />
              <path d="M20 100 C 70 100, 60 60, 100 60" />
            </g>
            <path className="flow" d="M100 60 L 180 60" stroke="#FF5A1F" strokeWidth="2" />
            <rect x="12" y="14" width="12" height="12" fill="#15110F" stroke="#3A322C" />
            <rect x="12" y="94" width="12" height="12" fill="#15110F" stroke="#3A322C" />
            <circle cx="100" cy="60" r="16" fill="#FF5A1F" />
            <rect x="176" y="54" width="12" height="12" fill="#F2EDE6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
