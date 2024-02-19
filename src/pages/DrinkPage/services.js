export const getIdIngredients = (cocktail) => {
  if (!cocktail || !cocktail.ingredients) return [];

  return cocktail.ingredients.map(({ ingredientId, measure }) => ({
    ingredientId,
    measure,
  }));
};
