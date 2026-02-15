import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

function IconSlot() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" opacity=".55"/>
    </svg>
  );
}
function IconMegaphone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 15V9l14-4v14l-14-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>
      <path d="M15 9a3 3 0 0 1 0 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" opacity=".6"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
      <path d="M16.5 3.1a4 4 0 0 1 0 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
    </svg>
  );
}
function IconReceipt() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 17h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 2h12v20l-2-1-2 1-2-1-2 1-2-1-2 1V2Z" stroke="currentColor" strokeWidth="2" opacity=".6" strokeLinejoin="round"/>
    </svg>
  );
}
function IconFlask() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 2v6l-5.5 9.5A3 3 0 0 0 7.1 22h9.8a3 3 0 0 0 2.6-4.5L14 8V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".65"/>
      <path d="M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const bullets = [
  { ic: <IconSlot />, text: "4 года в Gambling индустрии" },
  { ic: <IconMegaphone />, text: "2 года работы с Facebook Ads" },
  { ic: <IconUsers />, text: "Опыт работы командой с крео (как плюс)" },
  { ic: <IconReceipt />, text: "Понимание модели First Bill (FB)" },
  { ic: <IconFlask />, text: "Системный подход к тестам и оптимизации" },
];

const chips = ["FB / PWA", "Tier 1–3 GEO", "KPI-driven", "Scale-ready"];

export function About() {
  return (
    <section id="about" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Обо <span className="text-accent">мне</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <Reveal delay={0.05}>
            <Card className="p-8">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em]">
                Коротко по сути
              </div>

              <ul className="grid gap-3.5">
                {bullets.map((b) => (
                  <li key={b.text} className="flex items-start gap-3 text-[18px] text-white/80">
                    <span className="mt-[1px] grid h-[30px] w-[30px] place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90">
                      {b.ic}
                    </span>
                    <span className="leading-[1.45]">{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[14px] text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em]">
                Как работаю
              </div>

              <p className="text-[18px] leading-[1.65] text-white/70">
                Сочетаю креативное мышление с performance-метриками. Начинаю с постановки гипотез и тест‑плана,
                выстраиваю пайплайн креативов и оптимизации, после чего масштабирую лучшее.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  ["⚡", "Быстрые итерации", "короткие циклы тестов"],
                  ["📊", "Контроль экономики", "KPI / ROI / маржа"],
                  ["🧩", "Системность", "порядок в тестах и выводах"],
                  ["🛡️", "Качество трафика", "не только объём, но и удержание"],
                ].map(([ic, t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className="grid h-8 w-8 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90">
                        {ic}
                      </div>
                      <div className="text-[16px] font-extrabold text-white/85">{t}</div>
                    </div>
                    <div className="text-[14px] text-white/60">{d}</div>
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
