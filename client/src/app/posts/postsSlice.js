import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'Postss',
  initialState: {
    Posts: [],
  },
  reducers: {

  },
});

export default postsSlice.reducer;
export const { } = postsSlice.actions;
