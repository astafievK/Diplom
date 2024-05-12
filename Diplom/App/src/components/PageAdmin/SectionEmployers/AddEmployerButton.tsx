import {FC} from "react";
import { useAppDispatch } from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/addEmployerModalSlice.ts';

export const AddEmployerButton: FC = () => {
    const dispatch = useAppDispatch();

    const handleButtonClick = () => {
        dispatch(setIsOpen(true))
    }

    return(
        <button className="add-employer__wrapper add-button" onClick={handleButtonClick}>
            <span>Добавить сотрудника</span>
        </button>
    )
}
