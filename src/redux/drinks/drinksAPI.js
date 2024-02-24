import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';

export const getDrinks = createAsyncThunk(
  'drinks/getDrinks',
  async (per_category, thunkApi) => {
    try {
      const { data } = await API.get(`/drinks?per_category=${per_category}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const filterDrinks = createAsyncThunk(
  'drinks/filterDrinks',
  async (filters, thunkApi) => {
    try {
      const { data } = await API.get(`/drinks/search?${filters}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
