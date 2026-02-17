import React, { createContext, useContext, useState, useEffect } from 'react';

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
}