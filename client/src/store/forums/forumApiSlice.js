import apiSlice from "../apiSlice";

const forumsApiSlice = apiSlice.injectEndpoints({

    endpoints: (build) => ({
        getAllForums: build.mutation({
            query: (registerUser) => ({
                url: 'api/forums/',
                method: 'GET',
            }),
        }),
    })
});

export const { getAllForums  } = forumsApiSlice;