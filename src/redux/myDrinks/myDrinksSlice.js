import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import instance from '../../services/axios';
const baseURL = instance.defaults.baseURL;

export const myDrinksApi = createApi({
  reducerPath: 'myDrinksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`,
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
      query: ({ page, per_page }) => {
        const queryParams = new URLSearchParams({ page, per_page });
        return { url: `/drinks/own?${queryParams}`, method: 'get' };
      },
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
