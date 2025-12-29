"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          language === "en"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
            : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
        }`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => setLanguage("de")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          language === "de"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
            : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
        }`}
      >
        🇩🇪 DE
      </button>
    </div>
  );
}
