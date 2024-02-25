import { useCallback, useEffect } from 'react';
import sprite from '../../../assets/sprite.svg';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const UserLogoPopup = ({
  openPopUpFnc,
  openEl,
  openModal,
  openLogOutModal,
}) => {
  const { t, i18n } = useTranslation();
  const closePopUp = useCallback(
    (e) => {
      if (e.target !== openEl) {
        openPopUpFnc();
      }
    },
    [openPopUpFnc, openEl]
  );

  useEffect(() => {
    window.addEventListener('click', closePopUp);

    return () => {
      window.removeEventListener('click', closePopUp);
    };
  }, [closePopUp]);

  return (
    <>
      <div
        onClick={openPopUpFnc}
        className="z-[101] absolute p-[18px] h-[134px] w-[177px] bg-indigo-500 sm:top-[73px] md:top-[85px] sm:right-[15px] md:right-[25px]  lg:right-[95px] rounded-md bg-primary-text-button-color"
      >
        <div onClick={openModal}>
          <div className="flex justify-between mb-[28px]">
            <p>{t('UserLogoPopup.text')}</p>
            <svg className="fill-primary-text-color w-[17px] h-[17px] ">
              <use href={sprite + '#icon-pancil'}></use>
            </svg>
          </div>
        </div>
        <button
          className="w-full text-center pt-[12px] pb-[12px] pl-[45] pr-[45] rounded-[200px] bg-transparent border-[1px]  border-border-color "
          onClick={openLogOutModal}
        >
          {t('button.LogOutModal.LogOut')}
        </button>
      </div>
    </>
  );
};

export default UserLogoPopup;
