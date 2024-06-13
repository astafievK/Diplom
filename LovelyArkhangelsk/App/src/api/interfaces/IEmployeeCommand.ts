interface IEmployeeCommand {
    photo: File
    experience: number
    name: string
    surname: string
    patronymic: string
    services: {id: number, price: number}[]

}