import {baseApi} from "../api.ts";

export const roleApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getRoles: builder.query<IRole[], void>({
            query: () => ({
                url: `/role/allroles`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
        }),
    }),
})

export const {
    useGetRolesQuery
} = roleApi