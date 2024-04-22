import {FC} from "react";
import {motion} from "framer-motion";

const PageServicesHistory: FC = () => {
    return(
        <motion.div
            className="page services-history"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>История услуг</h1>
        </motion.div>
    )
}

export default PageServicesHistory