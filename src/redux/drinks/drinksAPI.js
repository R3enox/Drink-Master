import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';

export const getDrinks = createAsyncThunk(
  'drinks/getDrinks',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/drinks');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterDrinks = createAsyncThunk(
  'drinks/filterDrinks',
  async (filters, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams();
      if (filters.category) {
        queryParams.append('category', filters.category);
      }
      if (filters.ingredient) {
        queryParams.append('ingredient', filters.ingredient);
      }
      if (filters.keyName) {
        queryParams.append('keyName', filters.keyName);
      }
      const queryString = queryParams.toString();
      const { data } = await API.get(`/drinks/search?${queryString}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
