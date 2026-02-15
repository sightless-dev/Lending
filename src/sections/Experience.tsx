import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

export function Experience() {
  return (
    <section id="experience" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Work <span className="text-accent">Experience</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          <Reveal delay={0.05}>
            <Card className="p-7">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="text-[18px] font-extrabold tracking-[-0.02em]">Media Buyer • Gambling & Betting</div>
                <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[14px] text-accent/90 whitespace-nowrap">
                  2 года
                </div>
              </div>

              <p className="text-[16px] leading-[1.55] text-white/65">
                Залив трафика с Facebook (<strong>Meta Ads</strong>) по модели ПБ (<strong>First Bill</strong>). Работа в форматах <strong>CPA/CPL</strong>.
                Оптимизация рекламных кампаний для достижения целевой цены за результат.
              </p>

              <div className="mt-4 text-[14px] font-semibold text-white/75">Основные ГЕО:</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Бангладеш", "Турция", "Литва", "Словакия", "Чили", "Италия", "Австрия", "Ирландия"].map((t) => (
                  <span key={t} className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-1.5 text-[13px] text-white/75">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-7 border-purple-500/10 hover:border-purple-500/20">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="text-[18px] font-extrabold tracking-[-0.02em]">Media Buyer • E-commerce</div>
                <div className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-[14px] text-purple-300 whitespace-nowrap">
                  3 месяца
                </div>
              </div>

              <p className="text-[16px] leading-[1.55] text-white/65">
                Залив на белую/серую товарку. Фокус на удержание положительного <strong>ROI</strong> и масштабирование профитных связок.
              </p>

              <div className="mt-4 grid gap-2.5 grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
                  <div className="text-[16px] font-extrabold text-purple-300">$1000</div>
                  <div className="mt-1 text-[12px] text-white/55">Спенд в месяц</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
                  <div className="text-[16px] font-extrabold text-purple-300">До 100%</div>
                  <div className="mt-1 text-[12px] text-white/55">Показатель ROI</div>
                </div>
              </div>
            </Card>
          </Reveal>
          
          <Reveal delay={0.15} className="md:col-span-2">
             <Card className="p-7">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                 <div className="text-[18px] font-extrabold tracking-[-0.02em]">Creative Designer • Gambling</div>
                 <div className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[14px] text-white/90">
                  2 года опыта
                </div>
               </div>
               <p className="text-[16px] leading-[1.55] text-white/65 max-w-[800px]">
                 Создание высококонвертящих креативов для гемблинга. Глубокое понимание психологии игрока, триггеров и того, как визуал напрямую влияет на итоговый конверт и цену инсталла/депа.
               </p>
             </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}