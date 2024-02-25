export const ButtonComponent = ({ descr, btnFunction, id }) => {
  return (
    <button
      className="mb-[80px] bg-primary-text-color  text-primary-text-button-color transition font-semibold text-[14px] leading-[1.29] border-transparent border-[1px] rounded-[42px] px-[40px] py-[14px] bg-white text-black md:text-[16px] md:leading-[1.12] lg:px-[40px] lg:py-[18px] lg:w-64 lg:h-14 hover:bg-button-hover-color hover:border hover:border-primary-text-color hover:text-primary-text-color flex justify-center items-center"
      type="button"
      onClick={() => btnFunction(id)}
      disabled={!id}
    >
      <span className="text-primary-text-button-color font-semibold text-[14px] leading-[1.29] transition lg:font-semibold lg:text-base lg:leading-[1.125] md:leading-[1.12]">
        {descr}
      </span>
    </button>
  );
};
