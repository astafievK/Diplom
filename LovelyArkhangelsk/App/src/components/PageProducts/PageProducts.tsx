import {FC} from "react";
import {motion} from "framer-motion";

const PageProducts: FC = () => {
    return(
        <motion.div
            className="page products-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Товары</h1>
            <div className="products-wrapper">

            </div>
        </motion.div>
    )
}

export default PageProducts