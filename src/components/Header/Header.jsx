import { Logo } from './Logo/Logo';
import UserInfo from './UserInfo/UserInfo';
import { Navigation } from './Navigation/Navigation';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';



export const Header = () => {
  return (
    <>
    <div className='bg-home-set bg-[length:150px_1700px] lg:bg-[length:200px_1700px] bg-no-repeat'>

   <section className="container    flex p-5 border-b  border-border-color text-primary-text-color justify-between md:pl-[32px] md:pr-[32px] lg:pt-[22px] lg:pb-[23px] lg:pl-[100px] lg:pr-[100px] lg: items-center">
        <>
          <Logo />
          <Navigation />
          <div className="flex">
            <UserInfo />
            <HamburgerMenu />
          </div>
        </>
      </section>
    </div>
   
    </>
  );
};
