import { useDispatch } from 'react-redux';

import { signOutThunk } from '../../../redux/auth/authOperations';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

const LogOutModal = ({ closeFnc }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex gap-[8px]">
        <button
          className="transition-colors bg-filter-scroll-text   hover:bg-primary-text-color  hover:text-hover-text-color  w-[140px] md:w-[195px]  text-center py-[12px] md:py-[14px]  rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px]  font-semibold md:text-[17px]  "
          onClick={() => dispatch(signOutThunk())}
        >
          {t('button.LogOutModal.LogOut')}
        </button>
        <button
          className="transition-colors bg-filter-scroll-text   hover:bg-primary-text-color  hover:text-hover-text-color  w-[137px] md:w-[195px]  text-center py-[12px] md:py-[14px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px]  font-semibold md:text-[17px]  "
          onClick={closeFnc}
        >
          {t('button.LogOutModal.Cancel')}
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
