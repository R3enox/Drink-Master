import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { initialState } from './authInitialState';
import {
  handleFulfilledRefreshUser,
  handleFulfilledSignIn,
  handleFulfilledSignUp,
  handleFulfilledUpdateUser,
  handlePending,
  handlePendingRefreshUser,
  handlePendingUpdateUser,
  handleRejected,
  handleRejectedRefreshUser,
  handleRejectedUpdateUser,
} from './authFunctionsReducer';


import { refreshUserThunk, signInThunk, signOutThunk, signUpThunk, updateUserThunk } from './authOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) =>
  isAnyOf(signUpThunk[type], signInThunk[type], signOutThunk[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
      .addCase(signInThunk.fulfilled, handleFulfilledSignIn)
      .addCase(signOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(updateUserThunk.pending, handlePendingUpdateUser)
      .addCase(updateUserThunk.fulfilled, handleFulfilledUpdateUser)
      .addCase(updateUserThunk.rejected, handleRejectedUpdateUser)
      .addCase(refreshUserThunk.pending, handlePendingRefreshUser)
      .addCase(refreshUserThunk.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUserThunk.rejected, handleRejectedRefreshUser)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);
