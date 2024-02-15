import DrinkPageHero from './AddDrinkFormComponents/DrinkDescriptionFields';
import DrinkIngredientsFields from './AddDrinkFormComponents/DrinkIngredientsFields';
import RecipePreparation from './AddDrinkFormComponents/RecipePreparation';

const AddDrinkForm = () => {
  return (
    <form>
      <DrinkPageHero />
      <DrinkIngredientsFields />
      <RecipePreparation />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddDrinkForm;
