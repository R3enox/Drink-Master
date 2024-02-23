import { createAsyncThunk } from '@reduxjs/toolkit';

import API from 'services/axios';

export const getCategories = createAsyncThunk(
  'filters/getCategories',
  async (_, thunkAPI) => {
    try {
      const res = await API.get('/filters/categories');
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredients = createAsyncThunk(
  'filters/getIngredients',
  async (_, thunkAPI) => {
    try {
      const res = await API.get('/filters/ingredients');
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGlasses = createAsyncThunk(
  'filters/getGlasses',
  async (_, thunkAPI) => {
    try {
      const res = await API.get('/filters/glasses');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
