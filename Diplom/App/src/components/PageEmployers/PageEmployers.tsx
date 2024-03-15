import {FC} from "react";
import StyledCheckBox from "../StyledCheckBox/StyledCheckBox.tsx";
import EmployerCard from "./EmployerCard.tsx";

const PageHome: FC = () => {
    return(
        <div className="page employers">
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
            </div>
        </div>
    )
}

export default PageHome