import { createSlice } from '@reduxjs/toolkit';
import useAuth from '../../hooks/useAuth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { setToken, logout, selectToken, selectUser } = authSlice.actions;