import { createSlice } from '@reduxjs/toolkit';

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
      .addCase(getDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = action.payload;
      })
      .addCase(filterDrinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = payload.paginatedResult;
        state.totalCount = payload.totalCount;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
        }
      );
  },
});

export const drinksReducer = drinksSlice.reducer;
