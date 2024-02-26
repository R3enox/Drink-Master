export const selectFavorites = (state) => state.favorites.favorites;
export const selectFavoritesTotalCount = (state) => state.favorites.totalCount;
export const selectFavoritesIsLoading = (state) => state.favorites.isLoading;
export const selectFavoritesError = (state) => state.favorites.error;
export const selectFavoritesIsRemoveLoading = (state) =>
  state.favorites.isRemoveLoading;
