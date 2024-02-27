import { useState, useEffect } from 'react';

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
    <div className={`ThemeToggler ${isLightTheme ? 'light-theme' : ''}`}>
      <label className={'theme-switch'}>
        <input type="checkbox" checked={!isLightTheme} onChange={toggleTheme} />
        <span className={'slider round'}></span>
      </label>
    </div>
  );
};

export default ThemeToggler;
