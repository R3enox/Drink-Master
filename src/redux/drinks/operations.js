import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDIyZWVmOTBiODE5NTBhZDU3Nzc5NyIsImlhdCI6MTcwODMzMzA1MiwiZXhwIjoxNzA4Mzc2MjUyfQ.JxGtsMswyrxncpNTBRmEgLXbMOUUtjigxMFQ3OuwcgU';
axios.defaults.baseURL = 'https://drink-master-4fm6.onrender.com';
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
