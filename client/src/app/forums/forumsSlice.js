import { createSlice } from '@reduxjs/toolkit';

const forumsSlice = createSlice({
  name: 'forums',
  initialState: {
    forums: [],
  },
  reducers: {

  },
});

export default forumsSlice.reducer;
export const { } = forumsSlice.actions;
