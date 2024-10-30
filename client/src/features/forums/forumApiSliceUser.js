import apiSlice from '../../app/apiSlice';

const forumsApiSliceUser = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getForums: build.query({
      query: () => 'api/forums',
      providesTags: ['Forum'],
    }),
    getForum: build.query({
      query: (forumId) => `api/forums/${forumId}`,
      providesTags: ['Thread', 'Forum']
    }),
    getThread: build.query({
      query: (payload) => `api/forums/${payload.forumId}/${payload.threadId}?page=${payload.page}`,
      providesTags: ['Thread'],
    }),
    createPost: build.mutation({
      query: (post) => ({
        url: `api/forums/${post.threadId}/posts`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Thread', 'Forum'],
    }),
    updatePost: build.mutation({
      query: (post) => ({
        url: `api/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Thread', 'Forum'],
    }),
    deletePost: build.mutation({
      query: (postId) => ({
        url: `api/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Thread', 'Forum'],
    }),
    createThread: build.mutation({
      query: (thread) => ({
        url: `api/forums/${thread.forumId}/threads`,
        method: 'POST',
        body: thread,
      }),
      invalidatesTags: [ 'Forum' ],
    }),
    deleteThread: build.mutation({
      query: (threadId) => ({
        url: `api/threads/${threadId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Thread', 'Forum'],
    }),
  }),
});

export const {
  useGetForumsQuery,
  useGetForumQuery,
  useGetThreadQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useCreateThreadMutation,
  useDeleteThreadMutation,
} = forumsApiSliceUser;
