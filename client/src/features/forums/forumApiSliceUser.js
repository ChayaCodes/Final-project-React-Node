import apiSlice from '../../app/apiSlice';

const forumsApiSliceUser = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getForums: build.query({
      query: () => ({
        url: 'api/forums',
        method: 'GET',
      }),
      providesTags: ['Forums'],
    }),
    getForum: build.query({
      query: (id) => ({
        url: `api/forums/${id}`,
        method: 'GET',
      }),
      providesTags: ['Forums'],
    }),
    getThreadById: build.query({
      query: ({forumId, threadId, page}) => ({
        url: page ? `api/forums/${forumId}/${threadId}?page=${page}` : `api/forums/${forumId}/${threadId}`,
        method: 'GET',
      }),
      providesTags: ['Forums'],
    }),
    addForum: build.mutation({
      query: (forum) => ({
        url: 'api/forums',
        method: 'POST',
        body: forum,
      }),
      invalidatesTags: ['Forums'],
    }),
    updateForum: build.mutation({
      query: (forum) => ({
        url: `api/forums/${forum._id}`,
        method: 'PUT',
        body: forum,
      }),
      invalidatesTags: ['Forums'],
    }),
    deleteForum: build.mutation({
      query: (id) => ({
        url: `api/forums/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Forums'],
    }),
    createPost: build.mutation({
      query: (post) => ({
        url: `api/forums/${post.threadId}/posts`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Forums'],
    }),
  }),
});

export const {
  useGetForumsQuery, useGetForumQuery, useGetThreadByIdQuery, useAddForumMutation, useUpdateForumMutation, useDeleteForumMutation,
  useCreatePostMutation,
} = forumsApiSliceUser;
