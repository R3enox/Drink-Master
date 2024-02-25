import sprite from '../../../assets/sprite.svg';

import { useEffect, useCallback } from 'react';

const UniversalModal = ({ children, isOpen, closeFnc, content }) => {
  const closeOnClick = useCallback(() => {
    if (isOpen) {
      closeFnc();
    }
  }, [isOpen, closeFnc]);

  useEffect(() => {
    const handlePressEsc = (e) => {
      if (e.code === 'Escape') {
        closeOnClick();
      }
    };

    window.addEventListener('keydown', handlePressEsc);

    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  }, [closeOnClick]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeOnClick();
    }
  };

  return (
    <div
      className="fixed bg-opacity-0 overflow-x-hidden overflow-y-auto left-0 top-0  w-full h-full pt-20 z-[100]"
      onClick={handleOverlayClick}
    >
      <div className="absolute bg-primary-text-button-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[24px] items-center flex flex-col py-[50px] px-[25px] md:p-[50px] ">
        <button
          className="absolute items-center flex justify-center top-[18px] right-[18px] rounded-[58px] hover:bg-primary-text-color transition-colors"
          onClick={closeOnClick}
        >
          <svg className="stroke-primary-text-color w-[24px] h-[24px] md:w-[32px] md:h-[32px] hover:stroke-primary-text-button-color transition-colors">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>
        <p className="text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.33] mb-[25px] md:mb-[37px] text-center">
          {content}
        </p>

        {children}
      </div>
    </div>
  );
};

export default UniversalModal;
