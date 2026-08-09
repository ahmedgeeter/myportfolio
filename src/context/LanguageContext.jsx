import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLocale, getNested, translations } from '../lib/i18n';

const STORAGE_KEY = 'portfolio-locale';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar' || stored === 'en') return stored;
    } catch {
      /* ignore */
    }
    return defaultLocale;
  });

  const setLocale = useCallback((next) => {
    if (next !== 'en' && next !== 'ar') return;
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const isRTL = locale === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = isRTL ? 'rtl' : 'ltr';
  }, [locale, isRTL]);

  const t = useCallback(
    (path) => {
      const bundle = translations[locale] || translations.en;
      const value = getNested(bundle, path);
      if (value !== undefined) return value;
      return getNested(translations.en, path) ?? path;
    },
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      isRTL,
      t,
    }),
    [locale, setLocale, isRTL, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
