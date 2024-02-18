import spite from '../../assets/sprite.svg';
import { FolowUs } from '../reUseComponents/FolowUs';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="container pt-[40px] border-solid border-t-[1px] border-border-color md:flex gap-x-[231px] md:pt-[80px]">
      <div className="flex  gap-x-[90px]  mb-[40px] md:flex-col gap-y-[40px] lg:flex-row lg:gap-x-[411px]">
        <div className="flex flex-col  gap-y-[20px] lg:gap-y-[43px]">
          <div className="flex gap-x-[14px] items-center">
            <Link to={'/'}>
              <svg className="fill-primary-text-color w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
                <use href={spite + '#icon-logo'}></use>
              </svg>
            </Link>
            <Link
              to={'/'}
              className="font-semibold text-primary-text-color text-[16px] leading-[1.12] md:text-[18px] md:leading-[1.22]"
            >
              Drink Master
            </Link>
          </div>
          <FolowUs />
        </div>
        <Nav />
      </div>
      <SubscribeForm />
    </footer>
  );
};
