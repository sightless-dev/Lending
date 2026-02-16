import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

const tools = [
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
    title: "Meta Ads & Інфраструктура", 
    desc: "Робота з FB Ads Manager. Використання автозаливів. Робота з агентськими кабінетами, трастами та сетапами.",
    tone: "accent"
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, 
    title: "Antidetect Browsers", 
    desc: "Щільний досвід роботи з антиками для мультиакаунтингу: AdsPower, Dolphin, OctoBrowser.",
    tone: "accent"
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>, 
    title: "Трекінг & Аналітика", 
    desc: "Впевнене володіння Keitaro (потоки, фільтрація). Аналіз трафіку за метриками: CTR, CPM, Inst2Dep, FTD.",
    tone: "accent"
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, 
    title: "Додатковий стек", 
    desc: "Spy-сервіси, базове розуміння прилок (PWA/Webview).",
    tone: "purple"
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Стек & <span className="text-accent">Інструменти</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {tools.map((t, idx) => (
            <Reveal key={t.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className={`grid h-10 w-10 place-items-center rounded-2xl border ${t.tone === 'purple' ? 'border-purple-400/20 bg-purple-400/10 text-purple-400' : 'border-accent/20 bg-accent/10 text-accent/90'}`}>
                    {t.ic}
                  </div>
                  <div className="text-[18px] font-extrabold tracking-[-0.02em]">{t.title}</div>
                </div>
                <div className="text-[16px] leading-[1.55] text-white/65" dangerouslySetInnerHTML={{ __html: t.desc.replace(/(FB Ads Manager|AdsPower|Dolphin|OctoBrowser|Keitaro|CTR|CPM|Inst2Dep|FTD)/g, '<strong>$1</strong>') }} />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}