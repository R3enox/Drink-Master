import { useState } from 'react';
import * as SC from '../UserInfo/UserInfo.styled';
import PopUp from '../PopUp/PopUp';
import LogOutModal from '../LogOutModal/LogOutModal';
import HeaderModal from '../HeaderModal/HeaderModal';

import { FaRegCircleUser } from 'react-icons/fa6';
import UserProfileForm from '../UserProfileForm/UserProfileForm';
// import { useSelector } from 'react-redux';
// import { IMG } from '../../../../images';
// import { selectUserAvatar} from '../../../redux/auth/authSelectors';

const UserInfo = () => {
  const [openEl, setOpenEl] = useState(null);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenLogOutModal, setIsOpenLogOutModal] = useState(false);

  //  const userName = useSelector(selectUserName);
  //  const avatar = useSelector(selectUserAvatar);

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
      <SC.UserInform onClick={openPopUp}>
        <FaRegCircleUser color="#ea1616" size={30} />
        {/* <SC.UserAvatarWrp avatar={avatar}>
          {avatar ? (
            ''
          ) : (
            <img src={IMG.noUser} width="22" height="22" alt="logo" />
          )}
        </SC.UserAvatarWrp> */}

        {/* <SC.UserName>{userName || 'User Name'}</SC.UserName> */}

        {popUpIsOpen && (
          <PopUp
            openModal={togleModal}
            openLogOutModal={toogleLogOutModal}
            openPopUpFnc={openPopUp}
            openEl={openEl}
          />
        )}
      </SC.UserInform>
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
