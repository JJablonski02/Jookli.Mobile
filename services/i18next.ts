import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import sv from "../locales/sv.json";
import pl from "../locales/pl.json";
import da from "../locales/da.json";
import de from "../locales/de.json";
import ar from "../locales/ar.json";

export const languageResources = {
    pl: {translation: pl},
    en: {translation: en},
    sv: {translation: sv},
    da: {translation: da},
    de: {translation: de},
    ar: {translation: ar},
}


i18n.use(initReactI18next).init({
    resources: languageResources,
    lng: 'en',
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    defaultNS: 'translation',
    react: {useSuspense: false}
});

export default i18n;