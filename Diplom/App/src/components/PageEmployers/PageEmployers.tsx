import {FC} from "react";
import EmployerCard from "./EmployerCard.tsx";
import {motion} from "framer-motion";

const PageHome: FC = () => {
    return(
        <motion.div
            className="page employers-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Наши мастера</h1>
            <div className={"employers-wrapper"}>
                <EmployerCard employerId={1}/>
                <EmployerCard employerId={2}/>
                <EmployerCard employerId={3}/>
                <EmployerCard employerId={4}/>
                <EmployerCard employerId={5}/>
            </div>
        </motion.div>
    )
}

export default PageHome