import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DrinkPageHero from 'components/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from 'components/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import { selectGetCurrentCocktail } from '../../redux/drinkIdStorageReducer/drinkIdStorageReducer.selectors';
import { fetchCocktailsById } from '../../redux/drinkIdStorageReducer/services/drinkIdServices';
import { getIdIngredients } from './services.js';
import { useFilters } from 'hooks/useFilters.js';

const DrinkPage = () => {
  const currentCocktail = useSelector(selectGetCurrentCocktail);
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const { ingredients } = useFilters();

  const ingIds = getIdIngredients(currentCocktail);
  const ingredByFilter =
    ingredients &&
    ingredients.filter((ingr) =>
      ingIds.find(({ ingredientId }) => ingredientId === ingr._id)
    );

  useEffect(() => {
    dispatch(fetchCocktailsById(drinkId));
  }, [drinkId, dispatch]);

  return (
    <section className="mt-20 mb-20">
      <div className="container mx-auto">
        <DrinkPageHero cocktail={currentCocktail} />
        <DrinkIngredientsList ingredients={ingredByFilter} />
        <RecipePreparation description={currentCocktail} />
      </div>
    </section>
  );
};

export default DrinkPage;
