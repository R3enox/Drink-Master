import axios from 'axios';
import { store } from '../redux/store';
import { setTokens } from '../redux/auth/authReducer';

const instance = axios.create({
  baseURL: 'https://drink-master-4fm6.onrender.com/api',
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = store.getState().auth.refreshToken;
      try {
        const { data } = await instance.post('/auth/refresh', { refreshToken });
        setAuthToken(data.accessToken);
        store.dispatch(setTokens(data));
        error.config.headers.authorization = `Bearer ${data.accessToken}`;
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const clearAuthToken = () => {
  instance.defaults.headers.common.authorization = '';
};

export default instance;
