import { DrinkPageHero } from './AddDrinkFormComponents/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './AddDrinkFormComponents/DrinkIngredientsFields';
import { RecipePreparation } from './AddDrinkFormComponents/RecipePreparation';

export const AddDrinkForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData);

    formData.forEach((value, name) => {
      console.log('name: ', name);
      console.log('value: ', value);
    });
  };

  return (
    <section className="container margin pb-20">
      <form onSubmit={onSubmit}>
        <DrinkPageHero />
        <DrinkIngredientsFields />
        <RecipePreparation />
        <button
          type="submit"
          className="block w-[108px] h-[46px] rounded-[42px] bg-primary-text-color text-primary-text-button-color"
        >
          Add
        </button>
      </form>
    </section>
  );
};
