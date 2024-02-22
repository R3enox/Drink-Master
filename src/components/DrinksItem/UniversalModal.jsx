import { useEffect, useCallback } from 'react';
import sprite from '../../assets/sprite.svg';

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
      className="fixed bg-opacity-0 overflow-x-hidden overflow-y-auto left-0 top-0  w-full h-full pt-20 z-100"
      onClick={handleOverlayClick}
    >
      <div className="absolute bg-primary-text-button-color left-1/2 transform -translate-x-1/2 rounded-[15px] overflow-y-auto shadow-xl p-[50px]">
        <button
          className="absolute items-center flex justify-center top-[18px] right-[18px]"
          onClick={closeOnClick}
        >
          <svg className="stroke-primary-text-color w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>
        <p className="text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.33] mb-[25px] md:mb-[37px]">
          {content}
        </p>
        {children}
      </div>
    </div>
  );
};

export default UniversalModal;
