import { useDispatch } from 'react-redux';

import { signOutThunk } from '../../../redux/auth/authOperations';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

const LogoutBtn = ({ closeFnc }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex gap-[8px]">
        <button
          className="transition-colors   w-[140px] md:w-[195px]  text-center py-[12px] md:py-[14px]  rounded-[200px]  border-[1px]  text-[16px] md:text-[17px] bg-primary-text-color  text-primary-text-button-color shadow-lg hover:shadow-primary-text-color/50 "
          onClick={() => dispatch(signOutThunk())}
        >
          {t('button.LogOutModal.LogOut')}
        </button>
        <button
          className="transition-colors   w-[137px] md:w-[195px]  text-center py-[12px] md:py-[14px] rounded-[200px] bg-filter-scroll-text shadow-lg hover:shadow-filter-scroll-text/70 text-primary-text-color text-[16px]  md:text-[17px]  "
          onClick={closeFnc}
        >
          {t('button.LogOutModal.Cancel')}
        </button>
      </div>
    </div>
  );
};

export default LogoutBtn;
