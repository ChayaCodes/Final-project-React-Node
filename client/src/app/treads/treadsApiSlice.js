// authSlice.js
import apiSlice from '../apiSlice';

const threadApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getThreads: build.query({
      query: (forumId) => ({
        url: `api/forums/${forumId}/threads`,
        method: 'GET',
      }),
    }),
    createThread: build.mutation({
      query: (data) => ({
        url: 'api/threads',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetThreadsQuery, useCreateThreadMutation } = threadApiSlice;
