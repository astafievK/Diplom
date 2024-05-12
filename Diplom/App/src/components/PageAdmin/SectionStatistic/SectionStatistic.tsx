import {FC} from "react";
import {motion} from "framer-motion";

export const SectionStatistic: FC = () => {
    return(
        <motion.div
            className="admin-section section-statistic"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Статистика</h1>
        </motion.div>
    )
}
