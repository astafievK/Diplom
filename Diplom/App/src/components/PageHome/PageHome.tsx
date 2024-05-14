import {FC} from "react";
import YandexMaps from "../YandexMaps/YandexMaps.tsx";
import {motion} from "framer-motion";
import { SliderWorks } from '../SliderWorks/SliderWorks.tsx';
import { Link } from 'react-router-dom';
import { SliderEmployers } from '../SliderEmployers/SliderEmployers.tsx';

const PageHome: FC = () => {
    return(
        <>
            <motion.div
                className="page home-container"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
            >
                <h1>Главная</h1>
                <div className="home-elem">
                    <Link className={'link'} to={"/employers"}>Наши мастера</Link>
                    <SliderEmployers/>
                </div>
                <div className="home-elem">
                    <Link className={'link'} to={"/works"}>Работы мастеров</Link>
                    <SliderWorks employerId={0} />
                </div>
                <YandexMaps />
            </motion.div>
        </>
    )
}

export default PageHome