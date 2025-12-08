// app/_context/LanguageContext.js
"use client";
import { createContext, useState, useContext } from "react";
import { translations } from "../_data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("it"); // default language

  const t = translations[locale]; // all translations for current locale

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
