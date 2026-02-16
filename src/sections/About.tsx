import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

function IconIndustry() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>; }
function IconPalette() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>; }
function IconTeams() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function IconLang() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>; }

const bullets = [
  { ic: <IconIndustry />, text: "4 роки в арбітражній індустрії" },
  { ic: <IconPalette />, text: "2 роки роботи дизайнером креативів" },
  { ic: <IconTeams />, text: "Досвід роботи в різних командах" },
  { ic: <IconLang />, text: "UA/RU (Native), ENG (Технічна/Читання)" },
];

const chips = ["Meta Ads", "AdsPower", "Keitaro", "Автозаливи"];

export function About() {
  return (
    <section id="about" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Коротко <span className="text-accent">про головне</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <Reveal delay={0.05}>
            <Card className="p-8 h-full">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                Бекграунд (Summary)
              </div>
              <ul className="grid gap-3.5">
                {bullets.map((b) => (
                  <li key={b.text} className="flex items-start gap-3 text-[18px] text-white/80">
                    <span className="mt-[1px] grid h-[30px] w-[30px] place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90 shrink-0">
                      {b.ic}
                    </span>
                    <span className="leading-[1.45]">{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((c) => (
                  <span key={c} className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[14px] text-white/70">
                    {c}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8 h-full border-purple-500/10 hover:border-purple-400/30">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                Підхід до роботи
              </div>
              <p className="text-[18px] leading-[1.65] text-white/70">
                Мій головний фокус — це технічна частина заливу, контроль метрик та пошук зв'язок зі стабільним <strong>позитивним ROI</strong>. Завдяки бекграунду в дизайні я <span className="text-white/90">розумію, як креатив впливає на аукціон FB</span>.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, "Автоматизація", "Маю досвід роботи з Nooklz", "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, "Аналітика", "Робота з FTD / Inst2Dep", "purple"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>, "Технічна база", "AdsPower, проксі, сетапи", "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, "Стресостійкість", "Спокійна реакція на шторми", "accent"],
                ].map(([ic, t, d, color], i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className={`grid h-8 w-8 place-items-center rounded-xl border ${color === 'purple' ? 'border-purple-400/20 bg-purple-400/10 text-purple-400' : 'border-accent/20 bg-accent/10 text-accent/90'}`}>
                        {ic}
                      </div>
                      <div className="text-[14px] font-extrabold text-white/85">{t}</div>
                    </div>
                    <div className="text-[12px] text-white/60">{d}</div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}