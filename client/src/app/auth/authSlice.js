import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    isUserLoggedIn: !!localStorage.getItem('token'),
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isUserLoggedIn = true;
      localStorage.setItem('token', token);
    },
    removeToken: (state) => {
      state.token = null;
      state.user = null;
      state.isUserLoggedIn = false;
      localStorage.removeItem('token');
    },

  },
});

export default authSlice.reducer;
export const { setToken, removeToken } = authSlice.actions;
