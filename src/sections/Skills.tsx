import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

const tools = [
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
    title: "Meta Ads & Infrastructure", 
    desc: "Работа с FB Ads Manager, FB Pixel. Использование FB Helper для упрощения рутины. Прогрев аккаунтов и работа с прокси." 
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, 
    title: "Antidetect Browsers", 
    desc: "Плотный опыт работы с антиками для мультиаккаунтинга: Dolphin, OctoBrowser, Vision." 
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>, 
    title: "Трекинг & Аналитика", 
    desc: "Умение пользоваться Keitaro (настройка потоков, фильтрация). Понимание метрик CPA, CPL, ROI." 
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, 
    title: "Дополнительный стек", 
    desc: "Nooklz, различные AI Tools для генерации и обработки креативов. Работа со спай-сервисами." 
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Core Skills & <span className="text-accent">Stack</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {tools.map((t, idx) => (
            <Reveal key={t.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent/90">
                    {t.ic}
                  </div>
                  <div className="text-[18px] font-extrabold tracking-[-0.02em]">{t.title}</div>
                </div>
                <div className="text-[16px] leading-[1.55] text-white/65">{t.desc}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}