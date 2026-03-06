import { createContext, useContext, useState, useCallback } from "react";
import en from "./en";
import it from "./it";

const translations = { en, it };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-lang");
      if (saved) return saved;
      const browserLang = navigator.language?.split("-")[0];
      return browserLang === "it" ? "it" : "en";
    } catch {
      return "en";
    }
  });

  const setLang = useCallback((l) => {
    setLangState(l);
    try {
      localStorage.setItem("portfolio-lang", l);
    } catch {}
  }, []);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let val = translations[lang];
      for (const k of keys) {
        val = val?.[k];
        if (val === undefined) break;
      }
      if (val === undefined) {
        // fallback to English
        val = translations.en;
        for (const k of keys) {
          val = val?.[k];
          if (val === undefined) return key;
        }
      }
      return val;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
