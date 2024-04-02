import apiSlice from '../apiSlice';

const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: (postsId) => ({
        url: `api/threads/${postsId}/posts`,
        method: 'GET',
      }),

    }),
    createPost: build.mutation({
      query: (newPost) => ({
        url: 'api/posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApiSlice;
