import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite, getFavorites } from './favoriteAPI';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
    totalCount: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorites = payload.paginatedResult;
        state.totalCount = payload.totalCount;
      })
      .addCase(getFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorites = state.favorites.filter(
          ({ _id: id }) => id !== payload
        );
      })
      .addCase(deleteFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addFavorite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorites.push(payload);
      })
      .addCase(addFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
