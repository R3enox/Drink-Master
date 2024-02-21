
import { useDispatch } from 'react-redux';
import * as SC from "../LogOutModal/LogOut.styled"
import { signOutThunk } from '../../../redux/auth/authOperations';

const LogOutModal = ({ closeFnc }) => {
  const dispatch = useDispatch();



  return (
    <div className="w-[335px] md:w-[500px] items-center flex flex-col  pl-[25px] pr-[25px] pt-[50px] pb-[50px] md:pl-[50px] md:pr-[50px] md:pt-[50px] md:pb-[50px] ">
      <SC.LogOutText className="mb-[25px] md:mb-[37px]">
        Are you sure you want to log out?
      </SC.LogOutText>
      <div className="flex gap-[8px]">
        <button
          className="w-[140px] md:w-[195px]  text-center py-[16px]  rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px]  md:leading-[1.56]"
          onClick={() => dispatch(signOutThunk())}
        >
          Log out
        </button>
        <button
          className="w-[137px] md:w-[195px]  text-center py-[16px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px]  md:leading-[1.56]"
          onClick={closeFnc}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
