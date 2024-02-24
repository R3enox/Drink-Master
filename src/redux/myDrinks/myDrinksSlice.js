// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import instance from '../../services/axios';

// const baseURL = instance.defaults.baseURL;

// export const myDrinksApi = createApi({
//   reducerPath: 'myDrinksApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${baseURL}`,
//     prepareHeaders: (headers, { getState }) => {
//       const accessToken = getState().auth.accessToken;
//       if (accessToken) {
//         headers.set('authorization', `Bearer ${accessToken}`);
//       }
//       return headers;
//     },
//   }),

//   tagTypes: ['myDrinks'],
//   endpoints: (build) => ({
//     fetchMyDrinks: build.query({
//       query: () => ({ url: '/drinks/own', method: 'get' }),
//       providesTags: ['myDrinks'],
//     }),
//     deleteMyDrink: build.mutation({
//       query: (id) => ({
//         url: `/drinks/own/remove/${id}`,
//         method: 'delete',
//       }),
//       invalidatesTags: ['myDrinks'],
//     }),
//   }),
// });

// export const { useFetchMyDrinksQuery, useDeleteMyDrinkMutation } = myDrinksApi;

import { createSlice } from '@reduxjs/toolkit';
import { deleteMyDrink, getMyDrinks } from './myDrinksAPI';

export const myDrinksSlice = createSlice({
  name: 'myDrinks',
  initialState: {
    myDrinks: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyDrinks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myDrinks = action.payload;
      })
      .addCase(getMyDrinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMyDrink.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteMyDrink.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.myDrinks = state.myDrinks.filter(({ _id: id }) => id !== payload);
      })
      .addCase(deleteMyDrink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const myDrinksReducer = myDrinksSlice.reducer;
