import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

const tiers = ["BD", "TR", "LT", "SK", "CL", "IT", "AT", "IE"];

export function Experience() {
  return (
    <section id="experience" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Опыт <span className="text-accent">работы</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          <Reveal delay={0.05}>
            <Card className="p-7">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="text-[18px] font-extrabold tracking-[-0.02em]">Facebook Ads</div>
                <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[14px] text-accent/90">
                  2 года опыта
                </div>
              </div>

              <p className="text-[18px] leading-[1.55] text-white/65">
                Запуск и масштабирование связок в оффере через креативы. First Bill (FB) / PWA.
                Работа с трекингом, воронкой и метриками.
              </p>

              <div className="mt-4 text-[14px] font-semibold text-white/75">Опыт работы в Tier:</div>

              <div className="mt-2 flex flex-wrap gap-2">
                {tiers.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-2 text-[14px] text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-7">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="text-[18px] font-extrabold tracking-[-0.02em]">E-commerce</div>
                <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[14px] text-accent/90">
                  Собственный проект
                </div>
              </div>

              <div className="grid gap-2.5 md:grid-cols-3">
                {[
                  ["%", "до 100%", "ROI"],
                  ["$", "до $1,000", "дневной бюджет"],
                  ["⏱", "потоки", "тесты"],
                ].map(([ic, v, l]) => (
                  <div
                    key={l}
                    className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center"
                  >
                    <div className="mx-auto mb-2 grid h-7 w-7 place-items-center rounded-xl border border-accent/20 bg-accent/10 font-extrabold text-accent/90">
                      {ic}
                    </div>
                    <div className="text-[14px] font-extrabold text-accent/90">{v}</div>
                    <div className="mt-1 text-[11px] text-white/55">{l}</div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[18px] leading-[1.55] text-white/65">
                Параллельный опыт в e-commerce помогает держать строгий подход к экономике, тестам и аналитике.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
