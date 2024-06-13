import {FC} from "react";
import {motion} from "framer-motion";
import { useTypedSelector } from '../../store/hooks/redux.ts';
import { Navigate } from 'react-router-dom';

const PageServicesHistory: FC = () => {
    const {user} = useTypedSelector(state => state.auth)

    return(
        <>
            {
                !user && <Navigate to='/login'/>
            }
            <motion.div
                className="page services-history-container"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
            >
                <h1>История услуг</h1>
            </motion.div>
        </>
    )
}

export default PageServicesHistory