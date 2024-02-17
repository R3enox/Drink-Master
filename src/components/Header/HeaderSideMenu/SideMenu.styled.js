import styled from 'styled-components'

import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #7b7c7c;
`;

export const Nav = styled.nav`
  transition: 1000ms linear;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 180px;
  background-color: #0a0a11;
  text-decoration: none;
  width: 100%;

  &.open {
    top: 75px;
    left: 0;
  }
  &.close {
    top: -100px;
    left: 0;
  }
`;

export const List = styled.ul`
padding-left: 20px;
list-style: none;
text-decoration: none;

`

export const Item = styled.li`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 20px;
  
`;

