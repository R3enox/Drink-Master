import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { initialState } from './authInitialState';
import {
  handleFulfilledCurrentUser,
  handleFulfilledSignIn,
  handleFulfilledSignUp,
  handleFulfilledUpdateUser,
  handlePending,
<<<<<<< HEAD
  handlePendingRefreshUser,
  handlePendingUpdateUser,
  handleRejected,
  handleRejectedRefreshUser,
  handleRejectedUpdateUser,
} from './authFunctionsReducer';


import { refreshUserThunk, signInThunk, signOutThunk, signUpThunk, updateUserThunk } from './authOperations';
=======
  handlePendingCurrentUser,
  handleRejected,
  handleRejectedCurrentUser,
} from './authFunctionsReducer';

import {
  fetchCurrentThunk,
  signInThunk,
  signOutThunk,
  signUpThunk,
} from './authOperations';
>>>>>>> main

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) =>
  isAnyOf(signUpThunk[type], signInThunk[type], signOutThunk[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
      .addCase(signInThunk.fulfilled, handleFulfilledSignIn)
      .addCase(signOutThunk.fulfilled, () => {
        return initialState;
      })
<<<<<<< HEAD
      .addCase(updateUserThunk.pending, handlePendingUpdateUser)
      .addCase(updateUserThunk.fulfilled, handleFulfilledUpdateUser)
      .addCase(updateUserThunk.rejected, handleRejectedUpdateUser)
      .addCase(refreshUserThunk.pending, handlePendingRefreshUser)
      .addCase(refreshUserThunk.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUserThunk.rejected, handleRejectedRefreshUser)
=======
      .addCase(fetchCurrentThunk.pending, handlePendingCurrentUser)
      .addCase(fetchCurrentThunk.fulfilled, handleFulfilledCurrentUser)
      .addCase(fetchCurrentThunk.rejected, handleRejectedCurrentUser)
>>>>>>> main
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const { setTokens } = authSlice.actions;
export const authReducer = persistReducer(authConfig, authSlice.reducer);
