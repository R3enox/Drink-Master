import { useMainNav } from '../../../../hooks/useMainNav';
import { LinkHeaderNav } from '../../reUseComponents/Buttons/Buttons';
export const Navigation = () => {
  const mainNav = useMainNav();

  return (
    <nav className="sm:hidden md:hidden lg:block">
      <ul className="flex gap-x-[16px] ml-auto">
        {mainNav.map(({ id, href, title }) => (
          <li key={id}>
            <LinkHeaderNav to={href}>{title}</LinkHeaderNav>
          </li>
        ))}
      </ul>
    </nav>
  );
};
