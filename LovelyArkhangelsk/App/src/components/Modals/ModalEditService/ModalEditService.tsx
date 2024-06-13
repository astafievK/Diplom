import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/editServiceModalSlice.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getMessageFromError } from '../../../utils/errors.ts';
import { message } from 'antd';
import { useEditServiceMutation, useGetServiceByIdQuery } from '../../../api/methods/serviceApi.ts';
import {motion} from "framer-motion";

export const ModalEditService: FC = () => {
    const dispatch = useAppDispatch();
    const { isOpen, idService} = useTypedSelector(state => state.editServiceModalReducer);
    const {data, refetch} = useGetServiceByIdQuery({
        idService: idService
    })
    const [inputTitle, setInputTitle] = useState(data ? data.title : '')
    const [inputDescription, setInputDescription] = useState(data ? data.description : '')
    const [inputPrice, setInputPrice] = useState(data ? data.price : '')
    const [inputDuration, setInputDuration] = useState(data ? data.duration : '')
    const {handleSubmit, register} = useForm<IEditServiceCommand>()
    const [editService] = useEditServiceMutation()

    useEffect(() => {
        refetch()
    }, [refetch])

    const handleCrossCancelSpoilerClick = () => {
        dispatch(setIsOpen(false))
    }

    const onSubmit: SubmitHandler<IEditServiceCommand> = async data => {
        if(data.price < 0 || data.duration < 0){
            message.error(`Некорректные данные`, 3)
        }
        else{
            data.idService = idService
            console.log(data)
            const response = await editService(data)

            if('error' in response){
                const errorString = getMessageFromError(response)
                message.error(`${errorString}`, 3)
            }
            else{
                message.error(`${response.data.message}`, 3)
                dispatch(setIsOpen(false))
            }
        }

        refetch()
    }

    return (
        <motion.div
            className={'modal add-service__modal' + (isOpen ? ' active' : '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="container-item service">
                    <div className="service-wrapper">
                        <div className="service">
                            {inputTitle}
                        </div>
                    </div>
                </div>
                <div className="container-item fields">
                    <input
                        type="text"
                        className="field field-title"
                        placeholder={'Название услуги'}
                        {...register("title")}
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.currentTarget.value)}
                        required
                    />
                    <textarea
                        className="field field-descr"
                        {...register("description")}
                        value={inputDescription}
                        onChange={(e) => setInputDescription(e.currentTarget.value)}
                        placeholder={'Описание (по наличию)'}
                    />
                    <div className="price-duration">
                        <input type="text" className={'input-duration'} {...register("duration")}
                               value={inputDuration}
                               onChange={(e) => setInputDuration(Number(e.currentTarget.value))}
                               placeholder={'Длительность (минут)'} required />
                        <input type="text" className={'input-price'} {...register("price")}
                               value={inputPrice}
                               onChange={(e) => setInputPrice(Number(e.currentTarget.value))}
                               placeholder={'Стоимость'}
                               required />
                    </div>
                </div>

                <div className="container-item actions">
                    <button
                        id={'create-btn'}
                        type={'submit'}
                    >
                        Создать
                    </button>
                    <button
                        id={'cancel-btn'}
                        type={'button'}
                        onClick={handleCrossCancelSpoilerClick}
                    >
                        Отмена
                    </button>
                </div>
                <div className="cross" onClick={handleCrossCancelSpoilerClick}></div>
            </form>
            <div className="spoiler" onClick={handleCrossCancelSpoilerClick}>

            </div>
        </motion.div>
    );
}

