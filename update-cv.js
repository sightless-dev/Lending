import fs from 'fs';
import path from 'path';

const files = {
  'src/sections/Hero.tsx': `import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";

const floatingEmojis = [
  { e: "🎰", left: "10%", top: "20%", delay: 0 },
  { e: "🎲", left: "85%", top: "30%", delay: 1.2 },
  { e: "🍒", left: "15%", top: "70%", delay: 2.5 },
  { e: "🎯", left: "80%", top: "65%", delay: 0.8 },
  { e: "🃏", left: "5%", top: "45%", delay: 1.8 },
  { e: "🪙", left: "90%", top: "50%", delay: 3 },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[calc(100vh-68px)] py-[104px] max-md:py-[84px] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        {floatingEmojis.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-20 blur-[2px]"
            style={{ left: item.left, top: item.top }}
            animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
          >
            {item.e}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center relative z-10">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/10 px-5 py-2.5 text-[15px] font-medium tracking-[.01em] text-white/85 shadow-[0_0_20px_rgba(25,247,176,.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(25,247,176,.8)]"></span>
            </span>
            Розглядаю позицію Junior Media Buyer
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-7 leading-[1.05]">
            <span className="block text-[clamp(44px,7vw,76px)] font-black tracking-[-0.05em] text-white/95">
              Media Buyer
            </span>
            <span className="mt-1 block pb-1 text-[clamp(38px,6vw,68px)] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent2">
              Gambling & Betting
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[14px] text-white/80">
            {[
              { ic: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, t: "Досвід Meta Ads" },
              { ic: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t: "Remote / Full-time" },
              { ic: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, t: "Timezone: UA" },
            ].map(({ic, t}) => (
              <span key={t} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
                <span className="text-accent/90">{ic}</span>{t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-[920px] text-[18px] leading-[1.7] text-white/65">
            4 роки в індустрії: 2 роки бекграунду в дизайні креативів та 2 роки баїнгу (Meta Ads). <strong>Вмію працювати з реальними бюджетами</strong>, розумію алгоритми FB і знаю, як контролювати метрики для виходу на стабільний плюсовий ROI.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="btn-shine" href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .8-.2 1.2-.6l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.4-1.3Z" fill="currentColor"/></svg>
              </span>
              Написати в Telegram
            </Button>
            <Button variant="ghost" href="#experience">
              Досвід роботи
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap justify-center gap-5 pt-2">
            {[
              ["$20K+", "Досвід спенду/міс"],
              ["20-40%", "Середній ROI"],
              ["GEO", "Досвід з Tier 2-3"],
            ].map(([v, l]) => (
              <div key={l} className="min-w-[220px] rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3.5 shadow-[0_18px_70px_rgba(0,0,0,.30)]">
                <div className="text-[20px] font-extrabold tracking-[-0.02em] text-accent/90">{v}</div>
                <div className="mt-1 text-[13px] text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-9 flex justify-center opacity-80">
          <div className="relative h-7 w-[18px] rounded-full border border-white/20">
            <div className="absolute left-1/2 top-1.5 h-1.5 w-[3px] -translate-x-1/2 rounded-full bg-accent/90 animate-wheel" />
          </div>
        </div>

        <motion.div
          className="mx-auto mt-10 h-[1px] w-[min(720px,95%)] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </section>
  );
}`,

  'src/sections/About.tsx': `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

function IconIndustry() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>; }
function IconPalette() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>; }
function IconTeams() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function IconLang() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>; }

const bullets = [
  { ic: <IconIndustry />, text: "4 роки в арбітражній індустрії" },
  { ic: <IconPalette />, text: "2 роки роботи дизайнером креативів" },
  { ic: <IconTeams />, text: "Досвід роботи в різних командах" },
  { ic: <IconLang />, text: "UA/RU (Native), ENG (Технічна/Читання)" },
];

const chips = ["Meta Ads", "AdsPower", "Keitaro", "Автозаливи"];

export function About() {
  return (
    <section id="about" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Коротко <span className="text-accent">про головне</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <Reveal delay={0.05}>
            <Card className="p-8 h-full">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                Бекграунд (Summary)
              </div>
              <ul className="grid gap-3.5">
                {bullets.map((b) => (
                  <li key={b.text} className="flex items-start gap-3 text-[18px] text-white/80">
                    <span className="mt-[1px] grid h-[30px] w-[30px] place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90 shrink-0">
                      {b.ic}
                    </span>
                    <span className="leading-[1.45]">{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((c) => (
                  <span key={c} className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[14px] text-white/70">
                    {c}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8 h-full border-purple-500/10 hover:border-purple-400/30">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                Підхід до роботи
              </div>
              <p className="text-[18px] leading-[1.65] text-white/70">
                Завдяки бекграунду в дизайні я <span className="text-white/90">розумію, як креатив впливає на аукціон FB</span>. Мій головний фокус — це технічна частина заливу, контроль метрик та пошук зв'язок зі стабільним <strong>позитивним ROI</strong>.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, "Автоматизація", "Маю досвід роботи з автозаливом Nooklz", "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, "Аналітика", "Робота з FTD / Inst2Dep", "purple"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>, "Технічна база", "AdsPower, проксі, сетапи", "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, "Стресостійкість", "Спокійна реакція на шторми", "accent"],
                ].map(([ic, t, d, color], i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className={\`grid h-8 w-8 place-items-center rounded-xl border \${color === 'purple' ? 'border-purple-400/20 bg-purple-400/10 text-purple-400' : 'border-accent/20 bg-accent/10 text-accent/90'}\`}>
                        {ic}
                      </div>
                      <div className="text-[14px] font-extrabold text-white/85">{t}</div>
                    </div>
                    <div className="text-[12px] text-white/60">{d}</div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}`,

  'src/sections/Experience.tsx': `import { Reveal } from "../components/Reveal";
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
}`,

  'src/sections/Skills.tsx': `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

const tools = [
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
    title: "Meta Ads & Інфраструктура", 
    desc: "Робота з FB Ads Manager. Використання автозаливів. Робота з агентськими кабінетами, трастами та сетапами.",
    tone: "accent"
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, 
    title: "Antidetect Browsers", 
    desc: "Щільний досвід роботи з антиками для мультиакаунтингу: AdsPower, Dolphin, OctoBrowser.",
    tone: "accent"
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>, 
    title: "Трекінг & Аналітика", 
    desc: "Впевнене володіння Keitaro (потоки, фільтрація). Аналіз трафіку за метриками: CTR, CPM, Inst2Dep, FTD.",
    tone: "accent"
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, 
    title: "Додатковий стек", 
    desc: "Spy-сервіси, базове розуміння прилок (PWA/Webview).",
    tone: "purple"
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Стек & <span className="text-accent">Інструменти</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {tools.map((t, idx) => (
            <Reveal key={t.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className={\`grid h-10 w-10 place-items-center rounded-2xl border \${t.tone === 'purple' ? 'border-purple-400/20 bg-purple-400/10 text-purple-400' : 'border-accent/20 bg-accent/10 text-accent/90'}\`}>
                    {t.ic}
                  </div>
                  <div className="text-[18px] font-extrabold tracking-[-0.02em]">{t.title}</div>
                </div>
                <div className="text-[16px] leading-[1.55] text-white/65" dangerouslySetInnerHTML={{ __html: t.desc.replace(/(FB Ads Manager|AdsPower|Dolphin|OctoBrowser|Keitaro|CTR|CPM|Inst2Dep|FTD)/g, '<strong>$1</strong>') }} />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(path.dirname(fullPath))) {
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  }
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log('✅ Оновлено:', filePath);
}
console.log('\\n🎉 Фінальні правки по текстам та стилям внесено!');