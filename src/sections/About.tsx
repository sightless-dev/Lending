import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

export function About() {
  const { lang } = useLang();

  const c = {
    ua: {
      titlePart1: "Коротко ", titlePart2: "про головне",
      approachDesc: <>Мій фокус — технічна частина заливу, контроль метрик (FTD, Inst2Dep) та пошук зв'язок зі стабільним <strong>позитивним ROI</strong>. Не потребую мікроменеджменту, спокійно працюю в умовах штормів FB.</>,
      g1Title: "Аналітика", g1Desc: "Детальна робота з Keitaro",
      g2Title: "Автоматизація", g2Desc: "Робота з Nooklz",
      g3Title: "Технічна база", g3Desc: "AdsPower, проксі, сетапи",
      g4Title: "Експертиза в крео", g4Desc: "Сам створюю конвертящі ТЗ"
    },
    ru: {
      titlePart1: "Коротко ", titlePart2: "о главном",
      approachDesc: <>Мой фокус — техническая часть залива, контроль метрик (FTD, Inst2Dep) и поиск связок со стабильным <strong>позитивным ROI</strong>. Не нуждаюсь в микроменеджменте, спокойно работаю в условиях штормов FB.</>,
      g1Title: "Аналитика", g1Desc: "Детальная работа с Keitaro",
      g2Title: "Автоматизация", g2Desc: "Работа с Nooklz",
      g3Title: "Техническая база", g3Desc: "AdsPower, прокси, сетапы",
      g4Title: "Экспертиза в крео", g4Desc: "Сам создаю конвертящие ТЗ"
    }
  }[lang];

  return (
    <section id="about" className="py-[80px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[36px] max-md:text-[30px] font-bold tracking-[-0.02em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <Card className="p-8 border-purple-500/10">
            <p className="text-[18px] text-center leading-[1.65] text-white/80 mb-8 max-w-[800px] mx-auto">
              {c.approachDesc}
            </p>
            <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
              {[
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, c.g1Title, c.g1Desc, "text-purple-400 bg-purple-400/10 border-purple-400/20"],
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, c.g2Title, c.g2Desc, "text-accent/90 bg-accent/10 border-accent/20"],
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>, c.g3Title, c.g3Desc, "text-blue-400 bg-blue-400/10 border-blue-400/20"],
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, c.g4Title, c.g4Desc, "text-pink-400 bg-pink-400/10 border-pink-400/20"],
              ].map(([ic, t, d, color], i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-black/20 p-5 text-center flex flex-col items-center">
                  <div className={`mb-3 grid h-10 w-10 place-items-center rounded-xl border ${color}`}>
                    {ic}
                  </div>
                  <div className="text-[15px] font-extrabold text-white/90 mb-1">{t as string}</div>
                  <div className="text-[13px] text-white/50">{d as string}</div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}