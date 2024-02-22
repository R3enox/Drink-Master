import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoriteApi = createApi({
  reducerPath: 'favorites',
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
