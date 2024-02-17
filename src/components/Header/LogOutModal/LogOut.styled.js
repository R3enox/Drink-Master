import styled from 'styled-components';

export const LogOutWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 12px 0;
  top: 150%;
  right: 0;
  background-color: #161F37; */
`;

export const LogOutText = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  line-height: 1.3;
color: white;
  letter-spacing: -0.02em;

 
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;


`;

export const YesBtn = styled.button`

  border: none;
  border-radius: 6px;
  color: white;
  min-width: 137px;
  padding: 14px 18px;

  font-size: 14px;
  line-height: 1.29;
  
  text-align: center;

  cursor: pointer;


  &:hover {
    background-color: black;
  }


`;

export const NoBtn = styled.button`
  color: white;
  min-width: 137px;
  padding: 14px 18px;

  font-size: 14px;
  line-height: 1.29;

  text-align: center;

  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
