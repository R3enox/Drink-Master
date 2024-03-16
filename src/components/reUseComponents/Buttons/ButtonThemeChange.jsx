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
  return <LinkLightTheme to={to}>{title}</LinkLightTheme>;
};

export const BtnThemeChange = ({ title, name }) => {
  const storTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(() => storTheme === 'dark');

  useEffect(() => {
    const updatedTheme = localStorage.getItem('theme');
    setTheme(updatedTheme === 'dark');
  }, [theme]);
  return <BtnLightTheme name={name}>{title}</BtnLightTheme>;
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
      <ButtonComponentLightTheme
        descr={descr}
        btnFunction={btnFunction}
        id={id}
      />
    </div>
  );
};
