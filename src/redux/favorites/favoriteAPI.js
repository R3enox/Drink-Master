import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async ({ page, per_page }, thunkApi) => {
    try {
      const queryParams = new URLSearchParams({ page, per_page });
      const { data } = await API.get(`drinks/favorite?${queryParams}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (id, thunkApi) => {
    try {
      const { data } = await API.post(`drinks/${id}/favorite/add`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (id, thunkApi) => {
    try {
      await API.delete(`drinks/${id}/favorite/remove`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
