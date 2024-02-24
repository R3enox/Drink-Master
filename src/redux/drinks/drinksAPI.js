import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import instance from '../../services/axios';
const baseURL = instance.defaults.baseURL;

export const drinksApi = createApi({
  reducerPath: 'drinks',
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
  tagTypes: ['drinks'],

  endpoints: (builder) => ({
    getDrinks: builder.query({
      query: (per_category) => `/drinks?per_category=${per_category}`,
      providesTags: ['drinks'],
    }),
    filterDrinks: builder.query({
      query: ({ page, per_page, search, category, ingredient }) => {
        const queryParams = new URLSearchParams({ page, per_page });
        if (search) queryParams.append('search', search);
        if (category) queryParams.append('category', category);
        if (ingredient) queryParams.append('ingredient', ingredient);

        return `/drinks/search?${queryParams}`;
      },
      providesTags: ['drinks'],
    }),
  }),
});

export const { useGetDrinksQuery, useFilterDrinksQuery } = drinksApi;

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import API from '../../services/axios';

// export const getDrinks = createAsyncThunk(
//   'drinks/getDrinks',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await API.get('/drinks');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const filterDrinks = createAsyncThunk(
//   'drinks/filterDrinks',
//   async (filters, thunkAPI) => {
//     try {
//       const queryParams = new URLSearchParams();
//       if (filters.category) {
//         queryParams.append('category', filters.category);
//       }
//       if (filters.ingredient) {
//         queryParams.append('ingredient', filters.ingredient);
//       }
//       if (filters.keyName) {
//         queryParams.append('keyName', filters.keyName);
//       }
//       const queryString = queryParams.toString();
//       const { data } = await API.get(`/drinks/search?${queryString}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
