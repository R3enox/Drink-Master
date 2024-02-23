

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import instance from '../../services/axios';
const baseURL = instance.defaults.baseURL;

export const drinkIdApi = createApi({
  reducerPath: 'cocktail',
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
  tagTypes: ['cocktail'],
  endpoints: (builder) => ({
    getCocktailForId: builder.query({
      query: (id) => `/drink/${id}`,
      providesTags: ['cocktail']
    }),
  }),
})


export  const { useGetCocktailForIdQuery } = drinkIdApi
