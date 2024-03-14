import sprite from '../../../assets/sprite.svg';

import { useEffect, useCallback } from 'react';

const HeaderModal = ({ children, isOpen, closeFnc }) => {
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
    const handleNoScroll = () => {
      console.log('open');
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };
    if (isOpen) {
      handleNoScroll();
      window.addEventListener('resize', handleNoScroll);
    }
    window.addEventListener('keydown', handlePressEsc);

    return () => {
      window.removeEventListener('keydown', handlePressEsc);
      window.removeEventListener('resize', handleNoScroll);
      document.body.style.overflow = 'auto';
    };
  }, [closeOnClick, isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeOnClick();
    }
  };

  return (
    <div
      className="fixed bg-opacity-0 overflow-x-hidden overflow-y-auto left-0 top-0  w-full h-full pt-20 z-[100] modal-backdrop"
      onClick={handleOverlayClick}
    >
      <div className="absolute bg-primary-text-button-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[24px] items-center flex flex-col py-[50px] px-[25px] md:p-[50px] md:pb-[75px]">
        <button
          className="absolute items-center flex justify-center top-[18px] right-[18px] rounded-[58px]transition-colors"
          onClick={closeOnClick}
        >
          <svg className="stroke-primary-text-color w-[24px] h-[24px] md:w-[32px] md:h-[32px] hover:stroke-primary-text-color/50">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};
export default HeaderModal;
