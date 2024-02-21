import { useMediaQuery } from '@mui/material';

import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';

import UserInfo from '../UserInfo/UserInfo';
import HeaderMobileMenu from '../HeaderMobileMenu/HeaderMobileMenu';

// let innerWidth = window.innerWidth >= 1400;

export const HeaderRender = () => {
  const isMobile = useMediaQuery('(max-width: 1439px)');
  return (
    <>
      <div className="container flex p-5 border-b  border-border-color text-primary-text-color justify-between md:pl-[32px] md:pr-[32px] lg:pt-[22px] lg:pb-[23px] lg:pl-[100px] lg:pr-[100px]">
        {!isMobile ? (
          <>
            <HeaderLogo />

            <HeaderNavigation />
            <UserInfo />
          </>
        ) : (
          <HeaderMobileMenu />
        )}
      </div>
    </>
  );
};
