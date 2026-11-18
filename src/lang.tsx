import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang } from "./content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)[Lang] };

const LangContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ru") return saved;
  } catch {}
  return typeof navigator !== "undefined" && /^(ru|uk|be)/i.test(navigator.language) ? "ru" : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  return <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
