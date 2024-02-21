import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { RoundedSwitch } from '../RoundedSwitch/RoundedSwitch';
import UserInfo from '../UserInfo/UserInfo';

const HeaderMobileMenu = () => {
  return (
    <>
      <HeaderLogo />

      <div className=" flex ">
        <UserInfo />

       <RoundedSwitch />
        <HeaderBtn />
      </div>
    </>
  );
};

export default HeaderMobileMenu;
