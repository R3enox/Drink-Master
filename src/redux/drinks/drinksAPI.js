import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import selectAuthToken from '../auth/authSelectors';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZkMzk4NzQ2YWQ5N2NjNjlkODMwNSIsImlhdCI6MTcwODI3ODEyNCwiZXhwIjoxNzA4MjgxNzI0fQ.xbUcys-3vVJysgYpbE-diIMBCbl2QnLFYtufMbvQiII';
axios.defaults.baseURL = 'https://drink-master-4fm6.onrender.com';
axios.defaults.headers.common.Authorization = `Bearer ${selectAuthToken}`;

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
      const { data } = await axios.get(`/api/drinks/search?${queryString}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
