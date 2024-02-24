import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const popularApi = createApi({
  reducerPath: 'popularApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://drink-master-4fm6.onrender.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['popular'],
  endpoints: (build) => ({
    fetchPopularDrinks: build.query({
      query: (limit) => ({
        url: `/drinks/popular?limit=${limit}`,
        method: 'get',
      }),
      providesTags: ['popular'],
    }),
    invalidatesTags: ['popular'],
  }),
});

export const { fetchPopularDrinks } = popularApi;
