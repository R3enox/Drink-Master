import { useCallback, useEffect } from 'react';
import sprite from '../../../assets/sprite.svg';

const UserLogoPopup = ({
  openPopUpFnc,
  openEl,
  openModal,
  openLogOutModal,
}) => {
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
        className="z-[101] absolute p-[18px] h-[134px] w-[177px] bg-indigo-500  sm:translate-x-[-20%] sm:translate-y-[78%]  md:translate-x-[-10%] md:translate-y-[82%]  lg:translate-x-[-20%] lg:translate-y-[82%] rounded-md bg-primary-text-button-color"
      >
        <div onClick={openModal}>
          <div className="flex justify-between mb-[28px]">
            <p>Edit profile</p>
            <svg className="fill-primary-text-color w-[17px] h-[17px] ">
              <use href={sprite + '#icon-pancil'}></use>
            </svg>
          </div>
        </div>
        <button
          className="w-full text-center pt-[12px] pb-[12px] pl-[45] pr-[45] rounded-[200px] bg-transparent border-[1px]  border-border-color "
          onClick={openLogOutModal}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default UserLogoPopup;
