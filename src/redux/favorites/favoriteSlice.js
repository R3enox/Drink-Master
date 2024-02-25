import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import instance from '../../services/axios';
const baseURL = instance.defaults.baseURL;

export const favoriteApi = createApi({
  reducerPath: 'favorites',
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
  tagTypes: ['favofitesDrinks'],
  endpoints: (builder) => ({
    fechFavorites: builder.query({
      query: ({ page, per_page }) => {
        const queryParams = new URLSearchParams({ page, per_page });
        return {
          url: `drinks/favorite?${queryParams}`,
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
