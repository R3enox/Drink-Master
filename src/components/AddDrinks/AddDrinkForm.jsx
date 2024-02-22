import { nanoid } from 'nanoid';
import { DrinkPageHero } from './AddDrinkFormComponents/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './AddDrinkFormComponents/DrinkIngredientsFields';
import { RecipePreparation } from './AddDrinkFormComponents/RecipePreparation';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/auth/authSelectors';

export const AddDrinkForm = () => {
  const authToken = useSelector(selectAuthToken);
  const ingredients = [];

  const onSubmit = (e) => {
    e.preventDefault();
    ingredients.length = 0;

    console.log(authToken);

    const formData = new FormData(e.currentTarget);

    formData.getAll('title').forEach((title, index) => {
      const measure = formData.getAll('measure')[index];
      ingredients.push({
        title,
        measure,
        ingredientId: nanoid(),
      });
    });

    formData.delete('title');
    formData.delete('measure');

    ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][title]`, ingredient.title);
      formData.append(`ingredients[${index}][measure]`, ingredient.measure);
      formData.append(
        `ingredients[${index}][ingredientId]`,
        ingredient.ingredientId
      );
    });

    formData.forEach((value, name) => {
      console.log('name: ', name);
      console.log('value: ', value);
    });

    fetch('http://localhost:3000/api/drinks/own/add', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: formData,
    }).then((response) => {
      if (response.ok) {
        console.log('status 200');
      } else {
        console.log('Error:', response.statusText);
      }
    });
  };

  return (
    <section className="margin pb-20 pt-10">
      <form onSubmit={onSubmit}>
        <DrinkPageHero />
        <DrinkIngredientsFields />
        <RecipePreparation />
        <button
          type="submit"
          className="block w-[108px] h-[46px] border-2 border-primary-text-color outline-none  rounded-[42px] bg-primary-text-color text-primary-text-button-color hover:border-hover-button-border-color hover:border-2 focus:border-hover-button-border-color focus:border-2 focus:outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
        >
          Add
        </button>
      </form>
    </section>
  );
};
