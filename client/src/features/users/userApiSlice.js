import apiSlice from '../../app/apiSlice';

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: 'api/admin/users',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    addUser: build.mutation({
      query: (user) => ({
        url: 'api/admin/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: build.mutation({
      query: (user) => ({
        url: `api/admin/users/${user._id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `api/admin/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation,
} = usersApiSlice;
