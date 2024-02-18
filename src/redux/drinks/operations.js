import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZkMzk4NzQ2YWQ5N2NjNjlkODMwNSIsImlhdCI6MTcwODEzNDgzOSwiZXhwIjoxNzA4MTM4NDM5fQ.cdq2BwMmO9FybxT3b8zUb3wocIkXL-D7lkYMAnw529g';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

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
      console.log(queryString);
      const { data } = await axios.get(`api/drinks/search?${queryString}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);