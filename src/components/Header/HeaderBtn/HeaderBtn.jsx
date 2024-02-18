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
      <button className="pl-11 fill: white" onClick={toogleModal}>
        <svg width={32} height={32} fill="white">
          <use
            className="w-6 h-6 fill: white;"
            fill="white"
            alt="burger"
            href={sprite + `icon-burger`}
          ></use>
        </svg>
      </button>
      {burger && <HeaderSideMenu toogleModal={toogleModal} burger={burger} />}
    </>
  );
};
