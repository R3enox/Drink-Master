import { initialState } from './authInitialState';
import {
  handleFulfilledRefreshUser,
  handleFulfilledSignIn,
  handleFulfilledSignUp,
  handlePending,
  handlePendingRefreshUser,
  handleRejected,
  handleRejectedRefreshUser,
} from './authFunctionsReducer';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { refreshUserThunk, signInThunk, signUpThunk } from './authOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) => isAnyOf(signUpThunk[type], signInThunk[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
      .addCase(signInThunk.fulfilled, handleFulfilledSignIn)
      .addCase(refreshUserThunk.pending, handlePendingRefreshUser)
      .addCase(refreshUserThunk.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUserThunk.rejected, handleRejectedRefreshUser)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
