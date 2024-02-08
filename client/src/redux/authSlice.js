import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        isUserLoggedIn: localStorage.getItem('token') ? true : false,
        userName: ""
    },
    reducers: {
        setToken: (state, action) => {
            const token = action.payload.token;
            state.token = token;
            state.isUserLoggedIn = true;
            localStorage.setItem('token', token);
            console.log("token", token);
        },
        removeToken: (state) => {
            state.token = null;
            state.isUserLoggedIn = false;
            localStorage.removeItem('token');
        },
    },
});

export default authSlice.reducer;
export const { setToken, removeToken } = authSlice.actions;