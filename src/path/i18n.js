// i18n.js
import i18n from "i18next";

i18n.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "en", // Default language
    resources: {
        en: {
            translation: require("../locals/en/translation.json"),
        },
        es: {
            translation: require("../locals/es/translation.json"),
        },
    },
});

export default i18n;
