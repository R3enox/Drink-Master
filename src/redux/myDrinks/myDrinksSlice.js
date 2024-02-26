import { createSlice } from '@reduxjs/toolkit';
import { deleteMyDrink, getMyDrinks } from './myDrinksAPI';

export const myDrinksSlice = createSlice({
  name: 'myDrinks',
  initialState: {
    myDrinks: [],
    totalCount: null,
    isLoading: false,
    isRemoveLoading: false,
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
        state.myDrinks = payload;
        state.totalCount = payload.length;
      })
      .addCase(getMyDrinks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteMyDrink.pending, (state) => {
        state.isRemoveLoading = true;
        state.error = null;
      })
      .addCase(deleteMyDrink.fulfilled, (state, { payload }) => {
        state.isRemoveLoading = false;
        state.myDrinks = state.myDrinks.filter(({ _id: id }) => id !== payload);
        state.totalCount -= 1;
      })
      .addCase(deleteMyDrink.rejected, (state, { payload }) => {
        state.isRemoveLoading = false;
        state.error = payload;
      });
  },
});

export const myDrinksReducer = myDrinksSlice.reducer;
