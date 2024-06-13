import React, {FC, useState} from "react";
import { useAppDispatch, useTypedSelector } from '../../store/hooks/redux.ts';
import {motion} from "framer-motion";
import { setIdEmployee, setIdService, setNameEmployee, setNameService } from '../../api/slices/timeFormSlice.ts';
import { useGetServicesQuery } from '../../api/methods/serviceApi.ts';

export const SelectService: FC = () => {
    const timeSlice = useTypedSelector(state => state.timeFormReducer)
    const [isExpanded, setIsExpanded] = useState(false);
    const [serviceTitle, setServiceTitle] = useState(timeSlice.nameService)
    const dispatch = useAppDispatch()
    const { data=[] } = useGetServicesQuery()

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        setServiceTitle(e.currentTarget.textContent!)
        dispatch(setNameService(e.currentTarget.textContent))
        dispatch(setIdService(Number(e.currentTarget.getAttribute("data-value"))))
        dispatch(setIdEmployee(undefined))
        dispatch(setNameEmployee(''))
    }

    return (
        <motion.div className={`dropdown form-elem ${isExpanded ? 'expanded' : ''}`} onClick={handleButtonClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <input type="text" className="dropdown-button" id="searchInputService" autoComplete={"off"} placeholder="Услуга" value={serviceTitle} readOnly={true}/>
            <div className="dropdown-content" id="dropdownContent">
                {
                    data.map((service) => (
                        <span key={service.idService} className={'dropdown-content__item'} data-value={service.idService}
                              onClick={handleItemClick}>{service.title}</span>
                    ))
                }
            </div>
        </motion.div>
    )
}