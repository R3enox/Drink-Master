import { Navigation, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Navigation>
      <StyledLink to="/signup">Sign Up</StyledLink>
      <StyledLink to="/signin">Sign In</StyledLink>
    </Navigation>
  );
};

export default AuthNav;
