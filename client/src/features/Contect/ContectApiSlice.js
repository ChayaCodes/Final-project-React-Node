import apiSlice from '../../app/apiSlice';

const contectApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({ 
    createContect: build.mutation({
      query: (newPost) => ({
        url: 'api/contect',
        method: 'POST',
        body: newPost,
      }),

    }),
    getAllContects: build.query({
      query: () => ({
        url: 'api/admin/contects',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateContectMutation, useGetAllContectsQuery } = contectApiSlice;