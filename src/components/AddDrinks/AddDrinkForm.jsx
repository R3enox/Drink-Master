import DrinkPageHero from './AddDrinkFormComponents/DrinkDescriptionFields';
import DrinkIngredientsFields from './AddDrinkFormComponents/DrinkIngredientsFields';
import RecipePreparation from './AddDrinkFormComponents/RecipePreparation';

const AddDrinkForm = () => {
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
    <form onSubmit={onSubmit}>
      <DrinkPageHero />
      <DrinkIngredientsFields />
      <RecipePreparation />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddDrinkForm;
