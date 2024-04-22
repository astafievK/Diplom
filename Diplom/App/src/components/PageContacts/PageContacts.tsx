import {FC} from "react";
import { motion } from "framer-motion"

const PageContacts: FC = () => {
    return(
        <motion.div
            className="page contacts"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Контакты</h1>
        </motion.div>
    )
}

export default PageContacts