import {FC} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperReviews: FC = () => {
    return(
        <section className={"reviews"}>
            <Swiper
                loop={true}
                slidesPerView={1}
                slideToClickedSlide={true}
                grabCursor={true}
                mousewheel={true}
                centeredSlides={true}
            >
                <SwiperSlide>
                    <span>Тест отзыва 1</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Тест отзыва 1</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Тест отзыва 1</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Тест отзыва 1</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Тест отзыва 1</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Тест отзыва 1</span>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default SwiperReviews