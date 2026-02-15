import fs from 'fs';
import path from 'path';

const files = {
  'src/components/Header.tsx': `import * as React from "react";
import { Button } from "./ui/Button";
import { cn } from "../lib/cn";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "Summary" },
  { href: "#experience", label: "Опыт работы" },
  { href: "#skills", label: "Стек & Инструменты" },
  { href: "#mindset", label: "Soft Skills" },
  { href: "#results", label: "Результаты" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("#top");

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

  return (
    <header
      className={cn(
        "sticky top-0 z-30 transition",
        scrolled ? "bg-black/55 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[76px] w-[min(1200px,calc(100%-48px))] items-center justify-between gap-4">
        <a className="flex items-center gap-2.5" href="#top" aria-label="Media Buyer">
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[.04]">
            <img src="/src/assets/logo.svg" alt="Logo" className="h-full w-full object-contain p-1.5" />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-white/90">
            Media Buyer
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "group relative px-1 py-2 text-[14px] transition",
                active === l.href ? "text-white/95" : "text-white/65 hover:text-white/95"
              )}
            >
              {l.label}
              <span
                className={cn(
                  "pointer-events-none absolute left-1 right-1 -bottom-[1px] h-[2px] origin-left rounded-full bg-accent/70 transition",
                  active === l.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button size="sm" href="#contact" className="px-5 py-2.5 text-[14px] btn-shine">
            Связаться
          </Button>
        </div>

        <button
          className={cn("md:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/[.04] shadow-deep")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1">
            <span className="h-[2px] w-[18px] rounded-full bg-white/80" />
            <span className="h-[2px] w-[18px] rounded-full bg-white/80" />
            <span className="h-[2px] w-[18px] rounded-full bg-white/80" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-black/45"
          >
            <div className="mx-auto w-[min(1200px,calc(100%-48px))] py-3">
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={cn("px-2 py-3 text-[15px]", active === l.href ? "text-white/95" : "text-white/80")}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button size="sm" href="#contact" onClick={() => setOpen(false)} className="w-full justify-center btn-shine">
                    Связаться
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

export function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-68px)] py-[104px] max-md:py-[84px] flex items-center">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[13px] tracking-[.01em] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            Рассматриваю позицию Junior Media Buyer / Buyer Helper
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 leading-[1.0]">
            <span className="block text-[clamp(32px,5vw,56px)] font-black tracking-[-0.05em] text-white/95">
              Junior Media Buyer
            </span>
            <span className="mt-2 block pb-1 text-[clamp(38px,6vw,72px)] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#8CFFDC] to-accent2">
              Gambling & Betting | Meta
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5 text-[13px] text-white/75">
            {[
              {
                ic: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                t: "2 года FB (ПБ)"
              },
              {
                ic: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                t: "Remote / Full-time"
              },
              {
                ic: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                t: "Timezone: UA"
              },
            ].map(({ic, t}) => (
              <span
                key={t}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2.5"
              >
                <span className="text-accent/90">{ic}</span>
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-[920px] text-[18px] leading-[1.7] text-white/65">
            4 года в индустрии, из которых 2 года занимался дизайном креативов и 2 года заливом по модели First Bill (ПБ). Главный скилл — умение глубоко анализировать метрики и масштабировать кампании с фокусом на позитивный ROI.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button className="btn-shine" href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .8-.2 1.2-.6l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.4-1.3Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Написать в Telegram
            </Button>
            <Button variant="ghost" href="#experience">
              Опыт работы
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-wrap justify-center gap-5 pt-2">
            {[
              ["До $3K", "Профит в Gambling (ПБ)"],
              ["100%", "Пиковый ROI в товарке"],
              ["10+", "ГЕО в работе"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="min-w-[220px] rounded-2xl border border-white/10 bg-white/[.02] px-4 py-3.5 shadow-[0_18px_70px_rgba(0,0,0,.30)]"
              >
                <div className="text-[20px] font-extrabold tracking-[-0.02em] text-accent/90">
                  {v}
                </div>
                <div className="mt-1 text-[13px] text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-7 flex justify-center opacity-80">
          <div className="relative h-7 w-[18px] rounded-full border border-white/20">
            <div className="absolute left-1/2 top-1.5 h-1.5 w-[3px] -translate-x-1/2 rounded-full bg-accent/90 animate-wheel" />
          </div>
        </div>

        <motion.div
          className="mx-auto mt-10 h-[1px] w-[min(720px,95%)] bg-gradient-to-r from-transparent via-white/10 to-transparent"
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

function IconIndustry() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
}
function IconPalette() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>;
}
function IconTeams() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
function IconLang() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>;
}

const bullets = [
  { ic: <IconIndustry />, text: "4 года в арбитражной индустрии" },
  { ic: <IconPalette />, text: "2 года работы дизайнером креативов" },
  { ic: <IconTeams />, text: "Опыт в разных командах (в т.ч. приватных)" },
  { ic: <IconLang />, text: "RU / UA (Native), ENG (Intermediate/чтение, диалоги)" },
];

const chips = ["Аналитика", "Масштабирование", "ROI-focus", "Meta Ads"];

export function About() {
  return (
    <section id="about" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Коротко <span className="text-accent">о главном</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <Reveal delay={0.05}>
            <Card className="p-8">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em]">
                Бэкграунд (Summary)
              </div>

              <ul className="grid gap-3.5">
                {bullets.map((b) => (
                  <li key={b.text} className="flex items-start gap-3 text-[18px] text-white/80">
                    <span className="mt-[1px] grid h-[30px] w-[30px] place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90">
                      {b.ic}
                    </span>
                    <span className="leading-[1.45]">{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[14px] text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8">
              <div className="mb-4 text-[18px] font-extrabold tracking-[-0.02em]">
                Подход к работе
              </div>

              <p className="text-[18px] leading-[1.65] text-white/70">
                Благодаря бэкграунду в дизайне я отлично понимаю механику креативов и то, как они влияют на конверт. Сейчас мой главный фокус — это работа с данными, аналитика залива и поиск связок с позитивным ROI.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, "Качество креативов", "Контроль CTR и конверта"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, "Строгая аналитика", "Упор на прибыльность (ROI)"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>, "Адаптивность", "Работа с антидетект/прокси"],
                  [<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, "Стрессоустойчивость", "Готовность к штормам FB"],
                ].map(([ic, t, d], i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className="grid h-8 w-8 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent/90">
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
                Залив трафика с Facebook (Meta Ads) по модели ПБ (First Bill). Работа в связках CPA/CPL.
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
            <Card className="p-7">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="text-[18px] font-extrabold tracking-[-0.02em]">Media Buyer • E-commerce</div>
                <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[14px] text-accent/90 whitespace-nowrap">
                  3 месяца
                </div>
              </div>

              <p className="text-[16px] leading-[1.55] text-white/65">
                Залив на белую/серую товарку. Фокус на удержание положительного ROI и масштабирование профитных связок.
              </p>

              <div className="mt-4 grid gap-2.5 grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
                  <div className="text-[16px] font-extrabold text-accent/90">$1000</div>
                  <div className="mt-1 text-[12px] text-white/55">Спенд в месяц</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
                  <div className="text-[16px] font-extrabold text-accent/90">До 100%</div>
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
}`,

  'src/sections/Skills.tsx': `import { Reveal } from "../components/Reveal";
import { Card } from "../components/ui/Card";

const tools = [
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
    title: "Meta Ads & Infrastructure", 
    desc: "Работа с FB Ads Manager, FB Pixel. Использование FB Helper для упрощения рутины. Прогрев аккаунтов и работа с прокси." 
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, 
    title: "Antidetect Browsers", 
    desc: "Плотный опыт работы с антиками для мультиаккаунтинга: Dolphin, OctoBrowser, Vision." 
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>, 
    title: "Трекинг & Аналитика", 
    desc: "Умение пользоваться Keitaro (настройка потоков, фильтрация). Понимание метрик CPA, CPL, ROI." 
  },
  { 
    ic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, 
    title: "Дополнительный стек", 
    desc: "Nooklz, различные AI Tools для генерации и обработки креативов. Работа со спай-сервисами." 
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Core Skills & <span className="text-accent">Stack</span>
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {tools.map((t, idx) => (
            <Reveal key={t.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent/90">
                    {t.ic}
                  </div>
                  <div className="text-[18px] font-extrabold tracking-[-0.02em]">{t.title}</div>
                </div>
                <div className="text-[16px] leading-[1.55] text-white/65">{t.desc}</div>
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

function IconLightning() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>; }
function IconBook() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5a3 3 0 0 1 3-3h13v18H7a3 3 0 0 0-3 3V5Z" stroke="currentColor" strokeWidth="2" /><path d="M7 2v18" stroke="currentColor" strokeWidth="2" opacity=".6" /></svg>; }
function IconRefresh() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M21 3v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IconUsers() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" opacity=".7"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/><path d="M16.5 3.1a4 4 0 0 1 0 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/></svg>; }

const items = [
  { tone: "amber", icon: <IconLightning />, title: "Быстрое обучение", desc: "Легко адаптируюсь к сложностям, быстро вникаю в новые офферы и правила платформ." },
  { tone: "cyan", icon: <IconRefresh />, title: "Стрессоустойчивость", desc: "Спокойно решаю задачи в условиях банов FB, микроштормов и неопределенности." },
  { tone: "emerald", icon: <IconBook />, title: "Аналитическое мышление", desc: "Принимаю решения на основе цифр, а не интуиции. Оптимизирую то, что конвертит." },
  { tone: "green", icon: <IconUsers />, title: "Работа в команде", desc: "Умею слушать тимлида, адекватно воспринимать фидбек и слаженно работать в коллективе." },
] as const;

const toneStyles = {
  amber: { box: "border-amber-400/25 bg-amber-400/10", ic: "text-amber-300" },
  emerald: { box: "border-emerald-400/25 bg-emerald-400/10", ic: "text-emerald-300" },
  cyan: { box: "border-cyan-400/25 bg-cyan-400/10", ic: "text-cyan-300" },
  green: { box: "border-accent/25 bg-accent/10", ic: "text-accent/90" },
};

export function Mindset() {
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

const features = [
  {
    title: "Профит в Gambling",
    desc: "Выходил на профит до $3000 в гемблинг вертикали при работе по First Bill.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    title: "Результаты в товарке",
    desc: "Месячный спенд $1000 на E-commerce с удержанием показателя ROI до 100%.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  },
  {
    title: "Оптимизация креативов",
    desc: "За счет 2 лет опыта в дизайне мгновенно понимаю, какой визуал зацепит аудиторию, и как его адаптировать для лучшего конверта.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
];

export function Results() {
  return (
    <section id="results" className="py-[96px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <Reveal>
          <h2 className="mb-7 text-center text-[40px] max-md:text-[34px] font-bold tracking-[-0.02em]">
            Ключевые <span className="text-accent">Результаты</span>
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-7 md:grid-cols-3">
          {features.map((f, idx) => (
            <Reveal key={f.title} delay={0.05 + idx * 0.05}>
              <Card className="p-7 h-full">
                <div className="flex h-full flex-col">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent/90">
                    {f.icon}
                  </div>
                  <div className="mb-2 text-[18px] font-extrabold tracking-[-0.02em]">{f.title}</div>
                  <div className="text-[16px] leading-[1.55] text-white/65">{f.desc}</div>
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

export function Contact() {
  return (
    <section id="contact" className="py-[96px] pb-[104px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto mb-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[14px] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            Открыт к предложениям
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-3 text-center text-[34px] font-extrabold tracking-[-0.03em]">
            Давайте <span className="text-accent">работать вместе</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-6 max-w-[720px] text-[18px] leading-[1.65] text-white/65">
            Рассматриваю Remote / Full-time. Если вы ищете Junior Media Buyer или Buyer Helper с крепкой базой и пониманием креативов — жду сообщения!
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
  
  // Создаем папки если их вдруг нет
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Записываем обновленный файл БЕЗ проблемного '\n'
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log('✅ Успешно обновлен:', filePath);
}

console.log('\\n🎉 Готово! Все секции успешно обновлены (ошибка синтаксиса исправлена).');