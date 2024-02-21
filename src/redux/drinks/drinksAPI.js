import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { selectAuthToken } from '../auth/authSelectors';
import instance from '../../services/axios';
const baseURL = instance.defaults.baseURL;
// const token = selectAuthToken;
const tokenAxios = instance.defaults.headers.common['Authorization'];
// setAuthToken(tokenAxios);

export const drinksApi = createApi({
  reducerPath: 'drinks',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`,
    token: `${tokenAxios}`,
  }),
  tagTypes: ['drinks'],

  // prepareHeaders: (headers, { getState }) => {
  //   console.log('prepareHeaders is called');

  //   const token = selectAuthToken(getState()).token;
  //   if (token) {
  //     headers.set('Authorization', `${token}`);
  //   }
  //   return headers;
  // },

  endpoints: (builder) => ({
    getDrinks: builder.query({
      query: () => `/drinks`,
      providesTags: ['drinks'],
    }),
    filterDrinks: builder.query({
      query: (filters) => {
        const queryParams = new URLSearchParams();
        if (filters.category) {
          queryParams.append('category', filters.category);
        }
        if (filters.ingredient) {
          queryParams.append('ingredient', filters.ingredient);
        }
        if (filters.keyName) {
          queryParams.append('keyName', filters.keyName);
        }
        const queryString = queryParams.toString();
        return `/drinks/search?${queryString}`;
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
