import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import LogOutModal from '../LogOutModal/LogOutModal';
import HeaderModal from '../HeaderModal/HeaderModal';
import UserProfileForm from '../UserProfileForm/UserProfileForm';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Avatar, StyledEngineProvider } from '@mui/material';
import { useUploadUserMutation } from '../../../redux/auth/usersOperations';

const UserInfo = () => {
  const [openEl, setOpenEl] = useState(null);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenLogOutModal, setIsOpenLogOutModal] = useState(false);

  const [uploadUser] = useUploadUserMutation();
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
      <button className="flex" onClick={openPopUp}>
        <div className="flex gap-[8px] md:gap-[14px] items-center ">
          <StyledEngineProvider injectFirst>
            <Avatar className="w-[32px] h-[32px] md:w-[41px] md:h-[42px] lg:w-[39px] lg:h-[39px] " />
          </StyledEngineProvider>
          <p>{user.name ?? 'User Name'}</p>
        </div>

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
        <HeaderModal className="" isOpen={modalIsOpen} openFnc={togleModal}>
          <UserProfileForm />
        </HeaderModal>
      )}
    </>
  );
};

export default UserInfo;
