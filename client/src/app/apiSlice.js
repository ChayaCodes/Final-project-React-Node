import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken, logout } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:7001',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = getState().auth;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 403) {

    const refreshResult = await baseQuery({ url: 'api/auth/refresh' }, api, extraOptions);
    if (refreshResult?.data?.token) {
      api.dispatch(setToken({ token: refreshResult.data.token, user: refreshResult.data.user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (result.error?.status === 403) {
        api.dispatch(logout());
        refreshResult.error.data.message = 'your login expired, please login again';
      }
      return refreshResult;
    }
  }
  return result;
};

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export default apiSlice;
