import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.token = null;
        },

    },
});

export default authSlice.reducer;
export const { setToken, logout } = authSlice.actions;