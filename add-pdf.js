import fs from 'fs';
import path from 'path';

const files = {
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
      btnTG: "Написати в Telegram",
      btnExp: "Досвід роботи",
      btnPdf: "Завантажити PDF",
      btnPdfSub: "для ваших CRM",
      stats: [
        ["$20K+", "Досвід спенду/міс"],
        ["0-40%", "Середній ROI"],
        ["GEO", "Досвід з Tier 1-3"],
      ]
    },
    ru: {
      badge: "Рассматриваю позицию Junior Media Buyer",
      t1: "Опыт Meta Ads",
      t2: "Remote / Full-time",
      t3: "Timezone: UA",
      desc: <>4 года в индустрии: 2 года бэкграунда в дизайне креативов и 2 года баинга (Meta Ads). <strong>Умею работать с реальными бюджетами</strong>, понимаю алгоритмы FB и знаю, как контролировать метрики для выхода на стабильный плюсовой ROI.</>,
      btnTG: "Написать в Telegram",
      btnExp: "Опыт работы",
      btnPdf: "Скачать PDF",
      btnPdfSub: "для ваших CRM",
      stats: [
        ["$20K+", "Опыт спенда/мес"],
        ["0-40%", "Средний ROI"],
        ["GEO", "Опыт с Tier 1-3"],
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
            <span className="mt-1 block pb-1 text-[clamp(38px,6vw,68px)] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent2">
              Gambling & Betting
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[14px] text-white/80">
            {[
              { ic: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, t: content.t1 },
              { ic: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t: content.t2 },
              { ic: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, t: content.t3 },
            ].map(({ic, t}) => (
              <span key={t} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
                <span className="text-accent/90">{ic}</span>{t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-[920px] text-[18px] leading-[1.7] text-white/65">
            {content.desc}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-shine" href="https://t.me/whyrataff" target="_blank" rel="noopener">
                <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .8-.2 1.2-.6l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.4-1.3Z" fill="currentColor"/></svg>
                </span>
                {content.btnTG}
              </Button>
              <Button variant="ghost" href="#experience">
                {content.btnExp}
              </Button>
            </div>
            
            {/* Акуратна кнопка PDF */}
            <a href="/Whyrat_CV.pdf" download className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[.02] px-4 py-2 text-[13px] text-white/50 transition hover:bg-white/[.06] hover:text-white/90">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/>
              </svg>
              <span>{content.btnPdf} <span className="opacity-50 tracking-wide">({content.btnPdfSub})</span></span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap justify-center gap-5 pt-2">
            {content.stats.map(([v, l]) => (
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
    <section id="contact" className="py-[96px] pb-[104px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto mb-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[14px] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            {c.badge}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-3 text-center text-[34px] font-extrabold tracking-[-0.03em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-6 max-w-[720px] text-[18px] leading-[1.65] text-white/65">
            {c.desc}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-col items-center gap-4 justify-center">
            <Button href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </span>
              @whyrataff
            </Button>
            
            <a href="/Whyrat_CV.pdf" download className="group mt-2 flex items-center gap-2 rounded-full border border-white/5 bg-white/[.02] px-4 py-2 text-[13px] text-white/50 transition hover:bg-white/[.06] hover:text-white/90">
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
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log('✅ Оновлено:', filePath);
}
console.log('\\n🎉 Кнопка завантаження PDF успішно додана в Hero та Contact!');