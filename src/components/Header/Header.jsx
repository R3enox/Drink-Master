import { Logo } from './Logo/Logo';
import UserInfo from './UserInfo/UserInfo';
import { Navigation } from './Navigation/Navigation';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import '../../i18n';
import LanguageToggler from './LanguageToggler/LanguageToggler';


export const Header = () => {
  
  return (
    <>      
      <header className="container flex p-5 border-b  border-border-color-for-light dark:border-border-color text-primary-text-color justify-between  lg: items-center">
        <>
          <Logo />
          <Navigation />
          <div className="flex">
              <div className=" hidden lg:flex lg:mr-[25px] lg:gap-[10px]">
               <LanguageToggler/> 
              </div>
            <div className="hidden lg:flex lg:items-center">
              <ThemeToggler />
            </div>
            <UserInfo />
            <HamburgerMenu />
         
          </div>
        </>
      </header> 
    </>
  );
};
