import apiSlice from '../../app/apiSlice';

const threadsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query({
      query: () => ({
        url: 'api/me',
        method: 'GET',
      }),
    }),
    editMe: build.mutation({
      query: (user) => ({
        url: 'api/me',
        method: 'PUT',
        body: user,
      }),
    }),
  }),
});

export const {
    useGetMeQuery, useEditMeMutation,
} = threadsApiSlice;
