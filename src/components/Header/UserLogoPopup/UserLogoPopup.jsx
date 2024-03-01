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
    const handleNoScroll = () => {
      console.log('open');
      document.body.style.overflow = openModal ? 'hidden' : 'auto';
    };
    if (openModal) {
      handleNoScroll();
      window.addEventListener('resize', handleNoScroll);
    }
    window.addEventListener('click', closePopUp);

    return () => {
      window.removeEventListener('click', closePopUp);
      window.removeEventListener('resize', handleNoScroll);
      document.body.style.overflow = 'auto';
    };
  }, [closePopUp, openModal]);

  return (
    <>
      <div
        onClick={openPopUpFnc}
        className="z-[101] absolute p-[18px] h-[134px] w-[177px] bg-indigo-500  sm:translate-x-[-20%] sm:translate-y-[78%]  md:translate-x-[-10%] md:translate-y-[82%]  lg:translate-x-[-20%] lg:translate-y-[82%] rounded-md bg-primary-text-button-color"
      >
        <div onClick={openModal}>
          <div className="flex justify-between  items-center mb-[28px]">
            <p>{t('UserLogoPopup.text')}</p>
            <svg className="stroke-primary-text-color  w-[17px] h-[17px]  hover:stroke-primary-text-color/50">
              <use href={sprite + '#icon-pancil'}></use>
            </svg>
          </div>
        </div>
        <button
          className="w-full text-center pt-[12px] pb-[12px] pl-[45] pr-[45] rounded-[200px] bg-primary-text-color  text-primary-text-button-color transition shadow-lg hover:shadow-primary-text-color/50 "
          onClick={openLogOutModal}
        >
          {t('button.LogOutModal.LogOut')}
        </button>
      </div>
    </>
  );
};

export default UserLogoPopup;
