// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectAuthToken } from '../auth/authSelectors';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-4fm6.onrender.com/api';

export const getDrinks = createAsyncThunk(
  'drinks/getDrinks',
  async (_, thunkAPI) => {
    const token = selectAuthToken(thunkAPI.getState());

    try {
      const data = await axios.get('/drinks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterDrinks = createAsyncThunk(
  'drinks/filterDrinks',
  async (filters, thunkAPI) => {
    const token = selectAuthToken(thunkAPI.getState());

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
      const { data } = await axios.get(`/drinks/search?${queryString}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
