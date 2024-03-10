import {FC} from "react";

interface StyledCheckBoxProps {
    title: string
}

const StyledCheckBox: FC<StyledCheckBoxProps> = (props) => {
    return(
        <>
            <input className={"checkbox-styled"} type="checkbox" id={"employer-category"} name={`employer_${props.title}`} value={props.title}/>
            <label className={"label-styled"} htmlFor={"employer-category"}>
                <span className={"button-text"}>{props.title}</span>
            </label>
        </>
    )
}

export default StyledCheckBox