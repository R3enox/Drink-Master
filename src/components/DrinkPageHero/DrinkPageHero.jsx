// import React from 'react'

// import { useSelector } from "react-redux";
// import { selectGetCurrentCoctail } from "../../redux/drinkIdStorageReducer/drinkIdStorageReducer.selectors";

const DrinkPageHero = ({ cocktail }) => {
  if (!cocktail) return null;

  const { drink, category, alcoholic, description, drinkThumb, favorites } =
    cocktail;

  return (
    <div>
      <h2>{drink}</h2>
      <p>
        {category}/{alcoholic}
      </p>
      <p>{description}</p>
      <img src={drinkThumb} alt="poster cocktail" />
      {favorites ? (
        <button type="button">Удалить из избранных</button>
      ) : (
        <button type="button">Добавить в избранные</button>
      )}
    </div>
  );
};

export default DrinkPageHero;
