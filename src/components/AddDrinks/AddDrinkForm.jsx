import { DrinkPageHero } from './AddDrinkFormComponents/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './AddDrinkFormComponents/DrinkIngredientsFields';
import { RecipePreparation } from './AddDrinkFormComponents/RecipePreparation';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { createOptionsFromArrOfObjUsingId } from '../../helpers/createCollectionOptions';
import { BtnDarkTheme } from '../reUseComponents/Buttons/Buttons';
import { addDrink } from '../../redux/addDrinks/addDrinkSlice';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export const AddDrinkForm = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredients } = useFilters();
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  const addedIngredients = [];

  const ingredientsOptions = useMemo(
    () => createOptionsFromArrOfObjUsingId(ingredients ?? []),
    [ingredients]
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    addedIngredients.length = 0;

    const formData = new FormData(e.currentTarget);

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

<<<<<<< Updated upstream
    dispatch(addDrink(formData));
=======
    formData.forEach((value, name) => {
      console.log('name: ', name);
      console.log('value: ', value);
    });

    try {
      await dispatch(addDrink(formData));
      navigate('/my');
    } catch (error) {
      console.log(error);
    }
>>>>>>> Stashed changes
  };

  return (
    <section className="margin pb-20 lg:pb-[140px]">
      <form onSubmit={onSubmit}>
        <DrinkPageHero />
        <DrinkIngredientsFields ingredientsOptions={ingredientsOptions} />
        <RecipePreparation />
<<<<<<< Updated upstream
        {/* <button
          type="submit"
          className="block w-[108px] h-[46px] border-2 border-primary-text-color outline-none  rounded-[42px] bg-primary-text-color text-primary-text-button-color hover:border-hover-button-border-color hover:border-2 focus:border-hover-button-border-color focus:border-2 focus:outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
        >
          Add
        </button> */}
        <BtnDarkTheme>{t('button.AddDrink.Add')}</BtnDarkTheme>
=======
        <BtnDarkTheme>Add</BtnDarkTheme>
>>>>>>> Stashed changes
      </form>
    </section>
  );
};
