import { NavLink } from 'react-router-dom';
import { useMainNav } from '../../../../hooks/useMainNav';

export const HeaderNavigation = () => {
  const mainNav = useMainNav();

  return (
    <nav className="">
      <ul className="flex gap-x-[16px] ml-auto">
        {mainNav.map(({ id, href, title }) => (
          <li
            className="rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[14px] py-[8px] px-[16px] hover:bg-primary-text-button-color transition-colors"
            key={id}
          >
            <NavLink to={href}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
