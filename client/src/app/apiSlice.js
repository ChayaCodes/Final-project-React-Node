import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken } from '../features/auth/authSlice';
import { logout } from '../features/auth/authSlice';


const baseQuery =  fetchBaseQuery({


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
});

const baseQueryWithReauth = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions);
    if (result.error?.status === 403) {
        console.log("sending refresh token");
        const refreshResult = baseQuery({ url: 'auth/refresh' }, api, extraOptions);
        if(refreshResult?.data?.token){
            console.log("refresh token success");
            console.log(refreshResult.data.token);
            api.dispatch(setToken({token: refreshResult.data.token, user: refreshResult.data.user}));
            result = await baseQuery(args, api, extraOptions);
        }else{
            if (result.error?.status === 403) {
                console.log("refresh token failed");
                api.dispatch(logout());
                refreshResult.error.data.message = "your login expired, please login again";
            }
            return refreshResult;
        }


    }
    return result;

}

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});

export default apiSlice;