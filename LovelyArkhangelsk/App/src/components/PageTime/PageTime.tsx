// ПОдключение необходим биболиотек и компонентов
import React, { FC, useState } from 'react';
import {motion} from "framer-motion";
import {SelectEmployee} from "./SelectEmployee.tsx";
import {SelectService} from "./SelectService.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {RadiosDate} from "./RadiosDate.tsx";
import {RadiosTime} from "./RadiosTime.tsx";
import { getMessageFromError } from '../../utils/errors.ts';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';
import { useGetEmployeeHasServiceByIdQuery } from '../../api/methods/employeeHasServiceApi.ts';
import { formatNumber } from '../../utils/dateFormatter.ts';
import { isNumeric } from '../../utils/isNumeric.ts';
import { useCreatePostMutation } from '../../api/methods/timeApi.ts';

// Инициализация компонента
const PageTime: FC = () => {
    const { user } = useTypedSelector(state => state.auth)
    const [submitting, setSubmitting] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState<string>(user ? user.phoneNumber: '')
    const [clientName, setClientName] = useState<string>(user ? user.name : '')
    const [createPost] = useCreatePostMutation()
    const timeSlice = useTypedSelector(state => state.timeFormReducer)
    const queryResult = useGetEmployeeHasServiceByIdQuery({
        idService: timeSlice.idService,
        idEmployee: timeSlice.idEmployee
    }, { skip: !timeSlice.idService || !timeSlice.idEmployee });

    const serviceInfo = queryResult.data;

    // Асинхронное событие при отправке формы
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>, setSubmitting: (submitting: boolean) => void) => {
        e.preventDefault();
        setSubmitting(true);

        if(!isNumeric(phoneNumber)){
            message.info('Некорректный номер телефона', 3)
            setSubmitting(false);
            return;
        }

        if(user?.idEmployee === timeSlice.idEmployee){
            message.info('Нельзя записаться на услугу к самому себе', 3)
            setSubmitting(false);
            return;
        }

        if(user){
            const response = await createPost({
                idUser: user.idUser,
                idEmployee: timeSlice.idEmployee,
                idService: timeSlice.idService,
                dateYear: timeSlice.dateYear,
                dateMonth: timeSlice.dateMonth,
                dateDay: timeSlice.dateDay,
                dateHours: timeSlice.dateHours,
                dateMinutes: timeSlice.dateMinutes
            })

            if ('error' in response) {
                const errorString = getMessageFromError(response)
                if (errorString == 'unknown') {
                    message.error(`Возникла серверная ошибка.\nПовторите действие позже`, 3)
                } else {
                    message.error(`${errorString}`, 3)
                }
                setSubmitting(false);
            } else {
                message.info(response.data.message, 3)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        }
    }

    return (
        <>
            {
                !user && <Navigate to='/login' />
            }

            <motion.div
                className="page time-container"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
            >
                <h1>Записаться</h1>
                <form className="time" onSubmit={(e) => handleOnSubmit(e, setSubmitting)}>
                    <SelectService />
                    {
                        timeSlice.idService != null && <SelectEmployee />
                    }
                    {
                        timeSlice.idEmployee != null && <RadiosDate />
                    }
                    {
                        timeSlice.dateDay && timeSlice.dateMonth && timeSlice.dateYear && <RadiosTime />
                    }
                    {
                        timeSlice.dateHours && timeSlice.dateMinutes &&
                        <motion.div className={"client-info"}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                            <input className={"number form-elem"} type={"tel"} value={phoneNumber}
                                   placeholder={"71234567890"} maxLength={11}
                                   onChange={(e) => setPhoneNumber(e.currentTarget.value)} required={true} disabled />
                            <input className={"name form-elem"} type={"text"} value={clientName} placeholder={"Имя"}
                                   onChange={(e) => setClientName(e.currentTarget.value)} required={true} disabled />
                        </motion.div>
                    }
                    {
                        timeSlice.dateHours && timeSlice.dateMinutes && (phoneNumber?.length === 11) && clientName &&
                        <>
                            <div className="info">
                                <span className={"info-title"}>Выбранное время</span>
                                <span className={"info-time"}>{formatNumber(timeSlice.dateDay)}.{formatNumber(timeSlice.dateMonth)}.{timeSlice.dateYear} {timeSlice.dateHours}:{formatNumber(timeSlice.dateMinutes)}</span>
                                <span className={"employee-name__wrapper"}>к мастеру<span className={"employee-name"}>{timeSlice.nameEmployee}</span></span>
                                <span className={"service-name__wrapper"}>на услугу<span className={"service-name"}>{timeSlice.nameService}</span></span>
                                <span className={"info-price"}>{serviceInfo?.price} руб. {serviceInfo?.duration} минут</span>
                            </div>
                            <motion.button className="confirm"
                                           type={"submit"}
                                           id="timeConfirm"
                                           disabled={submitting}
                                           initial={{ opacity: 0 }}
                                           animate={{ opacity: 1 }}
                                           exit={{ opacity: 0 }}
                            >
                                Подтвердить запись
                            </motion.button>
                        </>
                        }
                    </form>
                </motion.div>
            </>
        )
    }

    // Экспорт созданного компонента
    export default PageTime