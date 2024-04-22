import {FC} from "react";
import {motion} from "framer-motion";

const PageProducts: FC = () => {
    return(
        <motion.div
            className="page products"
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 100, opacity: 0}}
        >
            <h1>Товары</h1>
            <div className="products-wrapper">

            </div>
        </motion.div>
    )
}

export default PageProducts