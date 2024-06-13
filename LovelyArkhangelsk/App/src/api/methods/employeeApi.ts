import {baseApi} from "../api.ts";

export const employeeApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query<IUser[], void>({
            query: () => ({
                url: `/employee/allemployees`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employees']
        }),
        getEmployeeById: builder.query<IEmployee, { idEmployee: number }>({
            query: (data) => ({
                url: `/employee/employeebyid/${data.idEmployee}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employees']
        }),
        getEmployeeProfileById: builder.query<IUser, { idEmployee: number }>({
            query: (data) => ({
                url: `/employee/employeebyid/${data.idEmployee}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employees']
        }),
        editEmployee: builder.mutation<{ message: string }, IEditEmployeeCommand>({
            query: (data) => ({
                url: `/employee/editemployee`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Employees']
        }),
        deleteEmployeeById: builder.mutation<{message: string}, { idEmployee: number }>({
            query: (data) => ({
                url: `/employee/deleteemployee/${data.idEmployee}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Employees']
        }),
        getEmployeesByServiceId: builder.query<ITimeFormSelectEmployee[], { idService: number }>({
            query: (data) => ({
                url: `/employee/employeesbyservice/${data.idService}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Employees']
        }),
    }),
})

export const {
    useGetEmployeesQuery,
    useGetEmployeeByIdQuery,
    useEditEmployeeMutation,
    useGetEmployeeProfileByIdQuery,
    useDeleteEmployeeByIdMutation,
    useGetEmployeesByServiceIdQuery
} = employeeApi