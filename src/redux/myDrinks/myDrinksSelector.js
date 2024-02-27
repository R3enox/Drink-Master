export const selectMyDrinks = (state) => state.myDrinks.myDrinks;
export const selectMyDrinksTotalCount = (state) => state.myDrinks.totalCount;
export const selectMyDrinksLoading = (state) => state.myDrinks.isLoading;
export const selectMyDrinksError = (state) => state.myDrinks.error;
export const selectMyDrinksRemoveLoading = (state) =>
  state.myDrinks.isRemoveLoading;
