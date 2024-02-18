import { AddDrinkTitle } from './AddDrinkTitle';

export const RecipePreparation = () => {
  return (
    <>
      <AddDrinkTitle text="Recipe Preparation" />
      <textarea
        className="bg-transparent border-[1px] resize-none border-grey-text-color w-[335px] h-[184px] rounded-[14px] mb-5 pl-[18px] pt-4 "
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
