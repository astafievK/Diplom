import {FC} from "react";
import Employers from "./Employers.tsx";
import StyledCheckBox from "../StyledCheckBox/StyledCheckBox.tsx";

const PageHome: FC = () => {
    return(
        <div className="page employers">
            <h1>Наши мастера</h1>
            <form name={"employer_category"}>
                <StyledCheckBox title={"Маникюр"}/>
            </form>
            <Employers/>
        </div>
    )
}

export default PageHome