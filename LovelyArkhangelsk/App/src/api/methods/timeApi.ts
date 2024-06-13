import {baseApi} from "../api.ts";

export const timeApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getDates: builder.query<ITimeFormSelectDate[], { year: number, month: number }>({
            query: (data) => ({
                url: `/time/getdates`,
                method: "POST",
                body: data
            }),
            keepUnusedDataFor: 0,
        }),
        getTime: builder.query<ITimeFormSelectTime[], ITimeFormSelectTimeCommand>({
            query: (data) => ({
                url: `/time/gettime`,
                method: "POST",
                body: data
            }),
            keepUnusedDataFor: 0,
        }),
        createPost: builder.mutation<{ message: string }, ITimeFormCreatePostCommand>({
            query: (data) => ({
                url: `/time/createpost`,
                method: "POST",
                body: data
            }),
        }),
    }),
})

export const {
    useGetDatesQuery,
    useGetTimeQuery,
    useCreatePostMutation
} = timeApi