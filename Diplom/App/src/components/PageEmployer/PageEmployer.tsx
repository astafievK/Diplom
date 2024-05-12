import { FC } from 'react';
import { motion } from 'framer-motion';
//import { useParams } from 'react-router-dom';
import './flickity.css';
import Flickity from 'react-flickity-component';

interface PageEmployerProps {}

export const PageEmployer: FC<PageEmployerProps> = () => {
    //const { employerId } = useParams();

    return (
        <motion.div
            className="page employer-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <div className="employer-info">
                <section className="info-section head">
                    <div className="image-wrapper">
                        <img src={'/images/no-photo.jpg'} alt={''} />
                    </div>
                    <h1 className={'employer-name'}>
                        Астафьев Кирилл Александрович
                    </h1>
                    <div className="info">
                        <span className={'experience'}>10 лет</span>
                        <span className={'sep'}>•</span>
                        <span className="works">125 работ</span>
                    </div>
                </section>
                <section className="info-section works">
                    <h2 className={'section-title'}>Работы</h2>
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
                </section>
                <section className="info-section services">
                    <h2 className={'section-title'}>Услуги</h2>
                    <span className="advice">нажмите, чтобы записаться</span>
                    <div className="services-container">
                        <div className="service" data-service={1}>
                            Маникюр
                        </div>
                        <div className="service" data-service={2}>
                            Педикюр
                        </div>
                        <div className="service" data-service={3}>
                            Ламинирование бровей
                        </div>
                        <div className="service" data-service={4}>
                            Депиляция
                        </div>
                        <div className="service" data-service={5}>
                            Ботокс бровей
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};
