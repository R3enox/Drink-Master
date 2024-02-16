import { useDispatch, useSelector } from 'react-redux';
import DrinkPageHero from '../../components/DrinkPageHero/DrinkPageHero';
import { selectGetCurrentCocktail } from '../../redux/drinkIdStorageReducer/drinkIdStorageReducer.selectors';
import DrinkIngredientsList from '../../components/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { useEffect } from 'react';
import { fetchCocktailsById } from '../../redux/drinkIdStorageReducer/services/drinkIdServices';
import { useParams } from 'react-router-dom';

const DrinkPage = () => {
  const currentCocktail = useSelector(selectGetCurrentCocktail);
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  useEffect(() => {
    dispatch(fetchCocktailsById(drinkId));
  }, [drinkId, dispatch]);

  return (
    <>
      <DrinkPageHero cocktail={currentCocktail}/>
      <DrinkIngredientsList cocktail={currentCocktail} />
      <RecipePreparation description={currentCocktail} />
    </>
  );
};

export default DrinkPage;
