import { useState } from 'react';
import UserLogoPopup from '../UserLogoPopup/UserLogoPopup';
import LogOutModal from '../LogOutModal/LogOutModal';
import HeaderModal from '../HeaderModal/HeaderModal';
import UserLogo from '../UserLogo/UserLogo';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const [openEl, setOpenEl] = useState(null);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenLogOutModal, setIsOpenLogOutModal] = useState(false);

  const user = useSelector(selectAuthUser);

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

  return (
    <>
      <button className="flex items-center" onClick={openPopUp}>
        <div className=" gap-[8px] md:gap-[14px] items-center ">
          {/* <div>{user.avatarURL}</div> */}
          <p className="">{user.name ?? 'User Name'}</p>
        </div>

        {popUpIsOpen && (
          <UserLogoPopup
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
        <HeaderModal className="" isOpen={modalIsOpen} openFnc={togleModal}>
          <UserLogo />
        </HeaderModal>
      )}
    </>
  );
};

export default UserInfo;
