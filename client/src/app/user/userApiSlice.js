// authSlice.js
import apiSlice from '../apiSlice';

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: 'api/me',
        method: 'GET',
      }),
    }),
    updateUser: build.mutation({
      query: (updateUser) => ({
        url: 'api/me',
        method: 'PUT',
        body: updateUser,

      }),
    }),
    deleteUser: build.mutation({
      query: () => ({
        url: 'api/me',
        method: 'DELETE',

      }),
    }),
  }),

});

export const { useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } = userApiSlice;
