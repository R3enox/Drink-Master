import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../../services/axios';

export const fetchCocktailsById = createAsyncThunk(
  'cocktail/getCocktailById',
  async (id, thunkApi) => {
    try {
      const { data } = await API.get(`/drinks/${id}`);
      return data;
    } catch (err) {
      //   Notify.failure('Not connected to the server');
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
