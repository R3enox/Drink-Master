import { Logo } from './Logo/Logo';
import UserInfo from './UserInfo/UserInfo';
import { Navigation } from './Navigation/Navigation';
import { HeaderBtn } from './HeaderBtn/HeaderBtn';
import ThemeToggler from './ThemeToggler/ThemeToggler';

export const Header = () => {
  return (
    <>
      <div className="container bg-mobile-bg-commonpage bg-no-repeat bg-left-top flex p-5 border-b  border-border-color text-primary-text-color justify-between md:pl-[32px] md:pr-[32px] lg:pt-[22px] lg:pb-[23px] lg:pl-[100px] lg:pr-[100px]">
        <>
          <Logo />
          <Navigation />
          <div className="flex gap-[28px] items-center">
            <ThemeToggler />
            <UserInfo />
            <HeaderBtn />
          </div>
        </>
      </div>
    </>
  );
};
