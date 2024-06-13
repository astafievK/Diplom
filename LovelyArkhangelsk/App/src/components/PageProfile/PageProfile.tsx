import {FC} from "react";
import {motion} from "framer-motion";

const PageProfile: FC = () => {
    return(
        <motion.div
            className="page profile-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Профиль</h1>
        </motion.div>
    )
}

export default PageProfile