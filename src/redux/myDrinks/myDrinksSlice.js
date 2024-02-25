import { createSlice } from '@reduxjs/toolkit';
import { deleteMyDrink, getMyDrinks } from './myDrinksAPI';

export const myDrinksSlice = createSlice({
  name: 'myDrinks',
  initialState: {
    myDrinks: [],
    totalCount: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyDrinks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyDrinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.myDrinks = payload.paginatedResult;
        state.totalCount = payload.totalCount;
      })
      .addCase(getMyDrinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMyDrink.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteMyDrink.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.myDrinks = state.myDrinks.filter(({ _id: id }) => id !== payload);
      })
      .addCase(deleteMyDrink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const myDrinksReducer = myDrinksSlice.reducer;
