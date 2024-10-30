import apiSlice from '../../app/apiSlice';
import { logout, setToken } from './authSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: 'api/auth/login',
        method: 'POST',
        body: userData,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken({ token: data.token, user: data.user }));
          localStorage.setItem('token', data.token);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: 'api/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: 'api/auth/refresh',
        method: 'GET',
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'api/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
            localStorage.removeItem('token');

          }, 1000);
        } catch (error) {
          console.error(error);
        }
      },
    }),

  }),
});

export const {
  useLoginMutation, useRegisterMutation, useRefreshMutation, useLogoutMutation,
} = authApiSlice;

export default authApiSlice;
