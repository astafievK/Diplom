import React, { FC, useEffect, useState } from 'react';
import {useAppDispatch, useTypedSelector} from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/editEmployeeModalSlice.ts';
import { ServiceField } from './ServiceField.tsx';
import { useEditEmployeeMutation } from '../../../api/methods/employeeApi.ts';
import { useGetServicesQuery } from '../../../api/methods/serviceApi.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getMessageFromError } from '../../../utils/errors.ts';
import { message } from 'antd';
import { useUploadEmployeeAvatarMutation } from '../../../api/methods/imageApi.ts';
import {  baseUrl } from '../../../api/api.ts';
import {motion} from "framer-motion";

export const ModalEditEmployee: FC = () => {
    const dispatch = useAppDispatch();
    const { isOpen, idEmployee, name, surname, patronymic, experience } = useTypedSelector(state => state.editEmployeeModalReducer);
    const { data: servicesData=[], refetch: servicesRefetch } = useGetServicesQuery()
    const {handleSubmit, register} = useForm<IEditEmployeeCommand>()
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [uploadEmployeeAvatar] = useUploadEmployeeAvatarMutation()
    const [editEmployee] = useEditEmployeeMutation()
    const [inputName, setInputName] = useState(name)
    const [inputSurname, setInputSurname] = useState(surname)
    const [inputPatronymic, setInputPatronymic] = useState(patronymic)
    const [inputExperience, setInputExperience] = useState(experience)

    useEffect(() => {
        servicesRefetch()
    }, [servicesRefetch])

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleCrossCancelSpoilerClick = () => {
        dispatch(setIsOpen(false));
    };

    const onSubmit: SubmitHandler<IEditEmployeeCommand> = async data => {
        data.idEmployee = idEmployee
        const response = await editEmployee(data)

        if('error' in response){
            const errorString = getMessageFromError(response)
            if(errorString == 'unknown'){
                message.error(`Возникла серверная ошибка. Повторите действие позже`, 3)
            }
            else{
                message.error(`${errorString}`, 3)
            }
        }
        else {
            message.error(`Данные успешно изменены`, 3)
            dispatch(setIsOpen(false));
        }

        if(selectedFile){
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await uploadEmployeeAvatar({
                idEmployee: idEmployee,
                formData: formData
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
            else {
                message.error(`Фото мастера успешно изменено`, 3)
                dispatch(setIsOpen(false));
            }
        }
    }

    const previewImageUrl = selectedFile ? URL.createObjectURL(selectedFile) : `${baseUrl}/image/getbyemployeeid/${idEmployee}`;

    return (
        <motion.div
            className={'modal change-employer__modal' + (isOpen ? ' active' : '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="container-item photo">
                    <div className="photo-wrapper">
                        <img src={`${previewImageUrl}`} alt=""/>
                    </div>
                    <div className="actions">
                        <div className="file-input__wrapper">
                            <label htmlFor={'upload-photo-employer-edit'}>
                                <span>Загрузить фото</span>
                                <input
                                    type="file"
                                    id="upload-photo-employer-edit"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e)}
                                />
                            </label>
                        </div>
                        <input type="text" className={"experience"} {...register('experience')} value={inputExperience} id={'upload-photo-employer-edit'} placeholder={'Стаж (лет)'} onChange={e => setInputExperience(Number(e.currentTarget.value))} />
                    </div>
                </div>
                <div className="container-item fields">
                    <input type="text" className="field field-surname" {...register('surname')} value={inputSurname} placeholder={'Фамилия'} onChange={e => setInputSurname(e.currentTarget.value)} />
                    <input type="text" className="field field-name" {...register('name')} value={inputName} placeholder={'Имя'} onChange={e => setInputName(e.currentTarget.value)}/>
                    <input type="text" className="field field-patronymic" {...register('patronymic')} value={inputPatronymic} placeholder={'Отчество'} onChange={e => setInputPatronymic(e.currentTarget.value)}/>
                </div>

                <motion.div
                    className="container-item services"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {
                        servicesData.map((service) => (
                            <ServiceField key={service.title} idService={service.idService} serviceTitle={service.title}/>
                        ))
                    }
                </motion.div>

                <div className="container-item actions">
                    <button type={"submit"} id={'save-btn'}>Сохранить</button>
                    <button type={'button'} id={'cancel-btn'} onClick={handleCrossCancelSpoilerClick}>Отмена</button>
                </div>
                <div className="cross" onClick={handleCrossCancelSpoilerClick}></div>
            </form>
            <div className="spoiler" onClick={handleCrossCancelSpoilerClick}></div>
        </motion.div>
    );
}
