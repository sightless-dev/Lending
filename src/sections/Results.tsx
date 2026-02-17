import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

export function Results() {
  const { lang } = useLang();

  const content = {
    ua: {
      titlePart1: "Ключові", titlePart2: "Результати",
      features: [
        { title: "Бюджети & Спенд", desc: "Досвід управління бюджетами від <strong>$20,000</strong> на місяць у гемблінг-вертикалі." },
        { title: "Профіт (ROI)", desc: "Стабільне утримання середнього показника ROI на рівні <strong>0-40%</strong> на об'ємах." },
        { title: "Експертиза в крео", desc: "Сам роблю ТЗ та розумію, який підхід зачепить аукціон і дасть <strong>дешевий інстал</strong>." },
      ]
    },
    ru: {
      titlePart1: "Ключевые", titlePart2: "Результаты",
      features: [
        { title: "Бюджеты & Спенд", desc: "Опыт управления бюджетами от <strong>$20,000</strong> в месяц в гемблинг-вертикали." },
        { title: "Профит (ROI)", desc: "Стабильное удержание среднего показателя ROI на уровне <strong>0-40%</strong> на объемах." },
        { title: "Экспертиза в крео", desc: "Сам составляю ТЗ и понимаю, какой подход зацепит аукцион и даст <strong>дешевый инсталл</strong>." },
      ]
    }
  }[lang];

  const icons = [
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ];

  return (
    <section id="results" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            {content.titlePart1} <span className="text-accent">{content.titlePart2}</span>
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-7 md:grid-cols-3">
          {content.features.map((f, idx) => (
            <Reveal key={f.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7 h-full">
                <div className="flex h-full flex-col">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent/90">
                    {icons[idx]}
                  </div>
                  <div className="mb-2 text-[18px] font-extrabold tracking-[-0.02em]">{f.title}</div>
                  <div className="text-[16px] leading-[1.55] text-white/65" dangerouslySetInnerHTML={{ __html: f.desc }} />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}