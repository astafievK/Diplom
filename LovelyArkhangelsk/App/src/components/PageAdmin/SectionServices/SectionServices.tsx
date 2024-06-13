import {FC} from "react";
import {motion} from "framer-motion";
import { AddServiceButton } from './AddServiceButton.tsx';
import { Services } from '../../PageServices/Services.tsx';

export const SectionServices: FC = () => {
    return(
        <motion.div
            className="admin-section section-services"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Услуги</h1>
            <AddServiceButton />
            <Services isAdmin={true}/>
        </motion.div>
    )
}
