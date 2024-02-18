import { NavLink } from 'react-router-dom';
import { useMainNav } from '../../../../hooks/useMainNav';
import * as SC from '../HeaderSideMenu/SideMenu.styled';

export const HeaderSideMenu = ({ toogleModal, burger }) => {
  const mainNav = useMainNav();

  return (
    <SC.Nav className={burger ? 'open' : 'close'}>
      <div className="background-color: rgb(226 232 240)">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {mainNav.map(({ id, href, title }) => (
            <li
              key={id}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <NavLink onClick={toogleModal} to={href}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </SC.Nav>

    // <div
    //   className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
    //   id="mobile-menu-2 "
    //   // className={burger ? 'open' : 'close'}
    // >
    //   <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    //     {mainNav.map(({ id, href, title }) => (
    //       <li key={id}>
    //         <SC.StyledLink onClick={toogleModal} to={href}>
    //           {title}
    //         </SC.StyledLink>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

{/* <div
  class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
  id="mobile-menu-2"
>
  <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    <li>
      <a
        href="#"
        class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
        aria-current="page"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        Company
      </a>
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        Marketplace
      </a>
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        Features
      </a>
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        Team
      </a>
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        Contact
      </a>
    </li>
  </ul>
</div>; */}
