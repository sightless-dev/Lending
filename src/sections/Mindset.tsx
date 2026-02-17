import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { cn } from "../lib/cn";
import { useLang } from "../context/LanguageContext";

function IconLightning() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>; }
function IconBook() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5a3 3 0 0 1 3-3h13v18H7a3 3 0 0 0-3 3V5Z" stroke="currentColor" strokeWidth="2" /><path d="M7 2v18" stroke="currentColor" strokeWidth="2" opacity=".6" /></svg>; }
function IconRefresh() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M21 3v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IconUsers() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" opacity=".7"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/><path d="M16.5 3.1a4 4 0 0 1 0 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/></svg>; }

const toneStyles = {
  amber: { box: "border-amber-400/25 bg-amber-400/10", ic: "text-amber-300" },
  emerald: { box: "border-emerald-400/25 bg-emerald-400/10", ic: "text-emerald-300" },
  cyan: { box: "border-cyan-400/25 bg-cyan-400/10", ic: "text-cyan-300" },
  green: { box: "border-accent/25 bg-accent/10", ic: "text-accent/90" },
} as const;

export function Mindset() {
  const { lang } = useLang();

  const items = {
    ua: [
      { tone: "amber" as const, icon: <IconLightning />, title: "Самостійність", desc: "Не потребую мікроменеджменту. Знаю, як запустити, оптимізувати і масштабувати зв'язку." },
      { tone: "cyan" as const, icon: <IconRefresh />, title: "Стресостійкість", desc: "Спокійно працюю в умовах банів та мікроштормів FB. Проблема — це просто задача." },
      { tone: "emerald" as const, icon: <IconBook />, title: "Орієнтація на ROI", desc: "Заливаю не заради кліків чи красивих графіків, а заради фінального профіту." },
      { tone: "green" as const, icon: <IconUsers />, title: "Командний гравець", desc: "Адекватно сприймаю фідбек, ділюся підходами, поважаю процеси тімліда." },
    ],
    ru: [
      { tone: "amber" as const, icon: <IconLightning />, title: "Самостоятельность", desc: "Не нуждаюсь в микроменеджменте. Знаю, как запустить, оптимизировать и масштабировать связку." },
      { tone: "cyan" as const, icon: <IconRefresh />, title: "Стрессоустойчивость", desc: "Спокойно работаю в условиях банов и микроштормов FB. Проблема — это просто задача." },
      { tone: "emerald" as const, icon: <IconBook />, title: "Ориентация на ROI", desc: "Заливаю не ради кликов или красивых графиков, а ради финального профита." },
      { tone: "green" as const, icon: <IconUsers />, title: "Командный игрок", desc: "Адекватно воспринимаю фидбек, делюсь подходами, уважаю процессы тимлида." },
    ]
  }[lang];

  return (
    <section id="mindset" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Soft <span className="text-accent">Skills</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {items.map((m, idx) => {
            const t = toneStyles[m.tone];
            return (
              <Reveal key={m.title} delay={0.05 + idx * 0.05}>
                <Card className="p-7">
                  <div className="flex items-start gap-4">
                    <div className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-2xl border", t.box, t.ic)}>
                      {m.icon}
                    </div>
                    <div>
                      <div className="mb-1 text-[18px] font-extrabold tracking-[-0.02em]">{m.title}</div>
                      <div className="text-[16px] leading-[1.55] text-white/65">{m.desc}</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}