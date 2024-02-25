import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API, { setAuthToken } from 'services/axios';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post('/auth/signup', formData);
      setAuthToken(data.accessToken);
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
      setAuthToken(data.accessToken);
      return data;
    } catch (error) {
      toast.error(`You entered an incorrect login or password`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  'auth/signout',
  async (_, thunkApi) => {
    try {
      const { data } = await API.post('/auth/signout');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const fetchCurrentThunk = createAsyncThunk(
  'auth/current',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const accessToken = state.auth.accessToken;
      setAuthToken(accessToken);
      const { data } = await API.get('/users/current');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);

 export const updateUserThunk = createAsyncThunk(
   'user/update',
   async (formData, thunkApi) => {
     try {
       const { data } = await API.patch('/users/update', formData);
       return data;
     } catch (error) {
       return thunkApi.rejectWithValue(error.message);
     }
   }
 );


