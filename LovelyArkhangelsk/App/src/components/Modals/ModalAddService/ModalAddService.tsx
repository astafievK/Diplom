import { FC, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/addServiceModalSlice.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getMessageFromError } from '../../../utils/errors.ts';
import { message } from 'antd';
import { useAddServiceMutation } from '../../../api/methods/serviceApi.ts';
import {motion} from "framer-motion";

export const ModalAddService: FC = () => {
    const [serviceTitle, setServiceTitle] = useState('[Название услуги]');
    const dispatch = useAppDispatch();
    const { isOpen } = useTypedSelector(state => state.addServiceModalReducer);
    const [addService] = useAddServiceMutation()
    const {handleSubmit, register} = useForm<IAddServiceCommand>()

    const handleCrossCancelSpoilerClick = () => {
        dispatch(setIsOpen(false))
    }

    const onSubmit: SubmitHandler<IAddServiceCommand> = async data => {
        const response = await addService(data)

        if('error' in response){
            const errorString = getMessageFromError(response)
            message.error(`${errorString}`, 3)
        }
        else{
            message.error(`${response.data.message}`, 3)
            dispatch(setIsOpen(false))
        }
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
                            {serviceTitle}
                        </div>
                    </div>
                </div>
                <div className="container-item fields">
                    <input
                        type="text"
                        className="field field-title"
                        placeholder={'Название услуги'}
                        {...register('title')}
                        onChange={(e) => setServiceTitle(e.currentTarget.value)}
                        required
                    />
                    <textarea
                        className="field field-descr"
                        {...register("description")}
                        placeholder={'Описание (по наличию)'}
                    />
                    <div className="price-duration">
                        <input type="text" className={'input-duration'} {...register("duration")} placeholder={'Длительность (минут)'} required />
                        <input type="text" className={'input-price'} {...register("price")} placeholder={'Стоимость'} required />
                    </div>
                </div>

                <div className="container-item actions">
                    <button type={'submit'}>Создать</button>
                    <button onClick={handleCrossCancelSpoilerClick}>Отмена</button>
                </div>
                <div className="cross" onClick={handleCrossCancelSpoilerClick}></div>
            </form>
            <div className="spoiler" onClick={handleCrossCancelSpoilerClick}></div>
        </motion.div>
    );
}

