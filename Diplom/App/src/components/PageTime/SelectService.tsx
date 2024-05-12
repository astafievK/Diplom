import React, {FC, useState} from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setServiceId, setServiceName} from "../../api/slices/timeFormSlice.ts";
import {motion} from "framer-motion";

export const SelectService: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useAppDispatch()
    const {serviceName} = useTypedSelector(state => state.timeFormReducer);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        dispatch(setServiceName(e.currentTarget.textContent!))
        dispatch(setServiceId(Number(e.currentTarget.getAttribute("data-value"))))
    }

    return (
        <motion.div className={`dropdown form-elem ${isExpanded ? 'expanded' : ''}`} onClick={handleButtonClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <input type="text" className="dropdown-button" id="searchInputService" autoComplete={"off"} placeholder="Услуга" value={serviceName} readOnly={true}/>
            <div className="dropdown-content" id="dropdownContent">
                <span className={"dropdown-content__item"} data-value={"1"} onClick={handleItemClick}>Педикюр</span>
                <span className={"dropdown-content__item"} data-value={"2"} onClick={handleItemClick}>Манинюр</span>
            </div>
        </motion.div>
    )
}