import { useSelector } from "react-redux";
import DrinkPageHero from "../../components/DrinkPageHero/DrinkPageHero";
import { selectGetCurrentCocktail } from "../../redux/drinkIdStorageReducer/drinkIdStorageReducer.selectors";
import DrinkIngredientsList from "../../components/DrinkIngredientsList/DrinkIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";

const DrinkPage = () => {

  const currentCocktail = useSelector(selectGetCurrentCocktail)


  return (
    <>
       <DrinkPageHero/>
       <DrinkIngredientsList cocktail={currentCocktail}/>
       <RecipePreparation description={currentCocktail}/>
    </>
  );
};

export default DrinkPage;
