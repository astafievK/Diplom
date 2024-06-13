import {baseApi} from "../api.ts";

export const employeeHasServiceApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getEmployeeHasService: builder.query<IEmployeeHasService[], void>({
            query: () => ({
                url: `/employeehasservice/allemployeehasservice`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employees']
        }),
        getEmployeeHasServiceById: builder.query<IEmployeeHasService, {idEmployee: number, idService: number}>({
            query: (data) => ({
                url: `/employeehasservice/employeehasservicebyid/${data.idEmployee}&${data.idService}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employees']
        }),
        getEmployeeServices: builder.query<{idService: number, idEmployee: number, title: string}[], {idEmployee: number}>({
            query: (data) => ({
                url: `/employeehasservice/employeeservices/${data.idEmployee}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employees']
        }),
        switchService: builder.mutation<{message: string}, {idEmployee: number, idService: number}>({
            query: (data) => ({
                url: `/employeehasservice/switchservice`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Employee']
        }),
        editServicePrice: builder.mutation<{message: string}, {idEmployee: number, idService: number, price: number}>({
            query: (data) => ({
                url: `/employeehasservice/editprice`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Employee']
        }),
        editServiceDuration: builder.mutation<{message: string}, {idEmployee: number, idService: number, duration: number}>({
            query: (data) => ({
                url: `/employeehasservice/editduration`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Employee']
        }),
        getIsEmployeeHasService: builder.query<{isExists: boolean, price: number, duration: number}, {idEmployee: number, idService: number}>({
            query: (data) => ({
                url: `/employeehasservice/isexists`,
                method: "POST",
                body: data
            }),
            providesTags: ['Employee']
        }),
        getPriceList: builder.query<IPriceList[], {idService: number}>({
            query: (data) => ({
                url: `/employeehasservice/pricelist/${data.idService}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employee']
        }),
    }),
})

export const {
    useGetEmployeeHasServiceQuery,
    useGetEmployeeHasServiceByIdQuery,
    useGetEmployeeServicesQuery,
    useSwitchServiceMutation,
    useEditServicePriceMutation,
    useEditServiceDurationMutation,
    useGetIsEmployeeHasServiceQuery,
    useGetPriceListQuery
} = employeeHasServiceApi