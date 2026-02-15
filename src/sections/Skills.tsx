import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

const tools = [
  { ic: "📣", title: "Facebook Ads Manager", desc: "Постановка тестов, оптимизация, масштабирование, работа со связками и офферами." },
  { ic: "🔎", title: "Формулы аналитики", desc: "Понимание экономики: CPA, LTV, ROI, break-even, трекинг и воронки." },
  { ic: "🧩", title: "Менеджмент креативов", desc: "Брифинг, пайплайн, A/B тесты, реюз и итерации, контроль качества." },
  { ic: "🎨", title: "Дизайн креативов", desc: "Подход к визуалу и структуре, тест разных стилей и форматов под GEO." },
];

export function Skills() {
  return (
    <section id="skills" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Инструменты и <span className="text-accent">навыки</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {tools.map((t, idx) => (
            <Reveal key={t.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-2xl border border-accent/20 bg-accent/10">
                    {t.ic}
                  </div>
                  <div className="text-[18px] font-extrabold tracking-[-0.02em]">{t.title}</div>
                </div>
                <div className="text-[18px] leading-[1.55] text-white/65">{t.desc}</div>
              </Card>
            </Reveal>
          ))}
        </div>
</div>
    </section>
  );
}
