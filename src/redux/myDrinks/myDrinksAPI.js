import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';

export const getMyDrinks = createAsyncThunk(
  'myDrinks/fetchMyDrinks',
  async (_, thunkApi) => {
    try {
      const { data } = await API.get('/drinks/own');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteMyDrink = createAsyncThunk(
  'myDrinks/deleteMyDrink',
  async (id, thunkApi) => {
    try {
      await API.delete(`/drinks/own/remove/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
