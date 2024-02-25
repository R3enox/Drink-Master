import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';

export const getMyDrinks = createAsyncThunk(
  'myDrinks/fetchMyDrinks',
  async ({ page, per_page }, thunkApi) => {
    try {
      const queryParams = new URLSearchParams({ page, per_page });
      const { data } = await API.get(`/drinks/own?${queryParams}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteMyDrink = createAsyncThunk(
  'myDrinks/deleteMyDrink',
  async (id, thunkApi) => {
    try {
      await API.delete(`/drinks/own/remove/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
