import apiSlice from '../../app/apiSlice';

const threadsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getThreads: build.query({
      query: () => ({
        url: 'api/threads',
        method: 'GET',
      }),
      providesTags: ['Threads'],
    }),
    getForumThreads: build.query({
      query: (forumId) => ({
        url: `api/forums/${forumId}/threads`,
        method: 'GET',
      }),
      providesTags: ['Threads'],
    }),
    addThread: build.mutation({
      query: (Thread) => ({
        url: 'api/threads',
        method: 'POST',
        body: Thread,
      }),
      invalidatesTags: ['Threads'],
    }),
    updateThread: build.mutation({
      query: (thread) => ({
        url: `api/threads/${thread._id}`,
        method: 'PUT',
        body: thread,
      }),
      invalidatesTags: ['Threads'],
    }),
    deleteThread: build.mutation({
      query: (id) => ({
        url: `api/threads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Threads'],
    }),
  }),
});

export const {
  useGetThreadsQuery, useGetForumThreadsQuery, useAddThreadMutation, useUpdateThreadMutation, useDeleteThreadMutation,
} = threadsApiSlice;
