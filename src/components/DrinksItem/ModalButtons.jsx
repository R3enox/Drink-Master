import { useTranslation } from 'react-i18next';
import '../../i18n';

const ModalButtons = ({ handleDeleteClick, closeMyDrinkModal, drinkId }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row items-center space-x-2">
      <button
        className="transition-colors bg-primary-text-color  text-primary-text-button-color shadow-lg hover:shadow-primary-text-color/50 py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] border-none"
        type="button"
        onClick={() => closeMyDrinkModal()}
      >
        {t('button.ModalButtons.CancelBtn')}
      </button>
      <button
        className="transition-colors  bg-filter-scroll-text shadow-lg hover:shadow-filter-scroll-text/70 text-primary-text-color  py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] border-none"
        type="button"
        onClick={() => handleDeleteClick(drinkId)}
      >
        {t('button.ModalButtons.DeleteBtn')}
      </button>
    </div>
  );
};

export default ModalButtons;
