import { useCallback, useEffect} from 'react';

import { IMG } from '../../../../images';




const PopUp = ({ openPopUpFnc, openEl, openModal, openLogOutModal }) => {
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
      <div onClick={openPopUpFnc}
        className="absolute p-[18px] h-[134px] w-[177px] bg-indigo-500 top-[80px] md:top-[85px] right-[3px]  lg:right-[300px] rounded-md bg-primary-text-button-color"
      >
        <div onClick={openModal}>
          <div className="flex justify-between mb-[28px]">
            <p>Edit profile</p>
            <img src={IMG.icon} width="17" height="17" alt="pen" />
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

export default PopUp;
