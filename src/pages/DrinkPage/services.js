export const getIdIngredients = (cocktail) => {
  if (!cocktail || !cocktail.ingredients) return [];

  return cocktail.ingredients.map(({ ingredientId, measure }) => ({
    ingredientId,
    measure,
  }));
};


export const scrollToTop = () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrollTop - scrollTop / 8);
  }
};


