import React, {FC, useState} from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {motion} from "framer-motion";
import {setDateMonthNumber, setDateMonthString} from "../../api/slices/timeFormSlice.ts";
import {formatMonth} from "../../utils/dateFormatter.ts";

export const SelectMonth: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useAppDispatch()
    const {dateMonthString} = useTypedSelector(state => state.timeFormReducer);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        dispatch(setDateMonthString(e.currentTarget.textContent!))
        dispatch(setDateMonthNumber(formatMonth(e.currentTarget.getAttribute('data-value')!)))
    }

    return (
        <motion.div className={`dropdown form-elem ${isExpanded ? 'expanded' : ''}`} onClick={handleButtonClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <input type="text" className="dropdown-button" autoComplete={"off"}
                   placeholder="Месяц" value={dateMonthString} readOnly={true}/>
            <div className="dropdown-content" id="dropdownContent">
                <span className={"dropdown-content__item"} data-value={5} onClick={handleItemClick}>Май</span>
                <span className={"dropdown-content__item"} data-value={6} onClick={handleItemClick}>Июнь</span>
                <span className={"dropdown-content__item"} data-value={7} onClick={handleItemClick}>Июль</span>
            </div>
        </motion.div>
    )
}