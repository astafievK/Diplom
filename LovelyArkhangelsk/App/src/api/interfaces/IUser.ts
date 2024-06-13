interface IUser{
    idUser: number
    phoneNumber: string
    password: string
    name: string
    surname: string
    patronymic: string
    idRole: number
    idEmployee: number | null
    role: IRole
    employee: IEmployee | null
}

