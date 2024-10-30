import apiSlice from '../apiSlice';

const contectApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({ 
    createContect: build.mutation({
      query: (newPost) => ({
        url: 'api/contect',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useCreateContectMutation } = contectApiSlice;