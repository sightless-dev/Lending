import fs from 'fs';
import path from 'path';

const files = {
  // 1. Оновлюємо Hero.tsx (Ідеально рівні кнопки)
  'src/sections/Hero.tsx': `import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const floatingEmojis = [
  { e: "🎰", left: "10%", top: "20%", delay: 0 },
  { e: "🎲", left: "85%", top: "30%", delay: 1.2 },
  { e: "🍒", left: "15%", top: "70%", delay: 2.5 },
  { e: "🎯", left: "80%", top: "65%", delay: 0.8 },
  { e: "🃏", left: "5%", top: "45%", delay: 1.8 },
  { e: "🪙", left: "90%", top: "50%", delay: 3 },
];

export function Hero() {
  const { lang } = useLang();

  const content = {
    ua: {
      badge: "Розглядаю позицію Junior Media Buyer",
      t1: "Досвід Meta Ads",
      t2: "Remote / Full-time",
      t3: "Timezone: UA",
      desc: <>4 роки в індустрії: 2 роки бекграунду в дизайні креативів та 2 роки баїнгу (Meta Ads). <strong>Вмію працювати з реальними бюджетами</strong>, розумію алгоритми FB і знаю, як контролювати метрики для виходу на стабільний плюсовий ROI.</>,
      stats: [
        ["$20K+", "Досвід спенду/міс"],
        ["0-40%", "Середній ROI"],
        ["GEO", "Tier 1-3"],
      ]
    },
    ru: {
      badge: "Рассматриваю позицию Junior Media Buyer",
      t1: "Опыт Meta Ads",
      t2: "Remote / Full-time",
      t3: "Timezone: UA",
      desc: <>4 года в индустрии: 2 года бэкграунда в дизайне креативов и 2 года баинга (Meta Ads). <strong>Умею работать с реальными бюджетами</strong>, понимаю алгоритмы FB и знаю, как контролировать метрики для выхода на стабильный плюсовой ROI.</>,
      stats: [
        ["$20K+", "Опыт спенда/мес"],
        ["0-40%", "Средний ROI"],
        ["GEO", "Tier 1-3"],
      ]
    }
  }[lang];

  return (
    <section id="top" className="relative min-h-[calc(100vh-68px)] py-[104px] max-md:py-[84px] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        {floatingEmojis.map((item, i) => (
          <motion.div key={i} className="absolute text-5xl opacity-20 blur-[2px]" style={{ left: item.left, top: item.top }} animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }} transition={{ duration: 6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}>
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
            {content.badge}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-7 leading-[1.05]">
            <span className="block text-[clamp(44px,7vw,76px)] font-black tracking-[-0.05em] text-white/95">
              Media Buyer
            </span>
            <span className="mt-1 block pb-4 text-[clamp(38px,6vw,68px)] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent2 leading-[1.2]">
              Gambling & Betting
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[14px] text-white/80">
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
              <span className="text-accent/90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>{content.t1}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
              <span className="text-accent/90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>{content.t2}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
              <span className="text-accent/90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>{content.t3}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-[800px] text-[18px] leading-[1.7] text-white/65">
            {content.desc}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button className="btn-shine flex !h-[46px] items-center px-7 text-[15px] !leading-[0]" href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="mr-2 grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .8-.2 1.2-.6l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.4-1.3Z" fill="currentColor"/></svg>
              </span>
              <span>Telegram</span>
            </Button>
            
            <a href="https://www.linkedin.com/in/liubomyr-myshchenko-93413a3b2/" target="_blank" rel="noopener" className="group flex h-[46px] items-center justify-center rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-7 text-[15px] font-semibold text-white transition-all hover:bg-[#0A66C2]/20 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap justify-center gap-5 pt-2">
            {content.stats.map(([v, l]) => (
              <div key={l} className="min-w-[200px] rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3.5 shadow-[0_18px_70px_rgba(0,0,0,.30)]">
                <div className="text-[20px] font-extrabold tracking-[-0.02em] text-accent/90">{v}</div>
                <div className="mt-1 text-[13px] text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center opacity-80">
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

  // 2. Оновлюємо About.tsx (Зміна місцями, кольорові іконки, ширина 1200)
  'src/sections/About.tsx': `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

export function About() {
  const { lang } = useLang();

  const c = {
    ua: {
      titlePart1: "Коротко ", titlePart2: "про головне",
      approachDesc: <>Мій фокус — технічна частина заливу, контроль метрик (FTD, Inst2Dep) та пошук зв'язок зі стабільним <strong>позитивним ROI</strong>. Не потребую мікроменеджменту, спокійно працюю в умовах штормів FB.</>,
      g1Title: "Аналітика", g1Desc: "Детальна робота з Keitaro",
      g2Title: "Автоматизація", g2Desc: "Робота з Nooklz",
      g3Title: "Технічна база", g3Desc: "AdsPower, проксі, сетапи",
      g4Title: "Експертиза в крео", g4Desc: "Сам створюю конвертящі ТЗ"
    },
    ru: {
      titlePart1: "Коротко ", titlePart2: "о главном",
      approachDesc: <>Мой фокус — техническая часть залива, контроль метрик (FTD, Inst2Dep) и поиск связок со стабильным <strong>позитивным ROI</strong>. Не нуждаюсь в микроменеджменте, спокойно работаю в условиях штормов FB.</>,
      g1Title: "Аналитика", g1Desc: "Детальная работа с Keitaro",
      g2Title: "Автоматизация", g2Desc: "Работа с Nooklz",
      g3Title: "Техническая база", g3Desc: "AdsPower, прокси, сетапы",
      g4Title: "Экспертиза в крео", g4Desc: "Сам создаю конвертящие ТЗ"
    }
  }[lang];

  return (
    <section id="about" className="py-[80px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[36px] max-md:text-[30px] font-bold tracking-[-0.02em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <Card className="p-8 border-purple-500/10">
            <p className="text-[18px] text-center leading-[1.65] text-white/80 mb-8 max-w-[800px] mx-auto">
              {c.approachDesc}
            </p>
            <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
              {[
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, c.g1Title, c.g1Desc, "text-purple-400 bg-purple-400/10 border-purple-400/20"],
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, c.g2Title, c.g2Desc, "text-accent/90 bg-accent/10 border-accent/20"],
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>, c.g3Title, c.g3Desc, "text-blue-400 bg-blue-400/10 border-blue-400/20"],
                [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, c.g4Title, c.g4Desc, "text-pink-400 bg-pink-400/10 border-pink-400/20"],
              ].map(([ic, t, d, color], i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-black/20 p-5 text-center flex flex-col items-center">
                  <div className={\`mb-3 grid h-10 w-10 place-items-center rounded-xl border \${color}\`}>
                    {ic}
                  </div>
                  <div className="text-[15px] font-extrabold text-white/90 mb-1">{t as string}</div>
                  <div className="text-[13px] text-white/50">{d as string}</div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}`,

  // 3. Оновлюємо Skills.tsx (Зміна тексту Spy/PWA)
  'src/sections/Skills.tsx': `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

export function Skills() {
  const { lang } = useLang();

  const content = {
    ua: {
      titlePart1: "Стек &", titlePart2: "Інструменти",
      tools: [
        { title: "Meta Ads & Інфраструктура", desc: "Робота з FB Ads Manager. Використання автозаливів. Робота з агентськими кабінетами, трастами та сетапами.", tone: "accent" },
        { title: "Antidetect Browsers", desc: "Щільний досвід роботи з антиками для мультиакаунтингу: AdsPower, Dolphin, OctoBrowser.", tone: "accent" },
        { title: "Трекінг & Аналітика", desc: "Впевнене володіння Keitaro (потоки, фільтрація). Аналіз трафіку за метриками: CTR, CPM, Inst2Dep, FTD.", tone: "accent" },
        { title: "Додатковий стек", desc: "Вмію працювати з PWA/Webview (SkakApp, BlackApp і т.д.), Spy-сервіси.", tone: "purple" },
      ]
    },
    ru: {
      titlePart1: "Стек &", titlePart2: "Инструменты",
      tools: [
        { title: "Meta Ads & Инфраструктура", desc: "Работа с FB Ads Manager. Использование автозаливов. Работа с агентскими кабинетами, трастами и сетапами.", tone: "accent" },
        { title: "Antidetect Browsers", desc: "Плотный опыт работы с антиками для мультиаккаунтинга: AdsPower, Dolphin, OctoBrowser.", tone: "accent" },
        { title: "Трекинг & Аналитика", desc: "Уверенное владение Keitaro (потоки, фильтрация). Анализ трафика по метрикам: CTR, CPM, Inst2Dep, FTD.", tone: "accent" },
        { title: "Дополнительный стек", desc: "Умею работать с PWA/Webview (SkakApp, BlackApp и т.д.), Spy-сервисы.", tone: "purple" },
      ]
    }
  }[lang];

  const icons = [
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  ];

  return (
    <section id="skills" className="py-[80px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[36px] max-md:text-[30px] font-bold tracking-[-0.02em]">
            {content.titlePart1} <span className="text-accent">{content.titlePart2}</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {content.tools.map((t, idx) => (
            <Reveal key={t.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className={\`grid h-10 w-10 place-items-center rounded-2xl border \${t.tone === 'purple' ? 'border-purple-400/20 bg-purple-400/10 text-purple-400' : 'border-accent/20 bg-accent/10 text-accent/90'}\`}>
                    {icons[idx]}
                  </div>
                  <div className="text-[18px] font-extrabold tracking-[-0.02em]">{t.title}</div>
                </div>
                <div className="text-[16px] leading-[1.55] text-white/65" dangerouslySetInnerHTML={{ __html: t.desc.replace(/(FB Ads Manager|AdsPower|Dolphin|OctoBrowser|Keitaro|CTR|CPM|Inst2Dep|FTD|PWA\\/Webview)/g, '<strong>$1</strong>') }} />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // 4. Оновлюємо Contact.tsx (Ідеально рівні кнопки)
  'src/sections/Contact.tsx': `import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { useLang } from "../context/LanguageContext";

export function Contact() {
  const { lang } = useLang();

  const c = {
    ua: {
      badge: "Відкритий до пропозицій",
      titlePart1: "Давайте", titlePart2: "працювати разом",
      desc: <>Розглядаю позицію Media Buyer (<strong>Remote / Full-time</strong>). Маю базу, розумію процеси, готовий брати об'єми — чекаю на повідомлення!</>,
      btnPdf: "Завантажити PDF",
      btnPdfSub: "для CRM",
    },
    ru: {
      badge: "Открыт к предложениям",
      titlePart1: "Давайте", titlePart2: "работать вместе",
      desc: <>Рассматриваю позицию Media Buyer (<strong>Remote / Full-time</strong>). Есть база, понимаю процессы, готов брать объемы — жду сообщения!</>,
      btnPdf: "Скачать PDF",
      btnPdfSub: "для CRM",
    }
  }[lang];

  return (
    <section id="contact" className="py-[100px] pb-[120px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto mb-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[14px] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            {c.badge}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-4 text-[34px] font-extrabold tracking-[-0.03em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-8 max-w-[720px] text-[18px] leading-[1.65] text-white/65">
            {c.desc}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* ОДИНАКОВЫЕ РАЗМЕРЫ КНОПОК: !h-[46px] px-7 */}
              <Button className="btn-shine flex !h-[46px] items-center px-7 text-[15px] !leading-[0]" href="https://t.me/whyrataff" target="_blank" rel="noopener">
                <span className="mr-2 grid place-items-center text-[#04110b]" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .8-.2 1.2-.6l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.4-1.3Z" fill="currentColor"/></svg>
                </span>
                <span>Telegram</span>
              </Button>
              
              <a href="https://www.linkedin.com/in/liubomyr-myshchenko-93413a3b2/" target="_blank" rel="noopener" className="group flex h-[46px] items-center justify-center rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-7 text-[15px] font-semibold text-white transition-all hover:bg-[#0A66C2]/20 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
            
            <a href="/Whyrat_CV.pdf" download className="group mt-4 flex items-center gap-2 rounded-full border border-white/5 bg-white/[.02] px-4 py-2 text-[13px] text-white/40 transition hover:bg-white/[.06] hover:text-white/80">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/>
              </svg>
              <span>{c.btnPdf} <span className="opacity-50 tracking-wide">({c.btnPdfSub})</span></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content.trim(), 'utf8');
    console.log('✅ Обновлено:', filePath);
  }
}
console.log('\\n🎉 Все баги UI пофикшены! Кнопки ровные, иконки цветные, ширина 1200px восстановлена.');