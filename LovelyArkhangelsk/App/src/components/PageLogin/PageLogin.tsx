import { FC } from 'react';
import { motion } from "framer-motion"
import { Link, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/redux.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { message } from 'antd';
import { getMessageFromError } from '../../utils/errors.ts';
import { useLoginMutation } from '../../api/methods/authApi.ts';

const PageLogin: FC = () => {
    const {handleSubmit, register} = useForm<ILoginCommand>()
    const {user} = useTypedSelector(state => state.auth)
    const [login] = useLoginMutation()

    const onSubmit: SubmitHandler<ILoginCommand> = async data => {
        const response = await login(data)

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

    return(
        <>
            {
                user && <Navigate to='/'/>
            }
            <motion.div
                className="page login-container"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
            >
                <div className={"auth-form__wrapper"}>
                    <span className={"label"}>Вход</span>
                    <form className={"auth-form"} onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className={"form-elem"} {...register("phoneNumber")} placeholder={"Телефон"} maxLength={11} required={true}/>
                        <input type="password" className={"form-elem"} {...register("password")} placeholder={"Пароль"} required={true}/>
                        <div className="actions">
                            <button type={'submit'} className={'action'} id={'authSubmit'}>Вход</button>
                            <Link to={'/create'} className={'action'} id={'createAccountButton'}>Создать аккаунт</Link>
                        </div>
                    </form>
                </div>
            </motion.div>
        </>
    )
}

export default PageLogin;