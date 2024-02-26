import { useEffect, useState } from 'react';
import {
  ButtonComponentDarkTheme,
  ButtonComponentLightTheme,
  LinkDarkTheme,
  LinkLightTheme,
} from './Buttons';

export const ButtonThemeChange = ({ title, to }) => {
  const storTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(() => storTheme === 'dark');

  useEffect(() => {
    const updatedTheme = localStorage.getItem('theme');
    setTheme(updatedTheme === 'dark');
  }, [theme]);
  return (
    <div>
      {theme ? (
        <LinkDarkTheme to={to}>{title}</LinkDarkTheme>
      ) : (
        <LinkLightTheme to={to}>{title}</LinkLightTheme>
      )}
    </div>
  );
};

export const ButtonComponentThemeChange = ({ descr, btnFunction, id }) => {
  const storTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(() => storTheme === 'dark');

  useEffect(() => {
    const updatedTheme = localStorage.getItem('theme');
    setTheme(updatedTheme === 'dark');
  }, [theme]);
  return (
    <div>
      {theme ? (
        <ButtonComponentDarkTheme
          descr={descr}
          btnFunction={btnFunction}
          id={id}
        />
      ) : (
        <ButtonComponentLightTheme
          descr={descr}
          btnFunction={btnFunction}
          id={id}
        />
      )}
    </div>
  );
};
