import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import instance from '../../services/axios';
const baseURL = instance.defaults.baseURL;

export const favoriteApi = createApi({
  reducerPath: 'favorites',
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
  tagTypes: ['favofitesDrinks'],
  endpoints: (builder) => ({
    fechFavorites: builder.query({
      query: () => {
        return {
          url: 'drinks/favorite',
          method: 'GET',
        };
      },
      providesTags: ['favofitesDrinks'],
    }),
    addFavorites: builder.mutation({
      query: (id) => ({
        url: `drinks/${id}/favorite/add`,
        method: 'POST',
      }),
      invalidatesTags: ['favofitesDrinks'],
    }),
    removeFavorites: builder.mutation({
      query: (id) => ({
        url: `drinks/${id}/favorite/remove`,
        method: 'delete',
      }),
      invalidatesTags: ['favofitesDrinks'],
    }),
  }),
});

export const {
  useFechFavoritesQuery,
  useRemoveFavoritesMutation,
  useAddFavoritesMutation,
} = favoriteApi;
