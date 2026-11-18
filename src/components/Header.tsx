import { useEffect, useState } from "react";
import { useLang } from "../lang";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#experience", "01", t.nav.exp],
    ["#project", "02", t.nav.projects],
    ["#stack", "03", t.nav.stack],
    ["#contact", "04", t.nav.contact],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm tracking-[0.08em] text-paper">
          <span className="block h-3.5 w-3.5 bg-accent" aria-hidden="true" />
          WHYRAT/
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map(([href, n, label]) => (
            <a key={href} href={href} className="label text-muted transition-colors hover:text-paper">
              <span className="text-edge">{n}</span> {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center border border-edge font-mono text-xs" role="group" aria-label="Language">
          {(["en", "ru"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`min-h-[40px] min-w-[44px] px-3 uppercase transition-colors ${
                lang === l ? "bg-paper text-ink" : "text-muted hover:text-paper"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
