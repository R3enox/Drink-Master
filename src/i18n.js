import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    whitelist: ['en', 'ua'],
    fallbackLng: 'ua', // use en if detected lng is not available
    // saveMissing: true, // send not translated keys to endpoint
    loadPath: '/Locales/{{lng}}/{{ns}}.json',
  addPath: 'Locales/add/{{lng}}/{{ns}}',
  });

export default i18n;
