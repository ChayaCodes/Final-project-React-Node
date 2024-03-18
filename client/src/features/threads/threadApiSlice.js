import apiSlice from "../../app/apiSlice";

const threadsApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getThreads: build.query({
            query: () => ({
                url: 'api/admin/threads',
                method: 'GET',
            }),
            providesTags: ['Threads'],
        }),
        getForumThreads: build.query({
            query: (forumId) => ({
                url: `api/admin/forums/${forumId}/threads`,
                method: 'GET',
            }),
            providesTags: ['Threads'],
        }),
        addThread: build.mutation({
            query: (Thread) => ({
                url: 'api/admin/threads',
                method: 'POST',
                body: Thread,
            }),
            invalidatesTags: ['Threads'],
        }),
        updateThread: build.mutation({
            query: (Thread) => ({
                url: `api/admin/threads/${Thread._id}`,
                method: 'PUT',
                body: Thread,
            }),
            invalidatesTags: ['Threads'],
        }),
        deleteThread: build.mutation({
            query: (id) => ({
                url: `api/admin/threads/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Threads'],
        }),
    })
});

export const { useGetThreadsQuery, useAddThreadMutation, useUpdateThreadMutation, useDeleteThreadMutation } = threadsApiSlice;