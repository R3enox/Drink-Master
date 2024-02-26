import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMainNav } from '../../../../hooks/useMainNav';
import { Logo } from '../Logo/Logo';

const HamburgerMenu =() => {
  const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
      setIsNavOpen(!isNavOpen);
      !isNavOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'scroll');
    };

    useEffect(() => {
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }, []);

   const mainNav = useMainNav();


  return (
    <div className=" flex items-center justify-between  border-gray-400 pl-[14px]">
      <nav>
        <section className=" MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2 animate-pulse animate-infinite "
            onClick={openNav}
          >
            <span className="block h-0.5 w-8  bg-primary-text-color"></span>
            <span className="block h-0.5 w-8  bg-primary-text-color"></span>
            <span className="block h-0.5 w-8  bg-primary-text-color"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div className=" ">
              <nav className="bg-button-hover-color transition-transform sm:bg-mobile-burger-menu sm:bg-[length:400px_1000px] md:bg-desktop-burger-menu bg-no-repeat md:bg-[length:800px_1000px] fixed flex flex-col h-[1000%] w-full z-[100] ">
                <div className="relative container flex p-5 border-b  border-border-color text-primary-text-color justify-between md:pl-[32px] md:pr-[32px] lg:pt-[22px] lg:pb-[23px] lg:pl-[100px] lg:pr-[100px]">
                  <Logo />

                  <div
                    className=" absolute sm:top-[-12px] md:top-[-5px] sm:right-[-10px] md:right-[0px] px-8 py-8 animate-pulse animate-infinite "
                    onClick={openNav}
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
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
                      className="rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[14px] py-[8px] px-[16px] hover:bg-primary-text-button-color transition-colors"
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
}
export default HamburgerMenu;
