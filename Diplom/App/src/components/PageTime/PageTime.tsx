import {FC} from "react";
import {motion} from "framer-motion";

const PageTime: FC = () => {
    return(
        <motion.div
            className="page time"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Выбрать время</h1>
        </motion.div>
    )
}

export default PageTime