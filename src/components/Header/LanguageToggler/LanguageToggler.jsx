import { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const storedLang = localStorage.getItem('selectedLanguage') || i18n.language;
  const [activeButton, setActiveButton] = useState(storedLang);

  useEffect(() => {
    setActiveButton(storedLang);
  }, [storedLang]);

  const switchLanguage = useCallback(
    (language) => {
      i18n.changeLanguage(language);
      setActiveButton(language);
      localStorage.setItem('selectedLanguage', language);
    },
    [i18n]
  );

  const switchToEnglish = () => {
    switchLanguage('en');
  };

  const switchToUkrainian = () => {
    switchLanguage('uk');
  };

  return (
    <div className={'flex gap-[10px] items-center'}>
      <button
        className={`text-[14px] font-medium  transition-color-[0.3s] outline-none text-hover-border-color-search dark:text-grey-text-color ${
          activeButton === 'en'
            ? 'font-semibold text-button-hover-color dark:text-primary-text-color'
            : ''
        }`}
        disabled={activeButton === 'en'}
        onClick={switchToEnglish}
      >
        EN
      </button>
      <span className="border-r-[1px] h-[20px] border-hover-border-color-search dark:border-grey-text-color"></span>
      <button
        className={`text-[14px] font-medium  transition-color-[0.3s] outline-none text-hover-border-color-search dark:text-grey-text-color ${
          activeButton === 'uk'
            ? 'font-semibold text-button-hover-color dark:text-primary-text-color'
            : ''
        }`}
        disabled={activeButton === 'uk'}
        onClick={switchToUkrainian}
      >
        UK
      </button>
    </div>
  );
};

export default LanguageToggler;
