import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';
import authSliceReducer from '../store/auth/authSlice';
import userSliceReducer from '../store/user/userSlice';
import forumsSliceReducer from '../store/forums/forumsSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        user: userSliceReducer,
        forums: forumsSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
export default store;