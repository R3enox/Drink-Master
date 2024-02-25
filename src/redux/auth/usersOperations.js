import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryOptions } from '../../services/fetchBaseQuery';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery(fetchBaseQueryOptions),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    uploadUser: builder.mutation({
      query: (value) => ({
        url: `api/users/update`,
        method: 'PATCH',
        body: value,
      }),
      providesTags: ['users'],
    }),
  }),
});

export const { useUploadUserMutation } = userApi;
