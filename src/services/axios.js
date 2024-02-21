import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const setAuthToken = (token) => {
  console.log(token);
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export const clearAuthToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export default instance;
