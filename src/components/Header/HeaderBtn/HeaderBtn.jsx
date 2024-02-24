import { useState } from 'react';
import { HeaderSideMenu } from '../HeaderSideMenu/HeaderSideMenu';

import sprite from '../../../assets/sprite.svg';


export const HeaderBtn = () => {
  const [burger, setBurger] = useState(false);

  const toogleModal = () => {
    setBurger(!burger);
  };

  return (
    <>
     
      <button
        className="ml-[14px] md:ml-[24px] lg:hidden"
        onClick={toogleModal}
      >
        <svg className="stroke-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
          <use href={sprite + '#icon-burger'}></use>
        </svg>
      </button>
      {burger && <HeaderSideMenu toogleModal={toogleModal} burger={burger} />}
    </>
  );
};
