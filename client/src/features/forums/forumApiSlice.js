import apiSlice from "../../app/apiSlice";

const forumsApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getForums: build.query({
            query: () => ({
                url: 'api/admin/forums',
                method: 'GET',
            }),
        }),
        addForum: build.mutation({
            query: (forum) => ({
                url: 'api/admin/forums',
                method: 'POST',
                body: forum,
            }),
        }),
    })
});

export const { useGetForumsQuery, useAddForumMutation } = forumsApiSlice;