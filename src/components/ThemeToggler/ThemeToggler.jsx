import React, { useState, useEffect } from 'react';
import styles from './ThemeToggler.module.css'; 

const ThemeToggler = () => {
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
      <p>{isDarkTheme ? 'Темна тема' : 'Світла тема'}</p>
    </div>
  );
};

export default ThemeToggler;
