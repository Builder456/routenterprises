import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

// Browser locale -> Google Translate language code
const localeToLang = (locale: string): string => {
  const l = locale.toLowerCase();
  const map: Record<string, string> = {
    "zh-cn": "zh-CN", "zh-tw": "zh-TW", "zh-hk": "zh-TW",
    "pt-br": "pt", "pt-pt": "pt",
  };
  if (map[l]) return map[l];
  return l.split("-")[0];
};

const setCookie = (lang: string) => {
  // Google Translate reads the `googtrans` cookie: /auto/<lang>
  const value = `/auto/${lang}`;
  document.cookie = `googtrans=${value};path=/`;
  // also for parent domain
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length > 1) {
    document.cookie = `googtrans=${value};path=/;domain=.${parts.slice(-2).join(".")}`;
  }
};

const LanguageSwitcher = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Auto-detect on first visit
    const stored = localStorage.getItem("preferredLang");
    if (!stored) {
      const browserLang = localeToLang(navigator.language || "en");
      if (browserLang && browserLang !== "en") {
        setCookie(browserLang);
        localStorage.setItem("preferredLang", browserLang);
      } else {
        localStorage.setItem("preferredLang", "en");
      }
    }

    // Inject Google Translate
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
        setReady(true);
      };
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    } else {
      setReady(true);
    }
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-primary-foreground/80">
      <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
      <div
        id="google_translate_element"
        className="gtranslate-wrapper text-xs"
        aria-label="Select language"
      />
      {!ready && <span className="text-xs">…</span>}
    </div>
  );
};

export default LanguageSwitcher;
