import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
    },
    reducers: {
        setUser: (state, action) => {
            const user = action.payload;
            state.userName = user.userName;
            state.firstName = user.firstName;
            state.lastName = user.lastName;
            state.email = user.email;
            state.role = user.role;
        },
        removeUser: (state) => {
            state.userName = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.role = "";
        },
    },
});

export default userSlice.reducer;
export const {  } = userSlice.actions;