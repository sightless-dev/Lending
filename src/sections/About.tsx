import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

function IconIndustry() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>; }
function IconPalette() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>; }
function IconTeams() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function IconLang() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>; }

const chips = ["Meta Ads", "AdsPower", "Keitaro", "Автозаливи"];

export function About() {
  const { lang } = useLang();

  const c = {
    ua: {
      titlePart1: "Коротко ", titlePart2: "про головне",
      summaryTitle: "Бекграунд (Summary)",
      b1: "4 роки в арбітражній індустрії", b2: "2 роки роботи дизайнером креативів", b3: "Досвід роботи в різних командах", b4: "UA/RU (Native), ENG (Технічна/Читання)",
      approachTitle: "Підхід до роботи",
      approachDesc: <>Мій головний фокус — це технічна частина заливу, контроль метрик та пошук зв'язок зі стабільним <strong>позитивним ROI</strong>. Завдяки бекграунду в дизайні я <span className="text-white/90">розумію, як креатив впливає на аукціон FB</span>.</>,
      g1Title: "Автоматизація", g1Desc: "Маю досвід роботи з Nooklz",
      g2Title: "Аналітика", g2Desc: "Робота з FTD / Inst2Dep",
      g3Title: "Технічна база", g3Desc: "AdsPower, проксі, сетапи",
      g4Title: "Стресостійкість", g4Desc: "Спокійна реакція на шторми"
    },
    ru: {
      titlePart1: "Коротко ", titlePart2: "о главном",
      summaryTitle: "Бэкграунд (Summary)",
      b1: "4 года в арбитражной индустрии", b2: "2 года работы дизайнером креативов", b3: "Опыт работы в разных командах", b4: "UA/RU (Native), ENG (Технический/Чтение)",
      approachTitle: "Подход к работе",
      approachDesc: <>Мой главный фокус — это техническая часть залива, контроль метрик и поиск связок со стабильным <strong>позитивным ROI</strong>. Благодаря бэкграунду в дизайне я <span className="text-white/90">понимаю, как креатив влияет на аукцион FB</span>.</>,
      g1Title: "Автоматизация", g1Desc: "Имею опыт работы с Nooklz",
      g2Title: "Аналитика", g2Desc: "Работа с FTD / Inst2Dep",
      g3Title: "Техническая база", g3Desc: "AdsPower, прокси, сетапы",
      g4Title: "Стрессоустойчивость", g4Desc: "Спокойная реакция на штормы"
    }
  }[lang];

  return (
    <section id="about" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <Reveal delay={0.05}>
            <Card className="p-8 h-full">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                {c.summaryTitle}
              </div>
              <ul className="grid gap-3.5">
                {[
                  { ic: <IconIndustry />, text: c.b1 },
                  { ic: <IconPalette />, text: c.b2 },
                  { ic: <IconTeams />, text: c.b3 },
                  { ic: <IconLang />, text: c.b4 },
                ].map((b) => (
                  <li key={b.text} className="flex items-start gap-3 text-[18px] text-white/80">
                    <span className="mt-[1px] grid h-[30px] w-[30px] place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90 shrink-0">
                      {b.ic}
                    </span>
                    <span className="leading-[1.45]">{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[14px] text-white/70">
                    {chip}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8 h-full border-purple-500/10 hover:border-purple-400/30">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                {c.approachTitle}
              </div>
              <p className="text-[18px] leading-[1.65] text-white/70">
                {c.approachDesc}
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, c.g1Title, c.g1Desc, "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, c.g2Title, c.g2Desc, "purple"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>, c.g3Title, c.g3Desc, "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, c.g4Title, c.g4Desc, "accent"],
                ].map(([ic, t, d, color], i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className={`grid h-8 w-8 place-items-center rounded-xl border ${color === 'purple' ? 'border-purple-400/20 bg-purple-400/10 text-purple-400' : 'border-accent/20 bg-accent/10 text-accent/90'}`}>
                        {ic}
                      </div>
                      <div className="text-[14px] font-extrabold text-white/85">{t as string}</div>
                    </div>
                    <div className="text-[12px] text-white/60">{d as string}</div>
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