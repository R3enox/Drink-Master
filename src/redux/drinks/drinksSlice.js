// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const drinksApi = createApi({
//   reducerPath: 'drinks',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3000/api',
//   }),
//   endpoints: (builder) => ({
//     getDrinks: builder.query({
//       query: () => `/drinks`,
//     }),
//     filterDrinks: builder.query({
//       query: (filters) => {
//         const queryParams = new URLSearchParams();
//         if (filters.category) {
//           queryParams.append('category', filters.category);
//         }
//         if (filters.ingredient) {
//           queryParams.append('ingredient', filters.ingredient);
//         }
//         if (filters.keyName) {
//           queryParams.append('keyName', filters.keyName);
//         }
//         const queryString = queryParams.toString();
//         return `/drinks/search?${queryString}`;
//       },
//     }),
//   }),
// });

// export const { useGetDrinksQuery, useFilterDrinksQuery } = drinksApi;

import { createSlice } from '@reduxjs/toolkit';
import { filterDrinks, getDrinks } from './operations';
const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    drinks: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = action.payload.data;
      })
      .addCase(filterDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = action.payload;
      })

      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
        }
      );
  },
});

export const drinksReducer = drinksSlice.reducer;
