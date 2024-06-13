import {baseApi} from "../api.ts";

export const imageApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getImage: builder.query<IImage, {idImage: number}>({
            query: (data) => ({
                url: `/image/get/${data.idImage}`,
                method:'GET',
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Image']
        }),
        getImageByEmployeeId: builder.query<IImage, {idEmployee: number}>({
            query: (data) => ({
                url: `/image/getbyemployeeid/${data.idEmployee}`,
                method: "GET",
                responseHandler: (response) => response.blob()
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Image']
        }),
        uploadEmployeeAvatar: builder.mutation<{message: string}, {idEmployee: number, formData: FormData}>({
            query: (data) => ({
                url: `/image/uploademployeeavatar/${data.idEmployee}`,
                method: "POST",
                body: data.formData
            }),
            invalidatesTags: ['Image']
        }),
        uploadEmployeeWorkPhoto: builder.mutation<{message: string}, {idEmployee: number, formData: FormData}>({
            query: (data) => ({
                url: `/image/uploademployeework/${data.idEmployee}`,
                method: "POST",
                body: data.formData
            }),
            invalidatesTags: ['Image']
        }),
        getWorksImages: builder.query<{idWorkPhoto: number, idEmployee: number, idImage: number}[], void>({
            query: () => ({
                url: `/image/getworks`,
                method: 'GET',
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Image']
        }),
        getEmployeeWorksImages: builder.query<{idWorkPhoto: number, idEmployee: number, idImage: number}[], {idEmployee: number}>({
            query: (data) => ({
                url: `/image/getemployeeworks/${data.idEmployee}`,
                method: 'GET',
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Image']
        }),
        deleteWorkPhoto: builder.mutation<{ message: string }, {idEmployee: number, idImage: number}>({
            query: (data) => ({
                url: `/image//removeemployeework/${data.idEmployee}&${data.idImage}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Image']
        }),
    }),
})

export const {
    useGetImageQuery,
    useGetImageByEmployeeIdQuery,
    useUploadEmployeeAvatarMutation,
    useUploadEmployeeWorkPhotoMutation,
    useGetWorksImagesQuery,
    useGetEmployeeWorksImagesQuery,
    useDeleteWorkPhotoMutation
} = imageApi