import apiSlice from '../../app/apiSlice';

const forumsApiSliceUser = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getForums: build.query({
      query: () => 'api/forums',
      providesTags: ['Forum'],
    }),
    getForum: build.query({
      query: (forumId) => `api/forums/${forumId}`,
      providesTags: { type: 'Forum', id: 'forumId' },
    }),
    getThread: build.query({
      query: (payload) => `api/forums/${payload.forumId}/${payload.threadId}`,
      providesTags: { type: 'Thread', id: 'threadId' },
    }),
    createPost: build.mutation({
      query: (post) => ({
        url: `api/forums/${post.forumId}/${post.threadId}`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [
        { type: 'Thread', id: 'post.threadId' },
        { type: 'Forum', id: 'post.forumId' },
      ],
    }),
    updatePost: build.mutation({
      query: (post) => ({
        url: `api/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: [
        { type: 'Thread', id: 'post.threadId' },
      ],
    }),
    deletePost: build.mutation({
      query: (postId) => ({
        url: `api/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Thread', id: 'post.threadId' },
        { type: 'Forum', id: 'post.forumId' },
      ],
    }),
    createThread: build.mutation({
      query: (thread) => ({
        url: `api/forums/${thread.forumId}/threads`,
        method: 'POST',
        body: thread,
      }),
      invalidatesTags: [
        { type: 'Forum', id: 'thread.forumId' },
      ],
    }),
    deleteThread: build.mutation({
      query: (threadId) => ({
        url: `api/threads/${threadId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Forum', id: 'thread.forumId' },
      ],
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
