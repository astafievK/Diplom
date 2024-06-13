import {FC} from "react";
import { useGetServiceByIdQuery } from '../../../api/methods/serviceApi.ts';
import { useGetUserByEmployeeIdQuery } from '../../../api/methods/userApi.ts';
import { useAppDispatch } from '../../../store/hooks/redux.ts';
import { setIdEmployee, setIdService, setNameEmployee, setNameService } from '../../../api/slices/timeFormSlice.ts';
import { useNavigate } from 'react-router-dom';
import { setPriceListIsOpen } from '../../../api/slices/priceListModalSlice.ts';

interface PriceRowProps{
    idEmployee: number
    idService: number
    name: string
    surname: string
    price: number
}

export const PriceRow: FC<PriceRowProps> = (props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { data: serviceData } = useGetServiceByIdQuery({idService: props.idService})
    const {data: employeeData} = useGetUserByEmployeeIdQuery({idEmployee: props.idEmployee})

    const handleClick = () => {
        if(serviceData && employeeData){
            dispatch(setIdService(serviceData.idService))
            dispatch(setIdEmployee(employeeData.idEmployee))
            dispatch(setNameService(serviceData.title))
            dispatch(setNameEmployee(`${employeeData.surname} ${employeeData.name} ${employeeData.patronymic}`))
            dispatch(setPriceListIsOpen(false))
            navigate('/time')
        }
    }

    return (
        <button className="row" onClick={handleClick}>
            <span className="name">{props.surname} {props.name}</span>
            <span className="price">{props.price} руб.</span>
        </button>
    )
}