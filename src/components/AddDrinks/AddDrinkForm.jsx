import { DrinkPageHero } from './AddDrinkFormComponents/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './AddDrinkFormComponents/DrinkIngredientsFields';
import { RecipePreparation } from './AddDrinkFormComponents/RecipePreparation';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
// import { selectAuthToken } from '../../redux/auth/authSelectors';
import { useFilters } from '../../hooks/useFilters';
import { createOptionsFromArrOfObjUsingId } from '../../helpers/createCollectionOptions';
import { BtnDarkTheme } from '../reUseComponents/Buttons/Buttons';
import { addDrink } from '../../redux/addDrinks/addDrinkSlice';

export const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const { ingredients } = useFilters();
  // const authToken = useSelector(selectAuthToken);
  const addedIngredients = [];

  const ingredientsOptions = useMemo(
    () => createOptionsFromArrOfObjUsingId(ingredients ?? []),
    [ingredients]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    addedIngredients.length = 0;

    const formData = new FormData(e.currentTarget);

    console.log(formData);

    formData.getAll('ingredientId').forEach((ingredientId, index) => {
      const measure = formData.getAll('measure')[index];
      addedIngredients.push({
        title: ingredientsOptions.find(
          (option) => option.value === ingredientId
        ).label,
        measure,
        ingredientId,
      });
    });

    formData.delete('ingredientId');
    formData.delete('measure');

    addedIngredients.forEach((addedIngredient, index) => {
      formData.append(`ingredients[${index}][title]`, addedIngredient.title);
      formData.append(
        `ingredients[${index}][measure]`,
        addedIngredient.measure
      );
      formData.append(
        `ingredients[${index}][ingredientId]`,
        addedIngredient.ingredientId
      );
    });

    formData.forEach((value, name) => {
      console.log('name: ', name);
      console.log('value: ', value);
    });

    dispatch(addDrink(formData));
  };

  return (
    <section className="margin pb-20 lg:pb-[140px]">
      <form onSubmit={onSubmit}>
        <DrinkPageHero />
        <DrinkIngredientsFields ingredientsOptions={ingredientsOptions} />
        <RecipePreparation />
        {/* <button
          type="submit"
          className="block w-[108px] h-[46px] border-2 border-primary-text-color outline-none  rounded-[42px] bg-primary-text-color text-primary-text-button-color hover:border-hover-button-border-color hover:border-2 focus:border-hover-button-border-color focus:border-2 focus:outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
        >
          Add
        </button> */}
        <BtnDarkTheme>Add</BtnDarkTheme>
      </form>
    </section>
  );
};
