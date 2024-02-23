import { useParams } from 'react-router-dom';

import { useGetCocktailForIdQuery } from '../../redux/drinkIdStorageReducer/drinkIdStorageReducer';
import Loader from '../../components/Loader/Loader.jsx';

import DrinkPageHero from 'components/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from 'components/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import { getIdIngredients, scrollToTop } from './services.js';
import { useFilters } from 'hooks/useFilters.js';
import { selectAuthError } from '../../redux/auth/authSelectors.js';
import ScrollBtn from '../../components/reUseComponents/Buttons/ScrollBtn.jsx/ScrollBtn.jsx';
import IconUp from '../../components/reUseComponents/Buttons/ScrollBtn.jsx/IconUp.jsx';
import { useSelector } from 'react-redux';

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

  return (
    <section className="py-[80px] md:py-[140px] lg:pt-[132px]">
      {isLoading && <Loader />}
      {isError && <h1>{isError}</h1>}
      {data && (
        <div className="container mx-auto ">
          <DrinkPageHero cocktail={data} />
          <DrinkIngredientsList
            ingredients={ingredByFilter}
            currentIngred={ingIds}
          />
          <RecipePreparation description={data} />
          <ScrollBtn/>
        </div>
      )}
    </section>
  );
};

export default DrinkPage;
