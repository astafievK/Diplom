import {FC} from "react";
import {motion} from "framer-motion";
import {AddProductButton} from "./AddProductButton.tsx";

export const SectionProducts: FC = () => {
    return(
        <motion.div
            className="admin-section section-products"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Товары</h1>
            <AddProductButton/>
            <div className="products-wrapper">

            </div>
        </motion.div>
    )
}
