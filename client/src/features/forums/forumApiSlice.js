import apiSlice from '../../app/apiSlice';

const forumsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getForums: build.query({
      query: () => ({
        url: 'api/admin/forums',
                method: 'GET',
      }),
      providesTags: ['Forums'],
    }),
    addForum: build.mutation({
      query: (forum) => ({
        url: 'api/admin/forums',
        method: 'POST',
        body: forum,
      }),
      invalidatesTags: ['Forums'],
    }),
    updateForum: build.mutation({
      query: (forum) => ({
        url: `api/admin/forums/${forum._id}`,
        method: 'PUT',
        body: forum,
      }),
      invalidatesTags: ['Forums'],
    }),
    deleteForum: build.mutation({
      query: (id) => ({
        url: `api/admin/forums/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Forums'],
    }),
  }),
});

export const {
  useGetForumsQuery, useAddForumMutation, useUpdateForumMutation, useDeleteForumMutation,
} = forumsApiSlice;
