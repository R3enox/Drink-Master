import { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./LanguageToggler.module.css"

const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const storedLang = localStorage.getItem('selectedLanguage') || i18n.language;
  const [activeButton, setActiveButton] = useState(storedLang);

  useEffect(() => {
    setActiveButton(storedLang);
  }, [storedLang]);

  const switchLanguage = useCallback((language) => {
    i18n.changeLanguage(language);
    setActiveButton(language);
    localStorage.setItem('selectedLanguage', language);
  }, [i18n]);

  const switchToEnglish = () => {
    switchLanguage('en');
  }

  const switchToUkrainian = () => {
    switchLanguage('uk');
  }

  return (
    <div className={styles['flex-container']}>
      <button
        className={`${styles.button} ${activeButton === 'en' ? styles.active : ''}`}
        disabled={activeButton === 'en'}
        onClick={switchToEnglish}
      >
        EN
      </button>
      <button
        className={`${styles.button} ${activeButton === 'uk' ? styles.active : ''}`}
        disabled={activeButton === 'uk'}
        onClick={switchToUkrainian}
      >
        UK
      </button>
    </div>
  );
};

export default LanguageToggler;

