import styled from 'styled-components'





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



