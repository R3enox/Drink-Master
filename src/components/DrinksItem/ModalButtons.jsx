const ModalButtons = ({ handleDeleteClick, closeMyDrinkModal, drinkId }) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <button
        className="transition-colors bg-primary-text-color    hover:bg-filter-scroll-text  hover:text-primary-text-color py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] text-primary-text-button-color border-none"
        type="button"
        onClick={() => closeMyDrinkModal()}
      >
        {'Cancel'}
      </button>
      <button
        className="transition-colors bg-filter-scroll-text   hover:bg-primary-text-color  hover:text-hover-text-color  py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] border-none"
        type="button"
        onClick={() => handleDeleteClick(drinkId)}
      >
        {'Delete'}
      </button>
    </div>
  );
};

export default ModalButtons;
