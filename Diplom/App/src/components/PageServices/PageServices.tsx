import {FC} from "react";
import {motion} from "framer-motion";
import ServiceCard from "./ServiceCard.tsx";

const PageServices: FC = () => {
    return(
        <motion.div
            className="page services-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Услуги</h1>
            <div className="services">
                <ServiceCard title={"Маникюр"} photoPath={"manikur.jpg"}/>
                <ServiceCard title={"Педикюр"} photoPath={"no-photo.jpg"}/>
                <ServiceCard title={"Наращивание ресниц"} photoPath={"narashivanie.jpeg"}/>
                <ServiceCard title={"Ламинирование ресниц"} photoPath={"laminirovanie.jpg"}/>
                <ServiceCard title={"Парикмахерские услуги"} photoPath={"strijhka.jpg"}/>
                <ServiceCard title={"Кератин, ботокс"} photoPath={"botoks.jpg"}/>
                <ServiceCard title={"Депиляция"} photoPath={"depilacia.jpg"}/>
                <ServiceCard title={"Оформление бровей"} photoPath={"oform_brovey.jpg"}/>
                <ServiceCard title={"Долговременная укладка бровей"} photoPath={"ukladka_brovey.jpg"}/>
                <ServiceCard title={"Ботокс бровей"} photoPath={"no-photo.jpg"}/>
                <ServiceCard title={"Перманентный макияж бровей, глаз, губ"} photoPath={"no-photo.jpg"}/>
                <ServiceCard title={"Удаление некачественного татуажа ремувером"} photoPath={"no-photo.jpg"}/>
            </div>
        </motion.div>
    )
}

export default PageServices