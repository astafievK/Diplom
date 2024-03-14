import {FC} from "react";
import EmployerCard from "./EmployerCard.tsx";

const Employers: FC = () => {
    return(
        <div className={"employers"}>
            <EmployerCard/>
            <EmployerCard/>
            <EmployerCard/>
            <EmployerCard/>
            <EmployerCard/>
        </div>
    )
}

export default Employers