import { initialState } from './authInitialState';

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledSignUp = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.accessToken = payload.accessToken;
  state.user = payload.user;
  state.error = null;
};

export const handleFulfilledSignIn = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.accessToken = payload.accessToken;
  state.user = payload.user;
  state.error = null;
};

export const handlePendingRefreshUser = (state) => {
  state.isRefreshing = true;
};

export const handleFulfilledRefreshUser = (state, { payload }) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.user = payload.user;
  state.accessToken = payload.accessToken;
};

export const handleRejectedRefreshUser = (state) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.user = initialState.user;
  state.accessToken = initialState.accessToken;
};
