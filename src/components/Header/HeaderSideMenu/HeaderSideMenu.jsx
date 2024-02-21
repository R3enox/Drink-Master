import { NavLink } from 'react-router-dom';
import { useMainNav } from '../../../../hooks/useMainNav';
import * as SC from '../HeaderSideMenu/SideMenu.styled';



export const HeaderSideMenu = ({ toogleModal, burger }) => {
  const mainNav = useMainNav();

  return (
    <div className="bg-mobile-bg-welcome@2x">
      <SC.Nav className={burger ? 'open' : 'close'}>
      
        <ul className="flex flex-col mt-[160px] font-medium items-center gap-[16px] -[1.12] ">
          {mainNav.map(({ id, href, title }) => (
            <li
              className="rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[14px] py-[8px] px-[16px] hover:bg-primary-text-button-color transition-colors"
              key={id}
            >
              <NavLink onClick={toogleModal} to={href}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </SC.Nav>
    </div>
  );
};
