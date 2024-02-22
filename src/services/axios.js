import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://drink-master-4fm6.onrender.com/api',
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export default instance;
