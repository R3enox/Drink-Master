import { useParams } from 'react-router-dom';
import { getIdIngredients, scrollToTop } from './services.js';
import { useFilters } from 'hooks/useFilters.js';
import { selectAuthError } from '../../redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';
import { useGetCocktailForIdQuery } from '../../redux/drinkIdStorageReducer/drinkIdStorageReducer';

import Loader from '../../components/Loader/Loader.jsx';
import DrinkPageHero from '../../components/DrinkId/DrinkPageHero.jsx';
import DrinkIngredientsList from '../../components/DrinkId/DrinkIngredientsList.jsx';
import RecipePreparation from '../../components/DrinkId/RecipePreparation.jsx';
import ScrollBtn from '../../components/reUseComponents/Buttons/ScrollBtn.jsx/ScrollBtn.jsx';
import { useEffect } from 'react';


const DrinkPage = () => {
  const { drinkId } = useParams();
  const { data, isLoading } = useGetCocktailForIdQuery(drinkId);
  const isError = useSelector(selectAuthError);
  const { ingredients } = useFilters();
  const ingIds = getIdIngredients(data);

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
    scrollToTop();
  }, []);

  return (
    <section className="py-[80px] md:py-[140px] lg:pt-[132px]">
      {isLoading && <Loader isStatic />}
      {isError && <h1>{isError}</h1>}
      {data && (
        <div className="container mx-auto ">
          <DrinkPageHero cocktail={data} />
          <DrinkIngredientsList ingredients={mergedIngred} />
          <RecipePreparation description={data} />
          <ScrollBtn />
        </div>
      )}
    </section>
  );
};

export default DrinkPage;
