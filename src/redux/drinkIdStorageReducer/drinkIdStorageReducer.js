import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCocktailsById } from './services/drinkIdServices';

const initialState = {
  currentCocktails: null,
  isLoading: false,
  isError: null,
};

const cocktailSlice = createSlice({
  name: 'Cocktail',
  initialState,
  reducers: {
    getCocktailForId(state) {
      return state.currentCocktails;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCocktailsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.currentCocktails = payload;
      })
      .addMatcher(isAnyOf(fetchCocktailsById.pending), (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addMatcher(
        isAnyOf(fetchCocktailsById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      ),
});

export const { getCocktailForId } = cocktailSlice.actions;

export const drinkIdStorageReducer = cocktailSlice.reducer;
