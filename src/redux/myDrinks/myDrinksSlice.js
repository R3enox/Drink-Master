import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import instance from '../../services/axios';

const baseURL = instance.defaults.baseURL;

export const myDrinksApi = createApi({
  reducerPath: 'myDrinksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().auth.accessToken;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
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
