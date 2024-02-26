import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader.jsx';

import {
  selectGetCurrentCocktail,
  selectIsLoading,
} from '../../redux/drinkIdStorageReducer/drinkIdStorageReducer.selectors';
import { fetchCocktailsById } from '../../redux/drinkIdStorageReducer/services/drinkIdServices';
import { selectAuthError } from '../../redux/auth/authSelectors.js';
import { mapIngredientsOfCocktail } from 'helpers/createIngredientsCollection.js';
import { scrollToTop } from 'helpers/scrollToTop.js';
import { useFilters } from 'hooks/useFilters.js';
import DrinkIngredientsList from '../../components/DrinkId/DrinkIngredientsList.jsx';
import RecipePreparation from '../../components/DrinkId/RecipePreparation.jsx';
import DrinkPageHero from '../../components/DrinkId/DrinkPageHero.jsx';

const DrinkPage = () => {
  const currentCocktail = useSelector(selectGetCurrentCocktail);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectAuthError);
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const { ingredients } = useFilters();

  const ingIds = mapIngredientsOfCocktail(currentCocktail);

  const ingredByFilter =
    ingredients &&
    ingredients.filter((ingr) =>
      ingIds.find(({ ingredientId }) => ingredientId === ingr._id)
    );

  const mergedIngred = ingredByFilter.map((ingredient) => {
    const correspondingMeasure = ingIds.find(
      (item) => item.ingredientId === ingredient._id
    );
    const measure = correspondingMeasure
      ? correspondingMeasure.measure
      : 'Unknown';
    return {
      ...ingredient,
      measure: measure,
    };
  });

  useEffect(() => {
    dispatch(fetchCocktailsById(drinkId));
    scrollToTop();
  }, [drinkId, dispatch]);

  return (
    <section className="py-[80px] md:py-[140px] lg:pt-[132px]">
      {isLoading && <Loader isStatic />}
      {isError && <h1>{isError}</h1>}
      {currentCocktail && (
        <div className="container mx-auto ">
          <DrinkPageHero cocktail={currentCocktail} />
          <DrinkIngredientsList ingredients={mergedIngred} />
          <RecipePreparation description={currentCocktail} />
        </div>
      )}
    </section>
  );
};

export default DrinkPage;
