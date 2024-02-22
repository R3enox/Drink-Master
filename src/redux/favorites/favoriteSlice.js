import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2Y0MWU0Y2NlZDk2Mzc1ZTZjNGZjMCIsImlhdCI6MTcwODUwNzE5NSwiZXhwIjoxNzA4NTUwMzk1fQ.rE5HxY495YqTFmNpARWmt0qC8QzVULRDvC9wSQ2WSaA';

export const favoriteApi = createApi({
  reducerPath: 'favorites',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api/',
    baseUrl: 'https://drink-master-4fm6.onrender.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'http://localhost:3000/api/',
  // }),
  tagTypes: ['favofitesDrinks'],
  // tagTypes: ['BTN ADD'],
  // tagTypes: ['BTN remove'],
  endpoints: (builder) => ({
    fechFavorites: builder.query({
      query: () => {
        return {
          url: 'drinks/favorite',
          method: 'GET',
          // headers: { Authorization: `Bearer ${TOKEN}` },
        };
      },
      providesTags: ['favofitesDrinks'],
    }),
    addFavorites: builder.mutation({
      query: (id) => ({
        url: `drinks/${id}/favorite/add`,
        method: 'POST',
        // headers: { Authorization: `Bearer ${TOKEN}` },
      }),
      invalidatesTags: ['favofitesDrinks'],
      // providesTags: ['BTN ADD'],
    }),
    removeFavorites: builder.mutation({
      query: (id) => ({
        url: `drinks/${id}/favorite/remove`,
        method: 'delete',
        // headers: { Authorization: `Bearer ${TOKEN}` },
      }),
      invalidatesTags: ['favofitesDrinks'],
      // invalidatesTags: ['BTN ADD'],
    }),
  }),
});

export const {
  useFechFavoritesQuery,
  useRemoveFavoritesMutation,
  useAddFavoritesMutation,
} = favoriteApi;
