import fs from 'fs';
import path from 'path';

const expPath = path.resolve('src/sections/Experience.tsx');

const content = `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

export function Experience() {
  const { lang } = useLang();

  const c = {
    ua: {
      titlePart1: "Досвід", titlePart2: "роботи",
      c1Exp: "Apr 2024 - Dec 2025 · 1 yr 9 mos",
      c1Desc: <>Залив трафіку з Facebook (Meta Ads). Працюю з різними сетапами, запускаю автозаливи, розумію технічну частину антидетектів. Основний фокус — контроль ціни за FTD, утримання KPI та масштабування плюсових зв'язок.</>,
      c2Exp: "Jan 2022 - Mar 2024 · 2 yrs 3 mos",
      c2Desc: "Створення конвертящих креативів для гемблінгу. Розумію, як візуал впливає на аукціон FB (зниження CPM, підвищення CTR). Вмію генерувати нові зачепи (хуки) для пробиття банерної сліпоти."
    },
    ru: {
      titlePart1: "Опыт", titlePart2: "работы",
      c1Exp: "Apr 2024 - Dec 2025 · 1 yr 9 mos",
      c1Desc: <>Залив трафика с Facebook (Meta Ads). Работаю с разными сетапами, запускаю автозаливы, понимаю техническую часть антидетектов. Основной фокус — контроль цены за FTD, удержание KPI и масштабирование плюсовых связок.</>,
      c2Exp: "Jan 2022 - Mar 2024 · 2 yrs 3 mos",
      c2Desc: "Создание конвертящих креативов для гемблинга. Понимаю, как визуал влияет на аукцион FB (снижение CPM, повышение CTR). Умею генерировать новые зацепы (хуки) для пробития баннерной слепоты."
    }
  }[lang];

  return (
    <section id="experience" className="py-[80px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[36px] max-md:text-[30px] font-bold tracking-[-0.02em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.05}>
            <Card className="p-7">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div className="text-[20px] font-extrabold tracking-[-0.02em]">Junior Media Buyer • Gambling & Betting</div>
                <div className="w-fit rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-[13px] font-medium text-accent/90 whitespace-nowrap">
                  {c.c1Exp}
                </div>
              </div>
              <p className="text-[16px] leading-[1.6] text-white/70">
                {c.c1Desc}
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
             <Card className="p-7 border-white/5 bg-white/[.01] opacity-75 hover:opacity-100 transition-opacity">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                 <div className="text-[20px] font-extrabold tracking-[-0.02em] text-white/60">Creative Designer • Gambling</div>
                 <div className="w-fit rounded-full border border-white/10 text-white/40 px-4 py-1.5 text-[13px] whitespace-nowrap">
                  {c.c2Exp}
                </div>
               </div>
               <p className="text-[16px] leading-[1.6] text-white/50">
                 {c.c2Desc}
               </p>
             </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}`;

if (fs.existsSync(expPath)) {
  fs.writeFileSync(expPath, content.trim(), 'utf8');
  console.log('✅ Даты и названия должностей в src/sections/Experience.tsx успешно обновлены!');
} else {
  console.log('⚠️ Файл src/sections/Experience.tsx не найден.');
}