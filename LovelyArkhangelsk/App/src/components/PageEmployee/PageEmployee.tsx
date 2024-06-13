import React, { FC } from 'react';
import { motion } from 'framer-motion';
import '../../flickity.css';
import { useGetEmployeeProfileByIdQuery } from '../../api/methods/employeeApi.ts';
import { useParams } from 'react-router-dom';
import { ServiceCard } from './ServiceCard.tsx';
import { useGetEmployeeServicesQuery } from '../../api/methods/employeeHasServiceApi.ts';
import { baseUrl } from '../../api/api.ts';
import { useTypedSelector } from '../../store/hooks/redux.ts';
import { SliderEmployeeWorks } from './SliderEmployeeWorks.tsx';
import { getMessageFromError } from '../../utils/errors.ts';
import { message } from 'antd';
import { useUploadEmployeeWorkPhotoMutation } from '../../api/methods/imageApi.ts';

interface PageEmployeeProps {

}

export const PageEmployee: FC<PageEmployeeProps> = () => {
    const { idEmployee } = useParams();
    const {data} = useGetEmployeeProfileByIdQuery({idEmployee : Number(idEmployee)})
    const {user} = useTypedSelector(state => state.auth)
    const {data: services=[]} = useGetEmployeeServicesQuery({
        idEmployee: Number(idEmployee)
    })
    const [uploadWorkPhoto] = useUploadEmployeeWorkPhotoMutation()

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);

            const response = await uploadWorkPhoto({
                idEmployee: Number(idEmployee),
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
                message.error(`Фото успешно загружено`, 3)
            }
        }
    };

    return (
        <motion.div
            className="page employer-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <div className="employer-info">
                <section className="info-section head">
                    <div className="image-wrapper">
                        <img src={`${baseUrl}/image/getbyemployeeid/${idEmployee}`} alt={''} />
                    </div>
                    <h1 className={'employer-name'}>
                        {data && data.surname + ' '}
                        {data && data.name + ' '}
                        {data && data.patronymic + ' '}
                    </h1>
                    <div className="info">
                        <span className={'experience'}>{data?.employee?.experience} лет</span>
                        <span className={'sep'}>•</span>
                        <span className="works">125 работ</span>
                    </div>
                </section>
                <section className="info-section works">
                    {
                        (user && (user.role.title === 'Администратор' || user.idEmployee === Number(idEmployee))) && (
                            <div className="file-input__wrapper">
                                <label htmlFor={'upload-photo-employer-edit'}>
                                    <span>Загрузить фото работы</span>
                                    <input
                                        type="file"
                                        id="upload-photo-employer-edit"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(e)}
                                    />
                                </label>
                            </div>
                        )
                    }
                    <h2 className={'section-title'}>Работы</h2>
                    <SliderEmployeeWorks idEmployee={Number(idEmployee)}/>
                </section>
                <section className="info-section services">
                    <h2 className={'section-title'}>Услуги</h2>
                    <span className="advice">нажмите, чтобы записаться</span>
                    <div className="services-container">
                        {
                            services.map((service, key) => (
                                <ServiceCard key={key} idService={service.idService} idEmployee={service.idEmployee}
                                             title={service.title} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </motion.div>
    );
};
