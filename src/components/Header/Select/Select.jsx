import * as SC from '../Select/Select.styled'
import { useEffect, useState } from 'react'

import LogOutModal from '../LogOutModal/LogOutModal';
import { IMG } from '../../../../images';
import { UserInfo } from '../UserInfo/UserInfo';



export const Select = ({ toogleSelect }) => {
      const [isOpenModal, setIsOpenModal] = useState(false);

       const toogleModal = () => setIsOpenModal(!isOpenModal);

  useEffect(() => {
    const onESCClick = (e) => {
      if (e.code === 'Escape') {
        toogleSelect();
      }
    };
    window.addEventListener('keydown', onESCClick);

    return () => {
      window.removeEventListener('keydown', onESCClick);
    };
  }, []);
  return (
    <SC.Wrapper>
      <SC.EditText>Edit profile</SC.EditText>
      <SC.Btn onClick={toogleModal}>
        <SC.EditBtn type="button">
          <img src={IMG.icon} width="22" height="22" alt="pen" />
        </SC.EditBtn>
      </SC.Btn>
      {isOpenModal && <UserInfo />}
      <SC.CloseBtn onClick={toogleSelect}>X</SC.CloseBtn>
      <SC.LogOut onClick={toogleModal}>Log out</SC.LogOut>
      {isOpenModal && <LogOutModal />}
    </SC.Wrapper>
  );
};
