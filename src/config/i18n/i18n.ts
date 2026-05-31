//# Utils //
import Readln from '../../shared/utils/ReadLn'
//# Libs //
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next'

await i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: await Readln("en") },
            pt: { translation: await Readln("pt") }
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18next