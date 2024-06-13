import {FC} from "react";
import { useAppDispatch } from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/addServiceModalSlice.ts';

export const AddServiceButton: FC = () => {
    const dispatch = useAppDispatch();

    const handleButtonClick = () => {
        dispatch(setIsOpen(true))
    }

    return(
        <div className="add-product__wrapper add-button" onClick={handleButtonClick}>
            <span>Добавить услугу</span>
        </div>
    )
}
