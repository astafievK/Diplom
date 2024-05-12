import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ModalWorkPhotoProps {}

const ModalWorkPhoto: FC<ModalWorkPhotoProps> = () => {
    return (
        <div className={'modal work-photo__modal'}>
            <div className="container">
                <div className="photo-wrapper">
                    <img
                        className="work-photo"
                        src={'/images/no-photo.jpg'}
                        alt={''}
                    />
                </div>
                <div className="info-wrapper">
                    <Link className={'employer-label'} to={'/employers'}>
                        Астафьев Кирилл Александрович
                    </Link>
                </div>
                <div className="controls">
                    <div className="control control-prev">Следующее</div>
                    <div className="control control-next">Предыдущее</div>
                </div>
            </div>
            <div className="spoiler"></div>
        </div>
    );
};
export default ModalWorkPhoto;
