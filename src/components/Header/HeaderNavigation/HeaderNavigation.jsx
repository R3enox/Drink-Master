import { useMainNav } from '../../../../hooks/useMainNav';
import * as SC from '../HeaderNavigation/HeaderNav.styled';

export const HeaderNavigation = () => {
  const mainNav = useMainNav();

  return (
    <SC.Nav>
      <SC.List>
        {mainNav.map(({ id, href, title }) => (
          <li
            className="color: primary-text-color  pl-4 border-grey-text-color border-[1px] rounded-[200px]"
            key={id}
          >
            <SC.StyledLink to={href}>{title}</SC.StyledLink>
          </li>
        ))}
      </SC.List>
    </SC.Nav>
  );
};
