import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';

import UserInfo from '../UserInfo/UserInfo';

const HeaderMobileMenu = () => {
  return (
    <>
      <HeaderLogo />

      <div className=" flex ">
        <UserInfo />

    
        <HeaderBtn />
      </div>
    </>
  );
};

export default HeaderMobileMenu;
