import sprite from '../../assets/sprite.svg';
import { PrivacyPolicy } from './PrivacyPolicy';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { Link } from 'react-router-dom';
import { FollowUs } from '../reUseComponents/FollowUs/FollowUs';

// import { useTranslation } from 'react-i18next';
import '../../i18n';

export const Footer = () => {
  return (
    <div className="bg-footer-set bg-button-hover-color md:bg-footer-set-tablet lg:bg-footer-set-desktop bg-contain bg-no-repeat bg-bottom mb-0">
      <footer
        className="container mx-auto w-[100vw] pt-[40px] pb-[18px] border-solid border-t-[1px]
     border-border-colorbg-bottom h-full 
     md:pb-[24px] md:pt-[80px]"
      >
        <div className="flex flex-wrap md:flex-nowrap md:gap-x-[251px]">
          <div className="flex xs:gap-x-[40px]  sm:gap-x-[90px] mb-[40px] md:flex-col gap-y-[40px] lg:flex-row lg:gap-x-[411px]">
            <div className="flex flex-col  gap-y-[20px] lg:gap-y-[43px]">
              <Link
                to={'/'}
                className="flex gap-x-[8px] items-center lg:gap-x-[14px]"
              >
                <svg className="fill-primary-text-color w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
                  <use href={sprite + '#icon-logo'}></use>
                </svg>
                <p className="font-semibold text-primary-text-color text-[16px] leading-[1.12] pt-[7px] pb-[7px] md:text-[18px] md:leading-[1.22] md:pt-[11px] md:pb-[11px] lg:pt-[3px] lg:pb-[3px]">
                  Drink Master
                </p>
              </Link>
              <FollowUs />
            </div>
            <Nav />
          </div>
          <SubscribeForm />
        </div>
        <PrivacyPolicy />
      </footer>
    </div>
  );
};
