import axios from 'axios';
import { store } from '../redux/store';
import { setTokens } from '../redux/auth/authReducer';

const instance = axios.create({
  // baseURL: 'https://drink-master-4fm6.onrender.com/api',
  baseURL: 'http://localhost:3000/api',
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

// instance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem('accessToken');
//   config.headers.common.Authorization = `Bearer ${accessToken}`;
//   return config;
// });

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        console.log('1111');
        const { data } = await instance.post('/auth/refresh');
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
