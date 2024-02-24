import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../services/axios';

export const fetchPopularDrinks = createAsyncThunk(
  '/drinks/popular?page=1&limit=4',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/drinks/popular?page=${page}&limit=${limit}`
      );

      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

const popularDrinksSlice = createSlice({
  name: 'popularDrinks',

  initialState: { popularDrinks: [], error: null },

  extraReducers: (builder) =>
    builder
      .addCase(fetchPopularDrinks.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchPopularDrinks.fulfilled, (state, { payload }) => {
        state.popularDrinks = payload;
        state.error = null;
      })
      .addCase(fetchPopularDrinks.rejected, (state, { payload }) => [
        (state.error = payload),
      ]),
});

export const popularDrinksReducer = popularDrinksSlice.reducer;
