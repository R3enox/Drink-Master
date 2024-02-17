// import { logOut } from '../../../redux/auth/usersOperations';
// import { useDispatch } from 'react-redux';
import * as SC from "../LogOutModal/LogOut.styled"

const LogOutModal = ({ closeFnc }) => {
  // const dispatch = useDispatch();

  return (
    <SC.LogOutWrapper>
      <SC.LogOutText>Are you sure you want to log out?</SC.LogOutText>
      <SC.BtnWrapper>
        <SC.YesBtn >Log out</SC.YesBtn>
        <SC.NoBtn onClick={closeFnc}>Cancel</SC.NoBtn>
      </SC.BtnWrapper>
    </SC.LogOutWrapper>
  );
};

export default LogOutModal;
