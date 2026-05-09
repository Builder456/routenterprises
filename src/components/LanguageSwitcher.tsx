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
    // Country -> Google Translate language code
    const countryToLang: Record<string, string> = {
      US: "en", GB: "en", AU: "en", CA: "en", IN: "en", IE: "en", NZ: "en", ZA: "en",
      SA: "ar", AE: "ar", EG: "ar", QA: "ar", KW: "ar", BH: "ar", OM: "ar", JO: "ar", IQ: "ar", LB: "ar", SY: "ar", YE: "ar", LY: "ar", DZ: "ar", MA: "ar", TN: "ar",
      DE: "de", AT: "de", CH: "de",
      FR: "fr", BE: "fr", LU: "fr", SN: "fr", CI: "fr",
      ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es", GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es", SV: "es", NI: "es", CR: "es", PA: "es", UY: "es",
      IT: "it", VA: "it", SM: "it",
      PT: "pt", BR: "pt", AO: "pt", MZ: "pt",
      NL: "nl",
      RU: "ru", BY: "ru", KZ: "ru", KG: "ru",
      CN: "zh-CN", SG: "zh-CN",
      TW: "zh-TW", HK: "zh-TW", MO: "zh-TW",
      JP: "ja",
      KR: "ko",
      TH: "th",
      VN: "vi",
      ID: "id",
      MY: "ms",
      PH: "tl",
      TR: "tr",
      PL: "pl",
      UA: "uk",
      EL: "el", GR: "el",
      SE: "sv",
      NO: "no",
      DK: "da",
      FI: "fi",
      CZ: "cs",
      RO: "ro",
      HU: "hu",
      BG: "bg",
      IL: "iw",
      IR: "fa", AF: "fa",
      PK: "ur",
      BD: "bn",
      LK: "si",
      NP: "ne",
      MM: "my",
      KH: "km",
    };

    const detectAndSet = async () => {
      const stored = localStorage.getItem("preferredLang");
      if (stored) return;

      let lang = "en";
      try {
        // Free geolocation API (no API key required)
        const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          const country = (data.country_code || data.country || "").toUpperCase();
          if (country && countryToLang[country]) {
            lang = countryToLang[country];
          }
        }
      } catch {
        // Fallback to browser language
        lang = localeToLang(navigator.language || "en");
      }

      localStorage.setItem("preferredLang", lang);
      if (lang && lang !== "en") {
        setCookie(lang);
        // Reload so Google Translate picks up the new cookie
        window.location.reload();
      }
    };
    detectAndSet();

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
