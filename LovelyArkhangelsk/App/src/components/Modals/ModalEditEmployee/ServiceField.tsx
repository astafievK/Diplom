import React, { FC, useEffect, useState } from 'react';
import {
    useEditServiceDurationMutation,
    useEditServicePriceMutation,
    useGetIsEmployeeHasServiceQuery,
    useSwitchServiceMutation,
} from '../../../api/methods/employeeHasServiceApi.ts';
import { getMessageFromError } from '../../../utils/errors.ts';
import { message } from 'antd';
import { useTypedSelector } from '../../../store/hooks/redux.ts';
import { isNumeric } from '../../../utils/isNumeric.ts';
import {motion} from "framer-motion";

interface ServiceFieldProps {
    idService: number
    serviceTitle: string
}

export const ServiceField: FC<ServiceFieldProps> = (props) => {
    const { idEmployee } = useTypedSelector(state => state.editEmployeeModalReducer);
    const {data: dataIsSelected, refetch, isLoading} = useGetIsEmployeeHasServiceQuery({
        idEmployee: idEmployee,
        idService: props.idService
    })
    const [inputPrice, setInputPrice] = useState(dataIsSelected?.price)
    const [inputDuration, setInputDuration] = useState(dataIsSelected?.duration)
    const [switchService] = useSwitchServiceMutation()
    const [changeServicePrice] = useEditServicePriceMutation();
    const [changeServiceDuration] = useEditServiceDurationMutation();

    useEffect(() => {
        refetch()
    }, [refetch]);

    const handleServiceButtonClick = async () => {
        const response = await switchService({
            idEmployee: idEmployee,
            idService: props.idService
        })

        refetch()

        if('error' in response){
            const errorString = getMessageFromError(response)
            if(errorString == 'unknown'){
                message.error(`Возникла серверная ошибка. Повторите действие позже`, 3)
            }
            else{
                message.error(`${errorString}`, 3)
            }
        }
        else{
            refetch()
        }
    };

    const handlePriceChange = async (e: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value);

        if(!isNumeric(`${currentValue}`)){
            message.error(`Цена должна состоять только из цифр`, 3)
            return
        }

        if(`${currentValue}`.length === 0){
            message.error(`Значение не может быть пустым. Если требуется удалить - нажмите на название услуги`, 3)
            return
        }

        setInputPrice(currentValue);

        if(inputPrice){
            const response = await changeServicePrice({
                idService: props.idService,
                idEmployee: idEmployee,
                price: currentValue
            });

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
    };

    const handleDurationChange = async (e: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value);

        if(!isNumeric(`${currentValue}`)){
            message.error(`Цена должна состоять только из цифр`, 3)
            return
        }

        if(`${currentValue}`.length === 0){
            message.error(`Значение не может быть пустым. Если требуется удалить - нажмите на название услуги`, 3)
            return
        }

        setInputDuration(currentValue)

        if (inputDuration) {
            const response = await changeServiceDuration({
                idService: props.idService,
                idEmployee: idEmployee,
                duration: currentValue
            })

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
    }

    if(isLoading){
        return null
    }

    return (
        <motion.div
            className="service"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <button
                className={`service-button ${dataIsSelected?.isExists ? 'selected' : ''}`}
                type={"button"}
                onClick={handleServiceButtonClick}
            >
                {props.serviceTitle}
            </button>

            <input type="text" className="price-field" id={"fieldPrice"} value={inputPrice} placeholder={"руб."}
                   onChange={e => handlePriceChange(e)}
                   onPaste={e => handlePriceChange(e)}
                   disabled={!dataIsSelected?.isExists}
            />
            <input type="text" className="duration-field" id={"fieldDuration"} value={inputDuration} placeholder={"мин."}
                   onChange={e => handleDurationChange(e)}
                   onPaste={e => handleDurationChange(e)}
                   disabled={!dataIsSelected?.isExists}
            />
        </motion.div>
    );
};