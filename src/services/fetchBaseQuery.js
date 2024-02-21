export const fetchBaseQueryOptions = {
  // baseUrl: 'https://drink-master-4fm6.onrender.com',
  baseUrl: 'http://localhost:3000',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
  },
};
