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
  state.refreshToken = payload.refreshToken;
  state.user = payload.user;
  state.error = null;
};

export const handleFulfilledSignIn = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.user = payload.user;
  state.error = null;
};

export const handlePendingCurrentUser = (state) => {
  state.isRefreshing = true;
  state.error = null;
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.user = payload.user;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
};

export const handleRejectedCurrentUser = (state, { payload }) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.user = initialState.user;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
};
