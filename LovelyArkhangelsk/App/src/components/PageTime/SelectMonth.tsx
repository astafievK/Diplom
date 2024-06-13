import React, {FC, useState} from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {motion} from "framer-motion";
import { getMonthByNumber } from '../../utils/dateFormatter.ts';
import { setDateMonth } from '../../api/slices/timeFormSlice.ts';

export const SelectMonth: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useAppDispatch()
    const timeSlice = useTypedSelector(state => state.timeFormReducer)

    // Получение месяцев
    const currentMonth = new Date().getMonth() + 1;
    const nextThreeMonths = [];
    for (let i = 0; i < 3; i++) {
        let month = currentMonth + i;

        if (month > 12) {
            month -= 12;
        }

        nextThreeMonths.push(month);
    }

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        dispatch(setDateMonth(e.currentTarget.getAttribute('data-value')))
    }

    return (
        <motion.div className={`dropdown form-elem ${isExpanded ? 'expanded' : ''}`} onClick={handleButtonClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <input type="text" className="dropdown-button" autoComplete={"off"} placeholder="Месяц" value={getMonthByNumber(timeSlice.dateMonth)} readOnly={true}/>
            <div className="dropdown-content" id="dropdownContent">
                {
                    nextThreeMonths.map((month, key) => (
                        <span key={key} className={'dropdown-content__item'} data-value={month} onClick={handleItemClick}>{getMonthByNumber(month)}</span>
                    ))
                }
            </div>
        </motion.div>
    )
}