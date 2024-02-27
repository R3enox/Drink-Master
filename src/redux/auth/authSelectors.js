export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectAuthUser = (state) => state.auth.user;
export const selectAuthIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthIsRefreshing = (state) => state.auth.isRefreshing;
export const selectAuthError = (state) => state.auth.error;
export const selectAvatar = (state) => state.auth.user.avatarURL;
export const selectDateOfBirth = (state) => state.auth.user.dateOfBirth;
export const selectAuthAccessToken = (state) => state.auth.accessToken;
