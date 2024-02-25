import { NavLink } from 'react-router-dom';
import { useMainNav } from '../../../../hooks/useMainNav';

export const HeaderSideMenu = ({ toogleModal, burger }) => {
  const mainNav = useMainNav();

  return (
    <div className="snap-none">
      <nav
        className={`bg-light-theme-bg-color dark:bg-dark-theme-bg-color overflow-hidden absolute flex flex-col h-[1000%] w-full z-[100] bg-common-set-tablet  bg-[length:900px_1300px] bg-right-top bg-no-repeat snap-none  ${
          burger ? 'open top-[75px] left-0' : 'close top-[-100px] left-0'
        }`}
      >
        <ul className="flex flex-col mt-[160px] font-medium items-center gap-[16px] -[1.12] ">
          {mainNav.map(({ id, href, title }) => (
            <li
              className="rounded-[200px] bg-transparent border-[1px] border-border-color-for-ligh dark:border-border-color text-primary-text-button-color dark:text-primary-text-color text-[14px] py-[8px] px-[16px] hover:bg-primary-text-button-color hover:text-primary-text-color transition-colors"
              key={id}
            >
              <NavLink onClick={toogleModal} to={href}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
