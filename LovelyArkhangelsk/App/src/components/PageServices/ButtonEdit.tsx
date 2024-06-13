import {FC} from "react";

interface ButtonEditProps {
    idService: number
}
export const ButtonEdit: FC<ButtonEditProps> = () => {
    return(
        <button className="edit">Редактировать</button>
    )
}