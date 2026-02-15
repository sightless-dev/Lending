import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

const features = [
  {
    title: "Сильный и осмысленный ROI",
    desc: "Выбираю связки с понятной экономикой и масштабирую только то, что держит маржу.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 13.5 9.2 18.7 20 7.9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Рост бюджета от теста к скейлу",
    desc: "Системно повышаю бюджеты, сохраняя KPI и качество трафика.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 19V5m0 14h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M7 15l3-3 3 2 5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Итеративная оптимизация",
    desc: "Короткие циклы тестов: креатив → гипотеза → метрики → выводы.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="2.2" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Results() {
  return (
    <section id="results" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Результаты и <span className="text-accent">подход</span>
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-7 md:grid-cols-3">
          {features.map((f, idx) => (
            <Reveal key={f.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7 h-full"><div className="flex h-full flex-col">
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent/90">
                  {f.icon}
                </div>
                <div className="mb-1 text-[18px] font-extrabold tracking-[-0.02em]">{f.title}</div>
                <div className="text-[18px] leading-[1.55] text-white/65">{f.desc}</div>
              </div></Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
