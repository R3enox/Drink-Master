import { initialState } from './authInitialState';
import {
  handleFulfilledSignIn,
  handleFulfilledSignUp,
  handlePending,
  handleRejected,
} from './authFunctionsReducer';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signInThunk, signOutThunk, signUpThunk } from './authOperations';

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
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
