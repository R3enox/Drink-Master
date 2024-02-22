export const ButtonComponent = ({ descr, btnFunction, id }) => {
  return (
    <button
      className="bg-primary-text-color border rounded-full px-10 py-3 w-56 h-12 font-semibold text-base leading-tight text-blue-900"
      type="button"
      onClick={() => btnFunction(id)}
      disabled={!id}
    >
      <span className=" text-sm leading-4 text-primary-text-button-color lg:font-semibold lg:text-base lg:leading-[1.125]">
        {descr}
      </span>
    </button>
  );
};
