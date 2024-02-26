import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite, getFavorites } from './favoriteAPI';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
    totalCount: null,
    isLoading: false,
    isRemoveLoading: false,
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
        state.favorites = payload;
        state.totalCount = payload.length;
      })
      .addCase(getFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.isRemoveLoading = true;
        state.error = null;
      })
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        state.isRemoveLoading = false;
        state.favorites = state.favorites.filter(
          ({ _id: id }) => id !== payload
        );
        state.totalCount -= 1;
      })
      .addCase(deleteFavorite.rejected, (state, { payload }) => {
        state.isRemoveLoading = false;
        state.error = payload;
      })
      .addCase(addFavorite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorites.push(payload);
        state.totalCount += 1;
      })
      .addCase(addFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
