export const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    dateOfBirth: null,
    avatarURL: null,
  },
  isUpdateUserLoading: false,
  isUpdateUserError: null,
  isSubscribeUserLoading: false,
  isSubscribeUserError: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  accessToken: null,
  refreshToken: null,
};
