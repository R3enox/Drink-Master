const DrinkIngredientsList = ({ cocktail }) => {
  return (
    <ul>
      {cocktail !== null &&
        cocktail.ingredients.map(({ ingredientId, title, measure }) => {
          return (
            <li key={ingredientId['$oid']}>
              <p>{title}</p>
              <p>{measure}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default DrinkIngredientsList;
