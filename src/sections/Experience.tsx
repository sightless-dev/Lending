import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

export function Experience() {
  return (
    <section id="experience" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Досвід <span className="text-accent">роботи</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          <Reveal delay={0.05} className="md:col-span-2">
            <Card className="p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="text-[20px] font-extrabold tracking-[-0.02em]">Media Buyer • Gambling & Betting</div>
                <div className="w-fit rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-[14px] text-accent/90 whitespace-nowrap">
                  2 роки досвіду
                </div>
              </div>

              <p className="text-[16px] leading-[1.6] text-white/70 max-w-[900px]">
                Залив трафіку з Facebook (<strong>Meta Ads</strong>). Вмію працювати з різними сетапами: від агентських кабінетів до міксованих фарм-схем. Запускав автозаливи, розумію технічну частину антидетектів та проксі. Основний фокус — контроль ціни за <strong>FTD</strong> та масштабування плюсових зв'язок.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[18px] font-extrabold text-white/90">Бюджети</div>
                  <div className="mt-1 text-[13px] text-white/55">Досвід управління спендом від $20k/міс</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[18px] font-extrabold text-white/90">ROI</div>
                  <div className="mt-1 text-[13px] text-white/55">Середній показник на об'ємах: 20-40%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[18px] font-extrabold text-white/90">ГЕО</div>
                  <div className="mt-1 text-[13px] text-white/55">Tier-2, Tier-3 (Latam, Азія, Сх. Європа)</div>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
             {/* Зробили цей блок "приглушеним" (сірим/прозорим) */}
             <Card className="p-7 border-white/5 bg-white/[.01] opacity-75 hover:opacity-100 transition-opacity">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                 <div className="text-[20px] font-extrabold tracking-[-0.02em] text-white/60">Creative Designer • Gambling</div>
                 <div className="w-fit rounded-full border border-white/10 text-white/40 px-4 py-1.5 text-[14px]">
                  2 роки досвіду
                </div>
               </div>
               <p className="text-[16px] leading-[1.6] text-white/50 max-w-[900px]">
                 Створення висококонвертящих креативів для гемблінгу. Розумію, як візуал безпосередньо впливає на аукціон FB (зниження CPM, підвищення CTR). Бачу вигоряння підходу до того, як він зіллє бюджет, і вмію швидко генерувати нові зачепи.
               </p>
             </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}