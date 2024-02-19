import { createSlice } from '@reduxjs/toolkit';
import { filterDrinks, getDrinks } from './drinksAPI';
const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    drinks: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = action.payload.data;
      })
      .addCase(filterDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = action.payload;
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
