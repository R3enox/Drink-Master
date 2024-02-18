import { useCallback, useEffect} from 'react';
   import * as SC from '../PopUp/PopUp.styled';
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
      <SC.PopUpWrp onClose={openPopUpFnc}>
        <div onClick={openModal}>
          <p>Edit profile</p>
          <img src={IMG.icon} width="17" height="17" alt="pen" />
        </div>
        <button onClick={openLogOutModal}>Log out</button>
      </SC.PopUpWrp>
    </>
  );
};

export default PopUp;
