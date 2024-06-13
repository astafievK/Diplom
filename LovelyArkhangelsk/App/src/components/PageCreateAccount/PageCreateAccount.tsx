import { FC } from 'react';
import { motion } from "framer-motion"
import { Link, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/redux.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { message } from 'antd';
import { getMessageFromError } from '../../utils/errors.ts';
import { useLoginMutation, useRegistrationMutation } from '../../api/methods/authApi.ts';
import { isNumeric } from '../../utils/isNumeric.ts';

export const PageCreateAccount: FC = () => {
    const {handleSubmit, register} = useForm<IRegistrationCommand>()
    const {user} = useTypedSelector(state => state.auth)

    const [registration] = useRegistrationMutation()
    const [login] = useLoginMutation()

    const onSubmit: SubmitHandler<IRegistrationCommand> = async data => {
        if(data.password === data.confirmPassword && isNumeric(data.phoneNumber)){
            const response = await registration(data)

            if('error' in response){
                const errorString = getMessageFromError(response)
                message.error(`${errorString}`, 3)
            }
            else{
                message.error(`Аккаунт успешно создан`, 3)
                const loginData={phoneNumber: data.phoneNumber, password: data.password}
                const response = await login(loginData)

                if('error' in response){
                    const errorString = getMessageFromError(response)
                    message.error(`${errorString}`, 3)
                }
            }
        }
        else{
            message.error(`Введены некорректные данные`, 3)
        }
    }

    return(
        <>
            {
                user && <Navigate to='/'/>
            }
            <motion.div
                className="page registration-container"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
            >
                <div className={"registration-form__wrapper"}>
                    <span className={"label"}>Создание аккаунта</span>
                    <form className={"reg-form"} onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className={"form-elem"} {...register("phoneNumber")} placeholder={"Телефон"}
                               maxLength={11}
                               required={true} />
                        <input type="password" className={"form-elem"} {...register("password")} placeholder={"Пароль"}
                               required={true} />
                        <input type="password" className={"form-elem"} {...register("confirmPassword")}
                               placeholder={"Подтверждение пароля"}
                               required={true} />
                        <input type="text" className={"form-elem"} {...register("surname")} placeholder={"Фамилия"}
                               required={true} />
                        <input type="text" className={"form-elem"} {...register("name")} placeholder={"Имя"}
                               required={true} />
                        <input type="text" className={"form-elem"} {...register("patronymic")} placeholder={"Отчество"}
                               required={true} />
                        <div className="actions">
                            <button type={'submit'} className={'action'} id={'authSubmit'}>Создать аккаунт</button>
                            <Link to={'/login'} className={'action'} id={'createAccountButton'}>Уже есть аккаунт</Link>
                        </div>
                    </form>
                </div>
            </motion.div>
        </>
    )
}