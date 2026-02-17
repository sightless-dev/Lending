import fs from 'fs';
import path from 'path';

const files = {
  'src/context/LanguageContext.tsx': `import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'ua' | 'ru';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'ua',
  setLang: () => {},
});

export const useLang = () => useContext(LangContext);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ua');

  useEffect(() => {
    const saved = localStorage.getItem('app-lang') as Lang;
    if (saved && (saved === 'ua' || saved === 'ru')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('app-lang', l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}`,

  'src/main.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { LangProvider } from './context/LanguageContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
);`,

  'src/components/Header.tsx': `import * as React from "react";
import { Button } from "./ui/Button";
import { cn } from "../lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("#top");
  const { lang, setLang } = useLang();

  const t = {
    ua: {
      about: "Про мене", exp: "Досвід роботи", skills: "Стек & Інструменти", mindset: "Підхід", results: "Результати", contact: "Контакти", btn: "Зв'язатися"
    },
    ru: {
      about: "Обо мне", exp: "Опыт работы", skills: "Стек & Инструменты", mindset: "Подход", results: "Результаты", contact: "Контакты", btn: "Связаться"
    }
  }[lang];

  const links = [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.exp },
    { href: "#skills", label: t.skills },
    { href: "#mindset", label: t.mindset },
    { href: "#results", label: t.results },
    { href: "#contact", label: t.contact },
  ];

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as any);
  }, []);

  React.useEffect(() => {
    const ids = ["top", "about", "experience", "skills", "mindset", "results", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive("#" + visible.target.id);
      },
      { threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-20% 0px -55% 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const LangSwitcher = () => (
    <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[.04] p-1 shadow-deep">
      <button onClick={() => setLang('ua')} className={cn("px-2 py-1 text-[12px] font-bold rounded-md transition", lang === 'ua' ? "bg-accent/20 text-accent" : "text-white/40 hover:text-white/90")}>UA</button>
      <button onClick={() => setLang('ru')} className={cn("px-2 py-1 text-[12px] font-bold rounded-md transition", lang === 'ru' ? "bg-accent/20 text-accent" : "text-white/40 hover:text-white/90")}>RU</button>
    </div>
  );

  return (
    <header className={cn("sticky top-0 z-30 transition", scrolled ? "bg-black/55 backdrop-blur-xl" : "bg-transparent")}>
      <div className="mx-auto flex h-[76px] w-[min(1200px,calc(100%-48px))] items-center justify-between gap-4">
        <a className="flex items-center gap-2.5" href="#top" aria-label="Media Buyer">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-white/90">
            Media Buyer
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={cn("group relative px-1 py-2 text-[14px] transition", active === l.href ? "text-white/95" : "text-white/65 hover:text-white/95")}>
              {l.label}
              <span className={cn("pointer-events-none absolute left-1 right-1 -bottom-[1px] h-[2px] origin-left rounded-full bg-accent/70 transition", active === l.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100")} />
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LangSwitcher />
          <Button size="sm" href="#contact" className="px-5 py-2.5 text-[14px] btn-shine">
            {t.btn}
          </Button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitcher />
          <button className="grid h-10 w-10 place-items-center rounded-xl bg-white/[.04] shadow-deep" onClick={() => setOpen((v) => !v)}>
            <div className="flex flex-col gap-1">
              <span className="h-[2px] w-[18px] rounded-full bg-white/80" />
              <span className="h-[2px] w-[18px] rounded-full bg-white/80" />
              <span className="h-[2px] w-[18px] rounded-full bg-white/80" />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="md:hidden overflow-hidden bg-black/45">
            <div className="mx-auto w-[min(1200px,calc(100%-48px))] py-3">
              <div className="flex flex-col">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className={cn("px-2 py-3 text-[15px]", active === l.href ? "text-white/95" : "text-white/80")} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button size="sm" href="#contact" onClick={() => setOpen(false)} className="w-full justify-center btn-shine">
                    {t.btn}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}`,

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
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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

  'src/sections/About.tsx': `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { useLang } from "../context/LanguageContext";

function IconIndustry() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>; }
function IconPalette() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>; }
function IconTeams() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function IconLang() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>; }

const chips = ["Meta Ads", "AdsPower", "Keitaro", "Автозаливи"];

export function About() {
  const { lang } = useLang();

  const c = {
    ua: {
      titlePart1: "Коротко ", titlePart2: "про головне",
      summaryTitle: "Бекграунд (Summary)",
      b1: "4 роки в арбітражній індустрії", b2: "2 роки роботи дизайнером креативів", b3: "Досвід роботи в різних командах", b4: "UA/RU (Native), ENG (Технічна/Читання)",
      approachTitle: "Підхід до роботи",
      approachDesc: <>Мій головний фокус — це технічна частина заливу, контроль метрик та пошук зв'язок зі стабільним <strong>позитивним ROI</strong>. Завдяки бекграунду в дизайні я <span className="text-white/90">розумію, як креатив впливає на аукціон FB</span>.</>,
      g1Title: "Автоматизація", g1Desc: "Маю досвід роботи з Nooklz",
      g2Title: "Аналітика", g2Desc: "Робота з FTD / Inst2Dep",
      g3Title: "Технічна база", g3Desc: "AdsPower, проксі, сетапи",
      g4Title: "Стресостійкість", g4Desc: "Спокійна реакція на шторми"
    },
    ru: {
      titlePart1: "Коротко ", titlePart2: "о главном",
      summaryTitle: "Бэкграунд (Summary)",
      b1: "4 года в арбитражной индустрии", b2: "2 года работы дизайнером креативов", b3: "Опыт работы в разных командах", b4: "UA/RU (Native), ENG (Технический/Чтение)",
      approachTitle: "Подход к работе",
      approachDesc: <>Мой главный фокус — это техническая часть залива, контроль метрик и поиск связок со стабильным <strong>позитивным ROI</strong>. Благодаря бэкграунду в дизайне я <span className="text-white/90">понимаю, как креатив влияет на аукцион FB</span>.</>,
      g1Title: "Автоматизация", g1Desc: "Имею опыт работы с Nooklz",
      g2Title: "Аналитика", g2Desc: "Работа с FTD / Inst2Dep",
      g3Title: "Техническая база", g3Desc: "AdsPower, прокси, сетапы",
      g4Title: "Стрессоустойчивость", g4Desc: "Спокойная реакция на штормы"
    }
  }[lang];

  return (
    <section id="about" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <Reveal delay={0.05}>
            <Card className="p-8 h-full">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                {c.summaryTitle}
              </div>
              <ul className="grid gap-3.5">
                {[
                  { ic: <IconIndustry />, text: c.b1 },
                  { ic: <IconPalette />, text: c.b2 },
                  { ic: <IconTeams />, text: c.b3 },
                  { ic: <IconLang />, text: c.b4 },
                ].map((b) => (
                  <li key={b.text} className="flex items-start gap-3 text-[18px] text-white/80">
                    <span className="mt-[1px] grid h-[30px] w-[30px] place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90 shrink-0">
                      {b.ic}
                    </span>
                    <span className="leading-[1.45]">{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[14px] text-white/70">
                    {chip}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8 h-full border-purple-500/10 hover:border-purple-400/30">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em] text-white/95">
                {c.approachTitle}
              </div>
              <p className="text-[18px] leading-[1.65] text-white/70">
                {c.approachDesc}
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, c.g1Title, c.g1Desc, "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, c.g2Title, c.g2Desc, "purple"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>, c.g3Title, c.g3Desc, "accent"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, c.g4Title, c.g4Desc, "accent"],
                ].map(([ic, t, d, color], i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className={\`grid h-8 w-8 place-items-center rounded-xl border \${color === 'purple' ? 'border-purple-400/20 bg-purple-400/10 text-purple-400' : 'border-accent/20 bg-accent/10 text-accent/90'}\`}>
                        {ic}
                      </div>
                      <div className="text-[14px] font-extrabold text-white/85">{t as string}</div>
                    </div>
                    <div className="text-[12px] text-white/60">{d as string}</div>
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
}`,

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
        { title: "Додатковий стек", desc: "Spy-сервіси, базове розуміння прилок (PWA/Webview).", tone: "purple" },
      ]
    },
    ru: {
      titlePart1: "Стек &", titlePart2: "Инструменты",
      tools: [
        { title: "Meta Ads & Инфраструктура", desc: "Работа с FB Ads Manager. Использование автозаливов. Работа с агентскими кабинетами, трастами и сетапами.", tone: "accent" },
        { title: "Antidetect Browsers", desc: "Плотный опыт работы с антиками для мультиаккаунтинга: AdsPower, Dolphin, OctoBrowser.", tone: "accent" },
        { title: "Трекинг & Аналитика", desc: "Уверенное владение Keitaro (потоки, фильтрация). Анализ трафика по метрикам: CTR, CPM, Inst2Dep, FTD.", tone: "accent" },
        { title: "Дополнительный стек", desc: "Spy-сервисы, базовое понимание прилок (PWA/Webview).", tone: "purple" },
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
    <section id="skills" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
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
                <div className="text-[16px] leading-[1.55] text-white/65" dangerouslySetInnerHTML={{ __html: t.desc.replace(/(FB Ads Manager|AdsPower|Dolphin|OctoBrowser|Keitaro|CTR|CPM|Inst2Dep|FTD)/g, '<strong>$1</strong>') }} />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/sections/Mindset.tsx': `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";
import { cn } from "../lib/cn";
import { useLang } from "../context/LanguageContext";

function IconLightning() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>; }
function IconBook() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5a3 3 0 0 1 3-3h13v18H7a3 3 0 0 0-3 3V5Z" stroke="currentColor" strokeWidth="2" /><path d="M7 2v18" stroke="currentColor" strokeWidth="2" opacity=".6" /></svg>; }
function IconRefresh() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M21 3v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IconUsers() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" opacity=".7"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/><path d="M16.5 3.1a4 4 0 0 1 0 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/></svg>; }

const toneStyles = {
  amber: { box: "border-amber-400/25 bg-amber-400/10", ic: "text-amber-300" },
  emerald: { box: "border-emerald-400/25 bg-emerald-400/10", ic: "text-emerald-300" },
  cyan: { box: "border-cyan-400/25 bg-cyan-400/10", ic: "text-cyan-300" },
  green: { box: "border-accent/25 bg-accent/10", ic: "text-accent/90" },
} as const;

export function Mindset() {
  const { lang } = useLang();

  const items = {
    ua: [
      { tone: "amber" as const, icon: <IconLightning />, title: "Самостійність", desc: "Не потребую мікроменеджменту. Знаю, як запустити, оптимізувати і масштабувати зв'язку." },
      { tone: "cyan" as const, icon: <IconRefresh />, title: "Стресостійкість", desc: "Спокійно працюю в умовах банів та мікроштормів FB. Проблема — це просто задача." },
      { tone: "emerald" as const, icon: <IconBook />, title: "Орієнтація на ROI", desc: "Заливаю не заради кліків чи красивих графіків, а заради фінального профіту." },
      { tone: "green" as const, icon: <IconUsers />, title: "Командний гравець", desc: "Адекватно сприймаю фідбек, ділюся підходами, поважаю процеси тімліда." },
    ],
    ru: [
      { tone: "amber" as const, icon: <IconLightning />, title: "Самостоятельность", desc: "Не нуждаюсь в микроменеджменте. Знаю, как запустить, оптимизировать и масштабировать связку." },
      { tone: "cyan" as const, icon: <IconRefresh />, title: "Стрессоустойчивость", desc: "Спокойно работаю в условиях банов и микроштормов FB. Проблема — это просто задача." },
      { tone: "emerald" as const, icon: <IconBook />, title: "Ориентация на ROI", desc: "Заливаю не ради кликов или красивых графиков, а ради финального профита." },
      { tone: "green" as const, icon: <IconUsers />, title: "Командный игрок", desc: "Адекватно воспринимаю фидбек, делюсь подходами, уважаю процессы тимлида." },
    ]
  }[lang];

  return (
    <section id="mindset" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Soft <span className="text-accent">Skills</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {items.map((m, idx) => {
            const t = toneStyles[m.tone];
            return (
              <Reveal key={m.title} delay={0.05 + idx * 0.05}>
                <Card className="p-7">
                  <div className="flex items-start gap-4">
                    <div className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-2xl border", t.box, t.ic)}>
                      {m.icon}
                    </div>
                    <div>
                      <div className="mb-1 text-[18px] font-extrabold tracking-[-0.02em]">{m.title}</div>
                      <div className="text-[16px] leading-[1.55] text-white/65">{m.desc}</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,

  'src/sections/Results.tsx': `import { Reveal } from "../components/Reveal";
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
      desc: <>Розглядаю позицію Media Buyer (<strong>Remote / Full-time</strong>). Маю базу, розумію процеси, готовий брати об'єми — чекаю на повідомлення!</>
    },
    ru: {
      badge: "Открыт к предложениям",
      titlePart1: "Давайте", titlePart2: "работать вместе",
      desc: <>Рассматриваю позицию Media Buyer (<strong>Remote / Full-time</strong>). Есть база, понимаю процессы, готов брать объемы — жду сообщения!</>
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
          <div className="flex justify-center">
            <Button href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </span>
              @whyrataff
            </Button>
          </div>
        </Reveal>
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
console.log('\\n🎉 Мультиязычность установлена корректно со всеми твоими текстами!');