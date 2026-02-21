import * as React from "react";
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
    ua: { about: "Про мене", exp: "Досвід", skills: "Стек", contact: "Контакти", btn: "Зв'язатися" },
    ru: { about: "Обо мне", exp: "Опыт", skills: "Стек", contact: "Контакты", btn: "Связаться" }
  }[lang];

  const links = [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.exp },
    { href: "#skills", label: t.skills },
    { href: "#contact", label: t.contact },
  ];

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as any);
  }, []);

  React.useEffect(() => {
    const ids = ["top", "about", "experience", "skills", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive("#" + visible.target.id);
      },
      { threshold: [0.2, 0.5], rootMargin: "-20% 0px -55% 0px" }
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
    <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", scrolled ? "bg-black/55 backdrop-blur-xl" : "bg-transparent")}>
      <div className="mx-auto flex h-[76px] w-[min(1200px,calc(100%-48px))] items-center justify-between relative">
        <a className="flex items-center gap-2.5 relative z-10" href="#top" aria-label="Media Buyer">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-white/90">
            Media Buyer
          </span>
        </a>
        
        {/* АБСОЛЮТНОЕ ПОЗИЦИОНИРОВАНИЕ ДЛЯ ИДЕАЛЬНОГО ЦЕНТРА */}
        <nav className="hidden items-center gap-8 md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={cn("group relative px-1 py-2 text-[14px] transition", active === l.href ? "text-white/95" : "text-white/65 hover:text-white/95")}>
              {l.label}
              <span className={cn("pointer-events-none absolute left-1 right-1 -bottom-[1px] h-[2px] origin-left rounded-full bg-accent/70 transition", active === l.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100")} />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 relative z-10">
          <LangSwitcher />
          <Button size="sm" href="#contact" className="px-5 py-2.5 text-[14px] btn-shine">
            {t.btn}
          </Button>
        </div>
      </div>
    </header>
  );
}