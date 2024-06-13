import { FC } from 'react';
import {motion} from "framer-motion";
import { Services } from './Services.tsx';

const PageServices: FC = () => {
    return(
        <motion.div
            className="page services-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Услуги</h1>
            <span className="advice">нажмите, чтобы увидеть расценки</span>
            <Services isAdmin={false}/>
        </motion.div>
    )
}

export default PageServices