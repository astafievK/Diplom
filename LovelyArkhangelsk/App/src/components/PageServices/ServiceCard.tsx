import {FC} from "react";
import { getMessageFromError } from '../../utils/errors.ts';
import { message } from 'antd';
import {motion} from "framer-motion";
import { useGetServiceByIdQuery, useRemoveServiceMutation } from '../../api/methods/serviceApi.ts';
import { useAppDispatch } from '../../store/hooks/redux.ts';
import { setPriceListIdService,setPriceListIsOpen } from '../../api/slices/priceListModalSlice.ts';
import { setIdService, setDescription, setDuration, setPrice, setTitle, setIsOpen } from '../../api/slices/editServiceModalSlice.ts';

interface ServiceCardProps {
    isAdmin: boolean
    idService: number
    title: string
}

const ServiceCard: FC<ServiceCardProps> = (props) => {
    const dispatch = useAppDispatch();
    const [deleteService] = useRemoveServiceMutation()
    const {data, isLoading} = useGetServiceByIdQuery({idService : props.idService})

    const handleChangeButtonClick = () => {
        dispatch(setIdService(props.idService));

        if(data){
            dispatch(setTitle(data.title));
            dispatch(setDescription(data.description));
            dispatch(setPrice(data.price));
            dispatch(setDuration(data.duration));
        }

        dispatch(setIsOpen(true));
    }

    const handleDeleteButtonClick = async () => {
        const response = await deleteService({idService: props.idService})

        if('error' in response){
            const errorString = getMessageFromError(response)
            if(errorString == 'unknown'){
                message.error(`Возникла серверная ошибка. Повторите действие позже`, 3)
            }
            else{
                message.error(`${errorString}`, 3)
            }
        }
    }

    const handleServiceClick = () => {
        dispatch(setPriceListIsOpen(true))
        dispatch(setPriceListIdService(props.idService))
    }

    if(isLoading){
        return null
    }

    return (
        <motion.div
            className="service-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="service" onClick={handleServiceClick}>
                {props.title}
            </div>
            {props.isAdmin && (
                <>
                    <div className="actions">
                        <button className="edit action" onClick={handleChangeButtonClick}>Изменить</button>
                        <button className="delete action" onClick={handleDeleteButtonClick}>Удалить</button>
                    </div>
                </>
            )}
        </motion.div>
    )
}

export default ServiceCard