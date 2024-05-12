import {FC} from "react";
import YandexMaps from "../YandexMaps/YandexMaps.tsx";
import {motion} from "framer-motion";

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
                <YandexMaps/>
            </motion.div>
        </>
    )
}

export default PageHome