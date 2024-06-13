import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    setEmployerId, setExperience,
    setIsOpen,
    setName,
    setPatronymic,
    setSurname,
} from '../../api/slices/editEmployeeModalSlice.ts';
import { useAppDispatch } from '../../store/hooks/redux.ts';
import { useDeleteEmployeeByIdMutation, useGetEmployeeProfileByIdQuery } from '../../api/methods/employeeApi.ts';
import { getMessageFromError } from '../../utils/errors.ts';
import { message } from 'antd';
import { baseUrl } from '../../api/api.ts';
import { motion } from 'framer-motion';

interface EmployerCardProps {
    isAdmin?: boolean;
    idEmployee: number;
}

const EmployeeCard: FC<EmployerCardProps> = (props) => {
    const [deleteEmployee] = useDeleteEmployeeByIdMutation()
    const {data} = useGetEmployeeProfileByIdQuery({idEmployee : props.idEmployee})

    const dispatch = useAppDispatch();

    const handleChangeButtonClick = () => {
        dispatch(setEmployerId(props.idEmployee));

        if(data){
            dispatch(setName(data.name));
            dispatch(setSurname(data.surname));
            dispatch(setPatronymic(data.patronymic));
            dispatch(setExperience(data.employee?.experience));
        }
        dispatch(setIsOpen(true));
    };

    const handleDeleteButtonClick = async () => {
        const response = await deleteEmployee({idEmployee: props.idEmployee})

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

    return (
        <motion.div
            className={'employer-card__wrapper'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Link className={'employer-card'} to={`/employees/${props.idEmployee}`}>
                <div className="photo-wrapper">
                    <img
                        className={'employer-card__photo'}
                        src={`${baseUrl}/image/getbyemployeeid/${props.idEmployee}`}
                        loading={"lazy"}
                        alt={'Изображение мастера'}
                    />
                </div>
                <div className="employer-card__info">
                    <div className="bio">
                        <span className={'fullname'}>
                            {data?.surname && `${data.surname} `}
                            {data?.name && `${data.name} `}
                            {data?.patronymic && `${data.patronymic}`}
                        </span>
                        <div className="exp-and-works">
                            <span className={'experience'}>{data?.employee?.experience} лет стажа</span>
                            <span className={'works-count'}>192 работы</span>
                        </div>
                    </div>
                </div>
            </Link>
            {props.isAdmin && (
                <>
                    <div className="actions">
                        <button className="edit action" onClick={handleChangeButtonClick}>Изменить</button>
                        <button className="delete action" onClick={handleDeleteButtonClick}>Удалить</button>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default EmployeeCard;
