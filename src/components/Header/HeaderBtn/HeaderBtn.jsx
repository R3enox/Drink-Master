import { useState } from "react";
import { HeaderSideMenu } from "../HeaderSideMenu/HeaderSideMenu";
import * as SC from './HamburgerButton.styled';
import { RxHamburgerMenu } from 'react-icons/rx';




export const HeaderBtn = () => {
  const [burger, setBurger] = useState(false);

  const toogleModal = () => {
    setBurger(!burger);
  };

  return (
    <>
      <SC.MenuButton onClick={toogleModal}>
        <RxHamburgerMenu  color="#F3F3F3" size={30} />
      </SC.MenuButton>
      {burger && <HeaderSideMenu toogleModal={toogleModal} burger={burger} />}
    </>
  );
};