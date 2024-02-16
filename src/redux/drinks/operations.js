import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000';

export const getDrinks = createAsyncThunk(
  'drinks/getDrinks',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get('/api/drinks');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
