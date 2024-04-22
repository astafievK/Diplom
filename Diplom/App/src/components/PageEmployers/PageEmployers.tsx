import {FC} from "react";
import StyledCheckBox from "../StyledCheckBox/StyledCheckBox.tsx";
import EmployerCard from "./EmployerCard.tsx";
import {motion} from "framer-motion";

const PageHome: FC = () => {
    return(
        <motion.div
            className="page employers"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Наши мастера</h1>

            <form name={"employer_category"}>
                <StyledCheckBox title={"Маникюр"}/>
            </form>

            <div className={"employers-wrapper"}>
                <EmployerCard/>
                <EmployerCard/>
                <EmployerCard/>
                <EmployerCard/>
                <EmployerCard/>
                <EmployerCard/>
                <EmployerCard/>
                <EmployerCard/>
                <EmployerCard/>
            </div>
        </motion.div>
    )
}

export default PageHome