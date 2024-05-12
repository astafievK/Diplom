import { FC } from 'react';
import {useAppDispatch, useTypedSelector} from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/editEmployerModalSlice.ts';
import { ServiceField } from '../ServiceField.tsx';

export const ModalEditEmployer: FC = () => {
    /*
    ЗАПРОС НА ПОЛУЧЕНИЕ ТЕКУЩИХ ДАННЫХ О СОТРУДНИКЕ ПО ЕГО ID ИЗ REDUX
     */

    const dispatch = useAppDispatch();

    const { isOpen } = useTypedSelector(
        (state) => state.changeEmployerModalReducer,
    );

    const handleCrossCancelSpoilerClick = () => {
        dispatch(setIsOpen(false))
    }

    return (
        <div className={'modal change-employer__modal' + (isOpen ? ' active' : '')}>
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
                        <input type="text" id="input-experience" placeholder={'Стаж (лет)'} />
                    </div>
                </div>
                <div className="container-item fields">
                    <input type="text" className="field field-surname" placeholder={'Фамилия'} />
                    <input type="text" className="field field-surname" placeholder={'Имя'} />
                    <input type="text" className="field field-surname" placeholder={'Отчество'} />
                </div>

                <div className="container-item services">
                    <ServiceField serviceId={1} serviceTitle={'Маникюр'} isSelected={false} />
                    <ServiceField serviceId={2} serviceTitle={'Педикюр'} isSelected={true}/>
                    <ServiceField serviceId={3} serviceTitle={"Ламинирование ресниц"} isSelected={false}/>
                    <ServiceField serviceId={4} serviceTitle={"Парикмахерские услуги"} isSelected={true}/>
                    <ServiceField serviceId={5} serviceTitle={"Перманентный макияж"} isSelected={true}/>
                </div>

                <div className="container-item actions">
                    <button id={'save-btn'}>Сохранить</button>
                    <button id={'cancel-btn'} onClick={handleCrossCancelSpoilerClick}>Отмена</button>
                </div>
                <div className="cross" onClick={handleCrossCancelSpoilerClick}></div>
            </div>
            <div className="spoiler" onClick={handleCrossCancelSpoilerClick}></div>
        </div>
    );
}
