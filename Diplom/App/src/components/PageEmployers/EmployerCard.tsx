import { FC } from 'react';
import { Link } from 'react-router-dom';
import { setEmployerId, setIsOpen } from '../../api/slices/editEmployerModalSlice.ts';
import { useAppDispatch } from '../../store/hooks/redux.ts';

interface EmployerCardProps {
    isAdmin?: boolean;
    employerId: number;
}

const EmployerCard: FC<EmployerCardProps> = (props) => {
    const employerId = props.employerId
    const dispatch = useAppDispatch();

    const handleChangeButtonClick = () => {
        dispatch(setIsOpen(true))
        dispatch(setEmployerId(employerId))
    }

    const handleDeleteButtonClick = () => {
        alert("Удалено: " + employerId)
    }

    return (
        <div className={'employer-card__wrapper'}>
            <Link className={'employer-card'} to={`/employers/${employerId}`}>
                <div className="photo-wrapper">
                    <img
                        className={'employer-card__photo'}
                        src={'/images/no-photo.jpg'}
                        alt={'Изображение мастера'}
                    />
                    <div className="advice">
                        нажмите, чтобы увидеть портфолио
                    </div>
                </div>
                <div className="employer-card__info">
                    <div className="bio">
                        <span className={'fullname'}>
                            Астафьев Кирилл Александрович
                        </span>
                        <div className="exp-and-works">
                            <span className={'experience'}>10 лет стажа</span>
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
        </div>
    );
};

export default EmployerCard;
