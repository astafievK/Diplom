interface IService{
    idService: number
    title: string
    description: string
    duration: number
    price: number
    idImage: number
    employerHasServices: IEmployeeHasService[]
    idImageNavigation: IImage
}