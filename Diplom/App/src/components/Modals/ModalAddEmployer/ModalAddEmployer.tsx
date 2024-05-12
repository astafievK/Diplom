import { FC } from 'react';
import {useAppDispatch, useTypedSelector} from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/addEmployerModalSlice.ts';
import { ServiceField } from '../ServiceField.tsx';

export const ModalAddEmployer: FC = () => {
    const dispatch = useAppDispatch();

    const { isOpen } = useTypedSelector(
        (state) => state.addEmployerModalReducer,
    );

    const handleCrossCancelSpoilerClick = () => {
        dispatch(setIsOpen(false))
    }

    return (
        <div className={'modal add-employer__modal' + (isOpen ? ' active' : '')}>
            <div className="container">
                <div className="container-item photo">
                    <div className="photo-wrapper">
                        <img src="/images/no-photo.jpg" alt="" />
                    </div>
                    <div className="actions">
                        <div className="file-input__wrapper">
                            <label htmlFor={'upload-photo'}>
                                <span>Загрузить фото</span>
                                <input
                                    type="file"
                                    id="upload-photo"
                                    accept="image/*"
                                />
                            </label>
                        </div>
                        <input type="text" id="input-experience" placeholder={"Стаж (лет)"}/>
                    </div>
                </div>
                <div className="container-item fields">
                    <input
                        type="text"
                        className="field field-surname"
                        placeholder={'Фамилия'}
                    />
                    <input
                        type="text"
                        className="field field-name"
                        placeholder={'Имя'}
                    />
                    <input
                        type="text"
                        className="field field-patronymic"
                        placeholder={'Отчество'}
                    />
                </div>

                <div className="container-item services">
                    <ServiceField serviceId={1} serviceTitle={"Маникюр"} isSelected={false}/>
                    <ServiceField serviceId={2} serviceTitle={"Педикюр"} isSelected={false}/>
                    <ServiceField serviceId={3} serviceTitle={"Ламинирование ресниц"} isSelected={false}/>
                    <ServiceField serviceId={4} serviceTitle={"Парикмахерские услуги"} isSelected={false}/>
                    <ServiceField serviceId={5} serviceTitle={"Перманентный макияж"} isSelected={false}/>
                </div>

                <div className="container-item actions">
                    <button id={'create-btn'}>Создать</button>
                    <button
                        id={'cancel-btn'}
                        onClick={handleCrossCancelSpoilerClick}
                    >
                        Отмена
                    </button>
                </div>
                <div className="cross" onClick={handleCrossCancelSpoilerClick}></div>
            </div>
            <div className="spoiler" onClick={handleCrossCancelSpoilerClick}></div>
        </div>
    );
}
