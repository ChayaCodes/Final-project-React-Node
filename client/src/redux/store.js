import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';
import authSliceReducer from './authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
export default store;