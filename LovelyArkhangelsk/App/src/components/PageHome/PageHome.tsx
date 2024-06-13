// Импорт необходимых библиотек и комопнентов
import {FC} from "react";
import YandexMaps from "../YandexMaps/YandexMaps.tsx";
import {motion} from "framer-motion";
import { SliderWorks } from '../SliderWorks/SliderWorks.tsx';
import { Link } from 'react-router-dom';
import { SliderEmployees } from '../SliderEmployees/SliderEmployees.tsx';

// Инициализация компонента PageHome
const PageHome: FC = () => {
    return(
        <>
            <motion.div
                className="page home-container"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
            >
                <h1>Главная</h1>
                <div className="home-elem employees">
                    <Link className={'link'} to={"/employees"}>Наши мастера</Link>
                    <SliderEmployees/> { /* Слайдер с карточками работников */ }
                </div>
                <div className="home-elem works">
                    <Link className={'link'} to={"/works"}>Работы мастеров</Link>
                    <SliderWorks/>  { /* Слайдер с плитками работ */ }
                </div>
                <YandexMaps />  { /* Использование API сервиса "Яндекс.Карты" */ }
            </motion.div>
        </>
    )
}

// Экспорт созданного компонента для возможности использования в будущем
export default PageHome