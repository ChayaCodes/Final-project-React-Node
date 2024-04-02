// authSlice.js
import apiSlice from '../apiSlice';

const authApiSlice = apiSlice.injectEndpoints({

  endpoints: (build) => ({
    register: build.mutation({
      query: (registerUser) => ({
        url: 'api/auth/register',
        method: 'POST',
        body: registerUser,
      }),
    }),
    login: build.mutation({
      query: (loginUser) => ({
        url: 'api/auth/login',
        method: 'POST',
        body: loginUser,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApiSlice;
