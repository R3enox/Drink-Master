import { initialState } from './authInitialState';
import {
  handleFulfilledSignIn,
  handleFulfilledSignUp,
  handlePending,
  handleRejected,
} from './authFunctionsReducer';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signInThunk, signUpThunk } from './authOperations';

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
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
