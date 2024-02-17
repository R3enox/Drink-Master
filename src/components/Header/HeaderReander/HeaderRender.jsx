import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';

import * as SC from "../HeaderReander/HeaderRender.styled"
import UserInfo from '../UserInfo/UserInfo';


let innerWidth = window.innerWidth >= 1200;

export const HeaderRender = () => {
    
  return (
    <>
      <SC.Header>
        <HeaderLogo />
        <UserInfo />
        <HeaderBtn />

        {innerWidth && <HeaderNavigation />}
      </SC.Header>
    </>
  );
};
