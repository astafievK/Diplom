import React, {FC, useState} from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setEmployerId, setEmployerName} from "../../api/slices/timeFormSlice.ts";
import {motion} from "framer-motion";

export const SelectEmployer: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useAppDispatch()
    const {employerName} = useTypedSelector(state => state.timeFormReducer);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        dispatch(setEmployerName(e.currentTarget.textContent!))
        dispatch(setEmployerId(Number(e.currentTarget.getAttribute("data-value"))))
    }

    return (
        <motion.div className={`dropdown form-elem ${isExpanded ? 'expanded' : ''}`} onClick={handleButtonClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <input type="text" className="dropdown-button" autoComplete={"off"}
                   placeholder="Мастер" value={employerName} readOnly={true}/>
            <div className="dropdown-content" id="dropdownContent">
                <span className={"dropdown-content__item"} data-value={"1"} onClick={handleItemClick}>Астафьев Кирилл Александрович</span>
                <span className={"dropdown-content__item"} data-value={"2"} onClick={handleItemClick}>Степанов Степан Александрович</span>
            </div>
        </motion.div>
    )
}