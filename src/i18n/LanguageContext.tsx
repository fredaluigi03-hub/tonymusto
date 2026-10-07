import React, { createContext, useContext, useEffect, useState } from 'react';

export const LANGUAGES = [
  { code: 'it', label: 'Italiano' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
] as const;

export type Lang = (typeof LANGUAGES)[number]['code'];

const STORAGE_KEY = 'tony_musto_lang';

const isLang = (value: unknown): value is Lang => LANGUAGES.some(l => l.code === value);

// Saved choice first, then the browser language, then Italian.
const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // storage blocked: fall through to the browser language
  }
  const browser = navigator.language.slice(0, 2);
  return isLang(browser) ? browser : 'it';
};

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void } | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // the choice just won't survive a reload
    }
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
};
