
import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';


import UserInfo from '../UserInfo/UserInfo';


let innerWidth = window.innerWidth >= 1400;

export const HeaderRender = () => {
    
  return (
    <>
      <div className=" flex p-5 ">
        <HeaderLogo />
        <UserInfo />
        <HeaderBtn />

        {innerWidth && <HeaderNavigation />}

        {/* <Example /> */}
      </div>
    </>
  );
};
