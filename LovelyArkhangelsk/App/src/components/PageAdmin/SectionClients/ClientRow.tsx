import { FC, useState } from 'react';
import { getMessageFromError } from '../../../utils/errors.ts';
import { message } from 'antd';
import { useDeleteUserMutation, useGetUserByIdQuery, useSetUserRoleMutation } from '../../../api/methods/userApi.ts';
import { useGetRolesQuery } from '../../../api/methods/roleApi.ts';
import {motion} from "framer-motion";

interface IClientRowProps{
    idUser: number
    roleTitle: string
    surname: string
    name: string
    patronymic: string
}

export const ClientRow: FC<IClientRowProps> = (props) => {
    const {data: dataRoles} = useGetRolesQuery()
    const [deleteUser] = useDeleteUserMutation()
    const [selectRole] = useSetUserRoleMutation()
    const [isExpanded, setIsExpanded] = useState(false);
    const {data} = useGetUserByIdQuery({idUser: props.idUser})

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleItemClick = async (idRole: number) => {
        const response = await selectRole({
            idUser: props.idUser,
            idRole: idRole
        })

        if ('error' in response) {
            const errorString = getMessageFromError(response)
            if (errorString == 'unknown') {
                message.error(`Возникла серверная ошибка. Повторите действие позже`, 3)
            } else {
                message.error(`${errorString}`, 3)
            }
        } else {
            message.info(response.data.message, 3)
        }
    }

    const handleDeleteButtonClick = async () => {
        const response = await deleteUser({
            idUser: props.idUser
        })

        if ('error' in response) {
            const errorString = getMessageFromError(response)
            if (errorString == 'unknown') {
                message.error(`Возникла серверная ошибка.\nПовторите действие позже`, 3)
            } else {
                message.error(`${errorString}`, 3)
            }
        } else {
            message.info(response.data.message, 3)
        }
    }

    return (
        <motion.tr
            className={`client-row`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <td className={'name-wrapper'}>
                <span className={'name'}>{data?.surname} {data?.name} {data?.patronymic}</span>
                <span className={'info'}>{data?.phoneNumber}</span>
            </td>
            <td className="actions">
                <div className={`dropdown ${isExpanded ? 'expanded' : ''}`} onClick={handleButtonClick}>
                    <input type="text" className="dropdown-button" autoComplete={"off"} placeholder="Роль"
                           value={props.roleTitle} readOnly={true} />
                    <div className="dropdown-content">
                        {
                            dataRoles?.map((item) => (
                                <span className={'dropdown-content__item'} onClick={() => handleItemClick(item.idRole)}>{item.title}</span>
                            ))
                        }
                    </div>
                </div>
                <button className="action action-delete" onClick={handleDeleteButtonClick}>
                    <svg fill="#000000" version="1.1" width="30px" height="30px" viewBox="0 0 485 485">
                        <g>
                            <g>
                                <rect x="67.224" width="350.535" height="71.81" />
                                <path
                                    d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447    h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </td>
        </motion.tr>
    )
}
