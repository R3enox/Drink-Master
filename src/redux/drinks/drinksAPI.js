import { createAsyncThunk } from '@reduxjs/toolkit';

import API from 'services/axios';

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
  async (queryParams, thunkAPI) => {
    try {
      const { data } = await API.get(`/drinks/search?${queryParams}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
