import {FC} from "react";
import {motion} from "framer-motion";

const PageCart: FC = () => {
    return(
        <motion.div
            className="page cart-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Корзина</h1>
        </motion.div>
    )
}

export default PageCart