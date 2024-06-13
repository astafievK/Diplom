import {baseApi} from "../api.ts";

export const userApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<IUser[], void>({
            query: () => ({
                url: `/user/allusers`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Users', 'Employees']
        }),
        getUserById: builder.query<IUser, { idUser: number }>({
            query: (data) => ({
                url: `/user/userbyid/${data.idUser}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Users']
        }),
        getUserByEmployeeId: builder.query<IUser, { idEmployee: number }>({
            query: (data) => ({
                url: `/user/userbyemployeeid/${data.idEmployee}`,
                method: "GET",
            }),
            keepUnusedDataFor: 0,
            providesTags: ['Users']
        }),
        setUserRole: builder.mutation<{message: string}, ISetUserRoleCommand>({
            query: (data) => ({
                url: `/user/setuserrole`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ['Users', 'Employees']
        }),
        deleteUser: builder.mutation<{message: string}, IDeleteUserCommand>({
            query: (data) => ({
                url: `/user/deleteuserbyid`,
                method: "DELETE",
                body: data
            }),
            invalidatesTags: ['Users']
        }),
    }),
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetUserByEmployeeIdQuery,
    useSetUserRoleMutation,
    useDeleteUserMutation,
} = userApi