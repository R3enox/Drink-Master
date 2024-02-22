const ModalButtons = ({ btnFunction, closeMyDrinkModal }) => {
  return (
    <div className="flex flex-row  gap-[8px]">
      <button
        className="transition-colors bg-primary-text-color    hover:bg-filter-scroll-text  hover:text-primary-text-color py-[41px] px-[16px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] text-primary-text-button-color border-none"
        type="button"
        onClick={() => closeMyDrinkModal()}
      >
        {'Cancel'}
      </button>
      <button
        className="transition-colors bg-filter-scroll-text   hover:bg-primary-text-color  hover:text-hover-text-color  py-[41px] px-[16px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] border-none"
        type="button"
        onClick={() => btnFunction()}
      >
        {'Delete'}
      </button>
    </div>
  );
};

export default ModalButtons;
