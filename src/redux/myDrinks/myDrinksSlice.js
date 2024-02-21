import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myDrinksApi = createApi({
  reducerPath: 'myDrinksApi',
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

  tagTypes: ['myDrinks'],
  endpoints: (build) => ({
    fetchMyDrinks: build.query({
      query: () => ({ url: '/drinks/own', method: 'get' }),
      providesTags: ['myDrinks'],
    }),
    deleteMyDrink: build.mutation({
      query: (id) => ({
        url: `/drinks/own/remove/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['myDrinks'],
    }),
  }),
});

export const { useFetchMyDrinksQuery, useDeleteMyDrinkMutation } = myDrinksApi;
