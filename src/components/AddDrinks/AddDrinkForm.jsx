import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { DrinkPageHero } from './AddDrinkFormComponents/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './AddDrinkFormComponents/DrinkIngredientsFields';
import { RecipePreparation } from './AddDrinkFormComponents/RecipePreparation';
import { BtnThemeChange } from '../reUseComponents/Buttons/ButtonThemeChange';
import { MotivatingModal } from '../reUseComponents/MotivatingModal/MotivatingModal';

import { createOptionsFromArrOfObjUsingId } from '../../helpers/createCollectionOptions';
import {
  addDrink,
  selectAddDrinkIsLoading,
} from '../../redux/addDrinks/addDrinkSlice';
import { useFilters } from '../../hooks/useFilters';
import { useModal } from '../../hooks/useModal';
import API from 'services/axios';
import '../../i18n';

export const AddDrinkForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredients } = useFilters();
  const isloading = useSelector(selectAddDrinkIsLoading);
  const { isOpen, toggleModal } = useModal();
  const [achievement, setAchievement] = useState(null);

  const addedIngredients = [];

  const ingredientsOptions = useMemo(
    () => createOptionsFromArrOfObjUsingId(ingredients ?? [], t, 'ingredients'),
    [ingredients, t]
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    e.target.elements.submit.disabled = true;

    addedIngredients.length = 0;

    const formData = new FormData(e.currentTarget);

    formData.getAll('ingredientId').forEach((ingredientId, index) => {
      const measure = formData.getAll('measure')[index];
      addedIngredients.push({
        title: ingredientsOptions.find(
          (option) => option.value === ingredientId
        ).enTitle,
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

    e.target.elements.submit.disabled = false;

    if (result.meta.requestStatus === 'fulfilled') {
      const { data } = await API.get('/users/achievements/create-own');
      if (data) {
        setAchievement(data);
        toggleModal();
      } else {
        toast.success(t('toastError.AddDrinkForm'));
        navigate('/my');
      }
    }
  };

  return (
    <section className="pb-20 lg:pb-[140px]">
      <form onSubmit={onSubmit}>
        <DrinkPageHero />
        <DrinkIngredientsFields ingredientsOptions={ingredientsOptions} />
        <RecipePreparation />
        <BtnThemeChange
          name="submit"
          title={
            isloading ? t('button.AddDrink.Creating') : t('button.AddDrink.Add')
          }
        ></BtnThemeChange>
      </form>
      {achievement && isOpen && (
        <MotivatingModal
          achievementText={achievement.message}
          classNamesKey={achievement.classNamesKey}
          onClose={toggleModal}
        />
      )}
      {achievement && !isOpen && <Navigate to="/my" />}
    </section>
  );
};
