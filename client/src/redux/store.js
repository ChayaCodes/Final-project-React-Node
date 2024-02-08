import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';
import authSliceReducer from './authSlice';
import userSliceReducer from './userSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        user: userSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
export default store;