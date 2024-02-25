import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { filterDrinks, getDrinks } from './drinksAPI';

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    drinks: [],
    totalCount: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDrinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = payload;
      })
      .addCase(filterDrinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = payload.paginatedResult;
        state.totalCount = payload.totalCount;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      )
      .addMatcher(isAnyOf(getDrinks.pending, filterDrinks.pending), (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addMatcher(
        isAnyOf(getDrinks.rejected, filterDrinks.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      );
  },
});

export const drinksReducer = drinksSlice.reducer;
