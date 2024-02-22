import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader.jsx';

import DrinkPageHero from 'components/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from 'components/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import {
  selectGetCurrentCocktail,
  selectIsLoading,
} from '../../redux/drinkIdStorageReducer/drinkIdStorageReducer.selectors';
import { fetchCocktailsById } from '../../redux/drinkIdStorageReducer/services/drinkIdServices';
import { getIdIngredients, scrollToTop } from './services.js';
import { useFilters } from 'hooks/useFilters.js';
import { selectAuthError } from '../../redux/auth/authSelectors.js';

const DrinkPage = () => {
  const currentCocktail = useSelector(selectGetCurrentCocktail);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectAuthError);
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
    scrollToTop();
  }, [drinkId, dispatch]);

  return (

    <section className="py-[80px] md:py-[140px] lg:pt-[132px]">
      {isLoading && <Loader />}
      {isError && <h1>{isError}</h1>}
      <div className="container mx-auto ">
        <DrinkPageHero cocktail={currentCocktail} />
        <DrinkIngredientsList
          ingredients={ingredByFilter}
          currentIngred={ingIds}
        />
        <RecipePreparation description={currentCocktail} />
      </div>
    </section>
  );
};

export default DrinkPage;
