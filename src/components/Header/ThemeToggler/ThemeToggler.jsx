import { useState, useEffect } from 'react';
import styles from './ThemeToggler.module.css';

const ThemeToggler = () => {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    if (isLightTheme) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`${styles.ThemeToggler} ${
        isLightTheme ? styles['light-theme'] : ''
      }`}
    >
      <label className={styles['theme-switch']}>
        <input type="checkbox" checked={!isLightTheme} onChange={toggleTheme} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default ThemeToggler;
