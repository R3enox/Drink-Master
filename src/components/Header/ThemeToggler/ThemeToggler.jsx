import { useState, useEffect } from 'react';
import styles from './ThemeToggler.module.css';

const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    if (
      isDarkTheme ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
    </div>
  );
};

export default ThemeToggler;
