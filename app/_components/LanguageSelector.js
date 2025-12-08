"use client";
import { useLanguage } from "../_context/LanguageContext";

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="pl- flex gap-4 text-2xl">
      <button
        onClick={() => setLocale("it")}
        className={`${
          locale === "it" ? "ring-2 ring-accent-900 rounded-full" : ""
        }`}
        aria-label="Italiano"
      >
        🇮🇹
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`${
          locale === "en" ? "ring-2 ring-accent-900  rounded-full" : ""
        }`}
        aria-label="English"
      >
        🇬🇧
      </button>
    </div>
  );
}
