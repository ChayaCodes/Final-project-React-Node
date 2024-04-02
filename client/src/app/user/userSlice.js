import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  },
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.userName = user.userName;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
      state.email = user.email;
      state.role = user.role;
    },
    removeUser: (state) => {
      state.userName = '';
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.role = '';
    },

  },
});

export const selectAlertsCount = (state) => state.user.alerts.length;
export const selectUserName = (state) => state.user.userName;
export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
