import { AddDrinkTitle } from './AddDrinkTitle';

export const RecipePreparation = () => {
  return (
    <>
      <AddDrinkTitle text="Recipe Preparation" />
      <textarea
        className="bg-transparent border-[1px] resize-none border-grey-text-color focus:outline-none focus:border-primary-text-color hover:border-primary-text-color w-[335px] h-[184px] rounded-[14px] mb-5 pl-[18px] pt-4  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
        name="instructions"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter the recipe"
        required
      ></textarea>
    </>
  );
};