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

    const result = await dispatch(addDrink(formData));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/my');
    }
  };

  return (
    <section className="pb-20 lg:pb-[140px]">
      <form onSubmit={onSubmit}>
        <DrinkPageHero />
        <DrinkIngredientsFields ingredientsOptions={ingredientsOptions} />
        <RecipePreparation />
        <BtnDarkTheme>{t('button.AddDrink.Add')}</BtnDarkTheme>
      </form>
    </section>
  );
};
