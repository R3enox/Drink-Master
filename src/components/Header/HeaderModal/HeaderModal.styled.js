import styled from 'styled-components';




export const ModalContentWrp = styled.div`
  position: absolute;
  width: 330px;
  background-color: #161f37;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 32px 24px;

  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  &:focus-visible {
    outline: none;
  }
`;

export const CLoseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  transition: background-color var(--transition-function);

 


`;


