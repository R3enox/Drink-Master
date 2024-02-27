import { useEffect, useState } from 'react';
import {
  BtnDarkTheme,
  BtnLightTheme,
  ButtonComponentDarkTheme,
  ButtonComponentLightTheme,
  LinkDarkTheme,
  LinkLightTheme,
} from './Buttons';

export const LinkThemeChange = ({ title, to }) => {
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

export const BtnThemeChange = ({ title, name }) => {
  const storTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(() => storTheme === 'dark');

  useEffect(() => {
    const updatedTheme = localStorage.getItem('theme');
    setTheme(updatedTheme === 'dark');
  }, [theme]);
  return (
    <div>
      {theme ? (
        <BtnDarkTheme name={name}>{title}</BtnDarkTheme>
      ) : (
        <BtnLightTheme name={name}>{title}</BtnLightTheme>
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
