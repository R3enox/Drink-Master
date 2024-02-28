import Select from 'react-select';
import sprite from 'assets/sprite.svg';

export const DrinkIngrediendFieldItem = ({
  value,
  hasPlaceholder,
  placeholder,
  options,
  onSelect,
  onDelete,
}) => {
  return (
    <li className="flex items-center mb-3.5 gap-x-2">
      <Select
        className="flex-initial"
        classNamePrefix="ingredientsSelect"
        name="ingredientId"
        options={options}
        value={!hasPlaceholder && value}
        placeholder={hasPlaceholder && placeholder}
        onChange={onSelect}
        required
      />
      <label>
        <input
          type="text"
          placeholder="1  cl"
          name="measure"
          required
          className="text-primary-text-button-color dark:text-primary-text-color placeholder-hover-border-color-search dark:placeholder-grey-text-color hover:placeholder-button-hover-color/70 dark:hover:placeholder-primary-text-color bg-transparent w-[100px] md:w-[150px]  h-[50px] md:h-[56px] border-border-color-search dark:border-grey-text-color border-[1px] rounded-[200px] pl-[18px] md:pl-[24px] focus:border-border-color-search/100 dark:focus:border-primary-text-color hover:border-border-color-search/100 dark:hover:border-primary-text-color outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] cursor-pointer "
        />
      </label>
      <button
        className="md:ml-auto cursor-pointer"
        type="button"
        onClick={onDelete}
      >
        <svg className=" stroke-button-hover-color dark:stroke-primary-text-color w-[18px] md:w-[20px] h-[18px] md:h-[20px]  hover:stroke-[#848080] focus:stroke-[#848080] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] ">
          <use href={`${sprite}#icon-cross`} />
        </svg>
      </button>
    </li>
  );
};
