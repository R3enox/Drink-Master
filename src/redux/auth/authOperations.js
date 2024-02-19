import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drink-master-4fm6.onrender.com/api',
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signup', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(`We're sorry, something went wrong`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signin', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(`You entered an incorrect login or password`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
