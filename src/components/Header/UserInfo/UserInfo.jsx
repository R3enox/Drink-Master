import { useState } from 'react';
import UserLogoPopup from '../UserLogoPopup/UserLogoPopup';
import LogOutModal from '../LogOutModal/LogOutModal';

import UserLogo from '../UserLogo/UserLogo';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import UniversalModal from '../../reUseComponents/ UniversalModal/ UniversalModal';

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
        <div className="flex gap-[8px] md:gap-[14px] items-center ">
          <div>
            <img
              srcSet={`${user.avatarURL}`}
              alt="avatar"
              width={44}
              height={44}
              className="rounded-full sm:w-[32px] sm:h-[32px]  md:w-[44px] md:h-[44px] lg:w-[44px] lg:h-[39px]"
            />
          </div>
          <p className="">{user.name}</p>
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
        <UniversalModal
          isOpen={isOpenLogOutModal}
          closeFnc={toogleLogOutModal}
          content={'Are you sure you want to log out?'}
        >
          <LogOutModal closeFnc={toogleLogOutModal} />
        </UniversalModal>
      )}

      {modalIsOpen && (
        <UniversalModal
          className=""
          isOpen={modalIsOpen}
          closeFnc={togleModal}
          content={``}
        >
          <UserLogo />
        </UniversalModal>
      )}
    </>
  );
};

export default UserInfo;
