import { Link } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';

export const Logo = () => {
  return (
    <>
      <nav className="flex items-center">
        <div className="flex gap-x-[8px] items-center lg:gap-x-[14px] ">
          <Link to={'/'}>
            <svg className="fill-primary-text-color w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
              <use href={sprite + '#icon-logo'}></use>
            </svg>
          </Link>
          <Link
            to={'/'}
            className="font-semibold text-primary-text-color text-[16px] leading-[1.12] pt-[7px] pb-[7px] md:text-[18px] md:leading-[1.22] md:pt-[11px] md:pb-[11px] lg:pt-[3px] lg:pb-[3px]"
          >
            Drink Master
          </Link>
        </div>
      </nav>
    </>
  );
};
