import { Logo } from './Logo/Logo';
import UserInfo from './UserInfo/UserInfo';
import { Navigation } from './Navigation/Navigation';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import '../../i18n';
import LanguageToggler from './LanguageToggler/LanguageToggler';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

export const Header = () => {
  const [changeHeadColor, setChangeHeadColor] = useState(false);

  useEffect(() => {
    const throttledChangeColor = throttle(changeColor, 100);
    window.addEventListener('scroll', throttledChangeColor);

    return () => {
      window.addEventListener('scroll', throttledChangeColor);
    };
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 84) {
      setChangeHeadColor(true);
    } else {
      setChangeHeadColor(false);
    }
  };

  return (
    <>
      <section className={changeHeadColor ? 'header header-bg' : 'header'}>
        <>
          <Logo />
          <Navigation />
          <div className="flex">
            <div className=" hidden lg:flex lg:mr-[25px] lg:gap-[10px]">
              <LanguageToggler />
            </div>
            <div className="hidden lg:flex lg:items-center">
              <ThemeToggler />
            </div>
            <UserInfo />
            <HamburgerMenu />
          </div>
        </>
      </section>
    </>
  );
};
