import React, {FC, useState} from "react";
import { useAppDispatch, useTypedSelector } from '../../store/hooks/redux.ts';
import {motion} from "framer-motion";
import { setIdEmployee, setNameEmployee } from '../../api/slices/timeFormSlice.ts';
import { useGetEmployeesByServiceIdQuery } from '../../api/methods/employeeApi.ts';

export const SelectEmployee: FC = () => {
    const timeSlice = useTypedSelector(state => state.timeFormReducer)
    const [isExpanded, setIsExpanded] = useState(false);
    const [inputEmployeeName, setInputEmployeeName] = useState(timeSlice.nameEmployee ? timeSlice.nameEmployee : '')
    const dispatch = useAppDispatch()
    const { data=[] } = useGetEmployeesByServiceIdQuery({idService: timeSlice.idService})

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        setInputEmployeeName(e.currentTarget.textContent!)
        dispatch(setNameEmployee(e.currentTarget.textContent))
        dispatch(setIdEmployee(Number(e.currentTarget.getAttribute("data-value"))))
    }

    return (
        <motion.div className={`dropdown form-elem ${isExpanded ? 'expanded' : ''}`} onClick={handleButtonClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <input type="text" className="dropdown-button" autoComplete={"off"}
                   placeholder="Мастер" value={inputEmployeeName} readOnly={true}/>
            <div className="dropdown-content" id="dropdownContent">
                {
                    data.map((employee) => (
                        <span key={employee.idEmployee} className={'dropdown-content__item'} data-value={employee.idEmployee} onClick={handleItemClick}>{employee.surname} {employee.name} {employee.patronymic}</span>
                    ))
                }
            </div>
        </motion.div>
    )
}