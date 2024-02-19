import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { Notify } from 'notiflix';
export const instance = axios.create({
  baseURL: `https://drink-master-4fm6.onrender.com`,
});

export const fetchCocktailsById = createAsyncThunk(
  'cocktail/getCocktailById',
  async (id, thunkApi) => {
    try {

      const { data } = await instance.get(`/api/drink/${id}`);
      return data;

    } catch (err) {

    //   Notify.failure('Not connected to the server');
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
  