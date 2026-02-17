import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

export function Experience() {
  const { lang } = useLang();

  const c = {
    ua: {
      titlePart1: "Досвід", titlePart2: "роботи",
      c1Exp: "2 роки досвіду",
      c1Desc: <>Залив трафіку з Facebook (<strong>Meta Ads</strong>). Вмію працювати з різними сетапами: від агентських кабінетів до міксованих фарм-схем. Запускав автозаливи, розумію технічну частину антидетектів та проксі. Основний фокус — контроль ціни за <strong>FTD</strong> та масштабування плюсових зв'язок.</>,
      c1Stat1Title: "Бюджети", c1Stat1Desc: "Досвід управління спендом від $20k/міс",
      c1Stat2Title: "ROI", c1Stat2Desc: "Середній показник на об'ємах: 20-40%",
      c1Stat3Title: "ГЕО", c1Stat3Desc: "Tier-2, Tier-3 (Latam, Азія, Сх. Європа)",
      c2Exp: "2 роки досвіду",
      c2Desc: "Створення висококонвертящих креативів для гемблінгу. Розумію, як візуал безпосередньо впливає на аукціон FB (зниження CPM, підвищення CTR). Бачу вигоряння підходу до того, як він зіллє бюджет, і вмію швидко генерувати нові зачепи."
    },
    ru: {
      titlePart1: "Опыт", titlePart2: "работы",
      c1Exp: "2 года опыта",
      c1Desc: <>Залив трафика с Facebook (<strong>Meta Ads</strong>). Умею работать с разными сетапами: от агентских кабинетов до миксованных фарм-схем. Запускал автозаливы, понимаю техническую часть антидетектов и прокси. Основной фокус — контроль цены за <strong>FTD</strong> и масштабирование плюсовых связок.</>,
      c1Stat1Title: "Бюджеты", c1Stat1Desc: "Опыт управления спендом от $20k/мес",
      c1Stat2Title: "ROI", c1Stat2Desc: "Средний показатель на объемах: 20-40%",
      c1Stat3Title: "ГЕО", c1Stat3Desc: "Tier-2, Tier-3 (Latam, Азия, Вост. Европа)",
      c2Exp: "2 года опыта",
      c2Desc: "Создание высококонвертящих креативов для гемблинга. Понимаю, как визуал напрямую влияет на аукцион FB (снижение CPM, повышение CTR). Вижу выгорание подхода до того, как он сольет бюджет, и умею быстро генерировать новые зацепы."
    }
  }[lang];

  return (
    <section id="experience" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          <Reveal delay={0.05} className="md:col-span-2">
            <Card className="p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="text-[20px] font-extrabold tracking-[-0.02em]">Media Buyer • Gambling & Betting</div>
                <div className="w-fit rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-[14px] text-accent/90 whitespace-nowrap">
                  {c.c1Exp}
                </div>
              </div>

              <p className="text-[16px] leading-[1.6] text-white/70 max-w-[900px]">
                {c.c1Desc}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[18px] font-extrabold text-white/90">{c.c1Stat1Title}</div>
                  <div className="mt-1 text-[13px] text-white/55">{c.c1Stat1Desc}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[18px] font-extrabold text-white/90">{c.c1Stat2Title}</div>
                  <div className="mt-1 text-[13px] text-white/55">{c.c1Stat2Desc}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[18px] font-extrabold text-white/90">{c.c1Stat3Title}</div>
                  <div className="mt-1 text-[13px] text-white/55">{c.c1Stat3Desc}</div>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
             <Card className="p-7 border-white/5 bg-white/[.01] opacity-75 hover:opacity-100 transition-opacity">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                 <div className="text-[20px] font-extrabold tracking-[-0.02em] text-white/60">Creative Designer • Gambling</div>
                 <div className="w-fit rounded-full border border-white/10 text-white/40 px-4 py-1.5 text-[14px]">
                  {c.c2Exp}
                </div>
               </div>
               <p className="text-[16px] leading-[1.6] text-white/50 max-w-[900px]">
                 {c.c2Desc}
               </p>
             </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}