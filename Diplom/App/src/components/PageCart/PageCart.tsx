import {FC} from "react";
import {motion} from "framer-motion";

const PageCart: FC = () => {
    return(
        <motion.div
            className="page cart"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Корзина</h1>
        </motion.div>
    )
}

export default PageCart