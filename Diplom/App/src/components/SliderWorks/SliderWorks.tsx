import { FC } from 'react';
import '../../flickity.css';
import Flickity from 'react-flickity-component';

interface PageEmployerProps {
    employerId: number | null
}

export const SliderWorks: FC<PageEmployerProps> = () => {
    return (
        <Flickity
            className={'slider'}
            elementType={'div'}
            disableImagesLoaded={false}
            options={{
                initialIndex: 1,
                wrapAround: true,
                autoPlay: 2000,
                pauseAutoPlayOnHover: true,
                imagesLoaded: true,
                pageDots: false,
                adaptiveHeight: true,
                selectedAttraction: 0.2,
                friction: 0.8,
                groupCells: 2,
            }}
            static
        >
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
            <div className="image-wrapper">
                <img src={'/images/no-photo.jpg'} alt={''} />
            </div>
        </Flickity>
    );
}
