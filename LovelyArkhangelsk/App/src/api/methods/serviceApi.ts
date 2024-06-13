import {baseApi} from "../api.ts";

export const imageApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getServices: builder.query<IService[], void>({
            query: () => ({
                url: `/service/allservices`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Services']
        }),
        getServiceById: builder.query<IService, { idService: number }>({
            query: (data) => ({
                url: `/service/servicebyid/${data.idService}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
        }),
        addService: builder.mutation<{message: string}, IAddServiceCommand>({
            query: (data) => ({
                url: `/service/addservice`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Services']
        }),
        editService: builder.mutation<{message: string}, IEditServiceCommand>({
            query: (data) => ({
                url: `/service/editservice`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Services']
        }),
        removeService: builder.mutation<{message: string}, {idService: number}>({
            query: (data) => ({
                url: `/service/removeservice/${data.idService}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Services']
        }),
        getServiceTitle: builder.query<{title: string}, {idService: number}>({
            query: (data) => ({
                url: `/service/title/${data.idService}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
        }),
    }),
})

export const {
    useGetServicesQuery,
    useGetServiceByIdQuery,
    useAddServiceMutation,
    useEditServiceMutation,
    useRemoveServiceMutation,
    useGetServiceTitleQuery
} = imageApi