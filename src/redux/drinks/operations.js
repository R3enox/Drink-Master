// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import API from 'services/axios.js';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDEwYTNlNTc3MTgwNTk2NDE2YmZiNSIsImlhdCI6MTcwODI4NTg1MCwiZXhwIjoxNzA4MzI5MDUwfQ.vXIllnUOdaUNwUDRlQGZ7faCL__KYEVNgl4WTNeVFOQ';
// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

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
      console.log(queryString);
      const { data } = await API.get(`/drinks/search?${queryString}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
