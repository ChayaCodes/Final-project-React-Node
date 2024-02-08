import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7001',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            console.log("prepareHeaders");
            const token = getState().auth.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
});

export default apiSlice;