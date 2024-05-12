import {FC} from "react";
import {motion} from "framer-motion";
import {AddProductButton} from "./AddProductButton.tsx";

export const SectionProducts: FC = () => {
    return(
        <motion.div
            className="admin-section section-products"
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 100, opacity: 0}}
        >
            <h1>Товары</h1>
            <AddProductButton/>
            <div className="products-wrapper">

            </div>
        </motion.div>
    )
}
