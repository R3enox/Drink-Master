import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #161F37;
  width: 177px;
  height: 134px;
  position: absolute;
  top: 52px;
  right: 20%;
`;

export const Btn = styled.button`
background-color: transparent;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: 161F37;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 250ms linear;
  &:hover {
    color: red;
  }
`;

export const EditText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: white;
  transition: color var(--transition-function);

`;

export const EditBtn = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent; 
`;

export const LogOut = styled.button`
`



// export const EditPen = styled.icon`
//   stroke: var(--primary-black);

//   transition: stroke var(--transition-function);

//   ${EditWrapper}:hover & {
//     stroke: var(--primary-green);
//   
// `;