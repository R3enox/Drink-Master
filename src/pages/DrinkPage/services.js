export const getIdIngredients = (cocktail) => {
    if (!cocktail || !cocktail.ingredients) return []; 

    return cocktail.ingredients.map(({ ingredientId }) => ingredientId);
};

export const parseFromLocalStorage = () => JSON.parse(localStorage.getItem("ingredients"));


