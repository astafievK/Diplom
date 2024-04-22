import {FC} from "react";
import {motion} from "framer-motion";

const PageServices: FC = () => {
    return(
        <motion.div
            className="page services"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Услуги</h1>
        </motion.div>
    )
}

export default PageServices