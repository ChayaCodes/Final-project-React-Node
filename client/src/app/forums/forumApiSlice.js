import apiSlice from "../apiSlice";

const forumsApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getForums: build.query({
            query: () => ({
                url: 'api/forums/',
                method: 'GET',
            }),
        }),
    })
});

export const { useGetForumsQuery  } = forumsApiSlice;