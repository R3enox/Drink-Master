import { Link } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';

export const Logo = () => {
  return (
    <>
      <nav className="flex items-center">
        <Link
          to={'/'}
          className="flex gap-x-[8px] items-center lg:gap-x-[14px]"
        >
          <svg className="fill-primary-text-button-color dark:fill-primary-text-color w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          <p className="font-semibold text-primary-text-button-color dark:text-primary-text-color text-[16px] leading-[1.12] pt-[7px] pb-[7px] md:text-[18px] md:leading-[1.22] md:pt-[11px] md:pb-[11px] lg:pt-[3px] lg:pb-[3px]">
            Drink Master
          </p>
        </Link>
      </nav>
    </>
  );
};
