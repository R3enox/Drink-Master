import styled from 'styled-components';


export const Button = styled.button`
padding: 0;
background-color: transparent;
`;

export const PopUpWrp = styled.div`
  position: absolute;
  top: 80px;
  
  width: 161px;
  height: 130px;

  padding: 18px;

   background-color: #161F37;;
 
  border-radius: 8px;

 
`;

export const EditWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  } */
`;

export const EditText = styled.p`
color: white;
  /* font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: var(--primary-black);
  transition: color var(--transition-function);

  ${EditWrapper}:hover & {
    color: var(--primary-green);
  } */
`;

export const EditBtn = styled.button`
  /* width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent; */
`;

// export const EditPen = styled.icon`
//   /* stroke: var(--primary-black);

//   transition: stroke var(--transition-function);

//   ${EditWrapper}:hover & {
//     stroke: var(--primary-green);
//   } */
// `;

export const LogOutBtn = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 125px;
  padding: 12px 24px;

  @media screen and (min-width: 768px) {
    min-width: 141px;
    padding: 12px 32px;
    font-size: 14px;
  } */
`;