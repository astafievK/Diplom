// Импорт необходимых библиотек и компонентов
import {baseApi} from "../api.ts";
import {login} from "../slices/authSlice.ts";

// Инициализация объекта методов для работы с учетной записью пользователя
export const authApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        // Инициализация метода авторизации
        login: builder.mutation<IAuthorizationResult, ILoginCommand>({
            query: (data) => ({
                url: `/auth/login`,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled
                    dispatch(login(data))
                } catch (err){
                    console.log(err)
                }
            },
        }),
        // Инициализация метода регистрации
        registration: builder.mutation<{user: IUser, message: string}, IRegistrationCommand>({
            query: (data) => ({
                url: `/auth/registration`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Users']
        })
    }),
})

// Экспорт объекта методов
export const {
    useLoginMutation,
    useRegistrationMutation
} = authApi