import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMainNav } from '../../../../hooks/useMainNav';
import { Logo } from '../Logo/Logo';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const HamburgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const mainNav = useMainNav();

  return (
    <div className=" flex items-center justify-between  border-gray-400 pl-[14px]">
      <nav>
        <section className=" MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-primary-text-button-color dark:bg-primary-text-color"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-primary-text-button-color dark:bg-primary-text-color"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-primary-text-button-color dark:bg-primary-text-color"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div className="bg-mobile-bg-commonpage ">
              <nav className=" bg-primary-text-color dark:bg-button-hover-color  absolute flex flex-col h-[1000%] w-full z-[100] bg-mobile-bg-commonpage bg-no-repeat">
                <div className="container bg-mobile-bg-commonpage bg-[length:150px_1700px] bg-no-repeat   flex p-5 border-b  border-border-color text-primary-text-color justify-between md:pl-[32px] md:pr-[32px] lg:pt-[22px] lg:pb-[23px] lg:pl-[100px] lg:pr-[100px]">
                  <Logo />
                  <ThemeToggler className="mr-[62px]" />
                  <div
                    className=" fixed sm:top-[-12px] md:top-[-5px] sm:right-[-10px] md:right-[0px] px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className="h-8 w-8 text-primary-text-button-color dark:text-primary-text-color"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>

                <ul className="flex flex-col mt-[160px] font-medium items-center gap-[16px] -[1.12] ">
                  {mainNav.map(({ id, href, title }) => (
                    <li
                      className=" text-primary-text-button-color dark:text-primary-text-color rounded-[200px] bg-transparent border-[1px] hover:text-primary-text-color hover:bg-primary-text-button-color border-border-color-for-light dark:border-border-color text-[14px] py-[8px] px-[16px] shadow-lg hover:shadow-primary-text-button-color/50 dark:hover:shadow-primary-text-color/50 transition-colors"
                      key={id}
                    >
                      <NavLink onClick to={href}>
                        {title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0px;
        left: 0;
       
        overflow-hidden
        z-index: 10;
      
   
      
     
      }
    `}</style>
    </div>
  );
};
export default HamburgerMenu;
