import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en.json";
import { fi } from "./fi.json";
import { nl } from "./nl.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "fi",
  interpolation: {
    escapeValue: false
  },
  resources: {
    en,
    fi,
    nl
  }
});

export default i18n;
