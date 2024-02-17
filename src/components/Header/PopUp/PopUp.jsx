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
        <SC.EditWrapper onClick={openModal}>
          <SC.EditText>Edit profile</SC.EditText>
          <img src={IMG.icon} width="17" height="17" alt="pen" />
         
        </SC.EditWrapper>
        <SC.LogOutBtn onClick={openLogOutModal}>Log out</SC.LogOutBtn>
      </SC.PopUpWrp>
    </>
  );
};

export default PopUp;
// const PopUp = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
  // const closePopUp = useCallback(
  //   (e) => {
  //     if (e.target !== openEl) {
  //       openPopUpFnc();
  //     }
  //   },
  //   [openPopUpFnc, openEl]
  // );

  // useEffect(() => {
  //   window.addEventListener('click', closePopUp);

  //   return () => {
  //     window.removeEventListener('click', closePopUp);
  //   };
  // }, [closePopUp]);

  //  const toogleModal = () => setIsOpenModal(!isOpenModal);

  // return (
  //   <>
  //     <SC.Button  onClick={toogleModal}>
  //       <FaRegCircleUser color="#F3F3F3" size={30} />
       
  //     </SC.Button>
  //     {isOpenModal && <Select toogleSelect={toogleModal} />}
      {/* <SC.PopUpWrp onClose={openPopUpFnc}>
        <SC.EditWrapper>
          <SC.EditText>Edit profile</SC.EditText>
          <SC.EditBtn type="button">
            <SC.EditPen />
          </SC.EditBtn>
        </SC.EditWrapper>
        <SC.LogOutBtn>Log out</SC.LogOutBtn>
      </SC.PopUpWrp>  */}
//     </>
//   );
// };

// export default PopUp;
