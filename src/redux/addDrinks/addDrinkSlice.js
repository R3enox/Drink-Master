import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../services/axios';

export const addDrink = createAsyncThunk(
  'drinks//own/add',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/drinks/own/add`, formData);
      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

const addDrinkSlice = createSlice({
  name: 'addDrink',

  initialState: { newDrink: [], error: null },
  reducers: {},
  extraReducers: (builded) =>
    builded
      .addCase(addDrink.pending, (state) => {
        state.error = null;
      })
      .addCase(addDrink.fulfilled, (state, { payload }) => {
        state.newDrink = payload;
        state.error = null;
      })
      .addCase(addDrink.rejected, (state, { payload }) => {
        state.error = payload;
      }),
});

export const addDrinkReducer = addDrinkSlice.reducer;
