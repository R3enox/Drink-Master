import React, { useState, useEffect } from 'react';
import styles from './ThemeToggler.module.css';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const ThemeToggler = () => {
  const { t, i18n } = useTranslation();
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`${styles.ThemeToggler} ${
        isDarkTheme ? '' : styles['light-theme']
      }`}
    >
      <label className={styles['theme-switch']}>
        <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <p>
        {isDarkTheme ? t('toggleTheme.textDark') : t('toggleTheme.textLight')}
      </p>
    </div>
  );
};

export default ThemeToggler;
