import {FC} from "react";
import {motion} from "framer-motion";

export const SectionStatistic: FC = () => {
    return(
        <motion.div
            className="admin-section section-statistic"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Статистика</h1>
        </motion.div>
    )
}
