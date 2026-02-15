import * as React from "react";
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
          {/* Убрали рамку и фон */}
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
            <img src="/src/assets/logo.png" alt="Logo" className="h-full w-full object-cover" />
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
}