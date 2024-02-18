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
    <section className="container margin">
      <form onSubmit={onSubmit}>
        <DrinkPageHero />
        <DrinkIngredientsFields />
        <RecipePreparation />
        <button type="submit" className="block">
          Add
        </button>
      </form>
    </section>
  );
};
