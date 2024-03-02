import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Localization } from "expo-localization";

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


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources,
    react: {useSuspense: false},
});

export default i18next;

// lng: 'en',
// compatibilityJSON: 'v3',
// defaultNS: 'translation',
// react: {useSuspense: false}