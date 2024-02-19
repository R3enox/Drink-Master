import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import API, { setAuthToken } from 'services/axios';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post('/auth/signup', formData);
      setAuthToken(data.token);
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
      const { data } = await API.post('/auth/signin', formData);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      toast.error(`You entered an incorrect login or password`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
