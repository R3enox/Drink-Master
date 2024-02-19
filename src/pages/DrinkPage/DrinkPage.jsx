import { useDispatch, useSelector } from 'react-redux';
import DrinkPageHero from '../../components/DrinkPageHero/DrinkPageHero';
import { selectGetCurrentCocktail } from '../../redux/drinkIdStorageReducer/drinkIdStorageReducer.selectors';
import DrinkIngredientsList from '../../components/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { fetchCocktailsById } from '../../redux/drinkIdStorageReducer/services/drinkIdServices';
import { useParams } from 'react-router-dom';
import { getIdIngredients, parseFromLocalStorage } from './services.js';

const DrinkPage = () => {
  const currentCocktail = useSelector(selectGetCurrentCocktail);
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  const [currentIngr, setCurrentIngr] = useState(null);
  const ingredientsId = getIdIngredients(currentCocktail);
  const ingredByFilter =
    currentIngr &&
    currentIngr.filter((ingr) => ingredientsId.includes(ingr._id['$oid']));

  useEffect(() => {
    const ingrId = parseFromLocalStorage();
    setCurrentIngr(ingrId);
    dispatch(fetchCocktailsById(drinkId));

    () => setCurrentIngr(null);
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
