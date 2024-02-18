import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import LogOutModal from '../LogOutModal/LogOutModal';
import HeaderModal from '../HeaderModal/HeaderModal';

import { FaRegCircleUser } from 'react-icons/fa6';
import UserProfileForm from '../UserProfileForm/UserProfileForm';


const UserInfo = () => {
  const [openEl, setOpenEl] = useState(null);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenLogOutModal, setIsOpenLogOutModal] = useState(false);



  const openPopUp = (e) => {
    if (!popUpIsOpen) {
      setPopUpIsOpen(true);
      setOpenEl(e.target);
      return;
    } else {
      setPopUpIsOpen(false);
    }
  };

  const togleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const toogleLogOutModal = () => {
    setIsOpenLogOutModal(!isOpenLogOutModal);
  };
  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const toogleModal = () => setIsOpenModal(!isOpenModal);

  // useEffect(() => {
  //   const onESCClick = (e) => {
  //     if (e.code === 'Escape') {
  //       toogleSelect();
  //     }
  //   };
  //   window.addEventListener('keydown', onESCClick);

  //   return () => {
  //     window.removeEventListener('keydown', onESCClick);
  //   };
  // }, []);
  return (
    <>
      <button className='pl-16' onClick={openPopUp}>
        <FaRegCircleUser color="f3f3f3" size={30} />
        {/* <div avatar={avatar}>
          {avatar ? (
            ''
          ) : (
            <img src={IMG.noUser} width="22" height="22" alt="logo" />
          )}
        </div> */}

        {/* <p{userName || 'User Name'}</p> */}

        {popUpIsOpen && (
          <PopUp
            openModal={togleModal}
            openLogOutModal={toogleLogOutModal}
            openPopUpFnc={openPopUp}
            openEl={openEl}
          />
        )}
      </button>
      {isOpenLogOutModal && (
        <HeaderModal isOpen={isOpenLogOutModal} openFnc={toogleLogOutModal}>
          <LogOutModal closeFnc={toogleLogOutModal} />
        </HeaderModal>
      )}

      {modalIsOpen && (
        <HeaderModal isOpen={modalIsOpen} openFnc={togleModal}>
          <UserProfileForm />
        </HeaderModal>
      )}
    </>
  );
};

export default UserInfo;
