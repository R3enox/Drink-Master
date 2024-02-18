import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav``;


export const StyledLink = styled(NavLink)`
  text-decoration: none;
 
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-right: 170px;
`;

export const Item = styled.li`
  padding-left: 40px;
  font-size: 14px;
  list-style: none;
  padding-top: 30px;
  font-weight: 500;
  color: white;
`;
