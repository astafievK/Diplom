import {FC} from "react";

interface EmployerCardCategoryProps {
    title: string
}

const EmployerCardCategory: FC<EmployerCardCategoryProps> = (props) => {
    return(
        <>
            <div className="category">{props.title}</div>
        </>
    )
}

export default EmployerCardCategory