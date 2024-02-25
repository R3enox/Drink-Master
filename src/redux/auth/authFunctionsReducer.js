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
};

export const handleRejectedCurrentUser = (state) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.user = initialState.user;
};

export const handlePendingUpdateUser = (state) => {
  state.isLoading = true;
  state.error = null;
  state.isRefreshing = true;
};

export const handleFulfilledUpdateUser = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.user.name = payload.user.name;
  state.user.avatarURL = payload.user.avatarURL;
};

export const handleRejectedUpdateUser = (state, payload) => {
  state.isLoading = false;
  state.error = payload;
  state.isRefreshing = false;
  state.isLoggedIn = false;
};
