import { useMainNav } from '../../../../hooks/useMainNav';
import * as SC from '../HeaderNavigation/HeaderNav.styled';

export const HeaderNavigation = () => {
  const mainNav = useMainNav();

  return (
    <SC.Nav>
      <SC.List>
        {mainNav.map(({ id, href, title }) => (
          <SC.Item key={id}>
            <SC.StyledLink to={href}>{title}</SC.StyledLink>
          </SC.Item>
        ))}
      </SC.List>
    </SC.Nav>
  );
};
