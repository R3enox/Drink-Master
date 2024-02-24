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
  state.token = payload.token;
  state.user = payload.user;
  state.error = null;
};

export const handleFulfilledSignIn = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.token = payload.token;
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
};

export const handleRejectedRefreshUser = (state) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.user = initialState.user;
  state.token = initialState.token;
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
