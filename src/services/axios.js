import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://drink-master-4fm6.onrender.com/api',
  baseURL: 'http://localhost:3000/api',
});

export const setAuthToken = (token) => {
  console.log('token', token);
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
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/auth/refresh', { refreshToken });
        console.log('1');
        setAuthToken(data.accessToken);
        console.log('2');
        localStorage.setItem('refreshToken', data.refreshToken);
        console.log('3');
        console.log('4', instance.defaults.headers.common.authorization);
        console.log(instance(error));
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
