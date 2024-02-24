import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API, { setAuthToken } from 'services/axios';
import { clearAuthToken } from '../../services/axios';

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

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const accessToken = state.auth.accessToken;

      setAuthToken(accessToken);
      const { data } = await API.post('/auth/refresh');
      console.log('data', data);
      console.log('1');
      return data;
    } catch (error) {
      console.log('2');
      toast.error('Error refresh');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrent = async (accessToken) => {
  try {
    setAuthToken(accessToken);
    const { data } = await API.get('/users/current');
    return data;
  } catch (error) {
    clearAuthToken();
    throw error;
  }
};

// export const refreshUserThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const persistedToken = thunkAPI.getState().auth.accessToken;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthToken(persistedToken);
//       const res = await API.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
