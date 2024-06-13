import React, { FC, useEffect, useState } from 'react';
import {motion} from "framer-motion";
import { useAppDispatch, useTypedSelector } from '../../store/hooks/redux.ts';
import { useGetTimeQuery } from '../../api/methods/timeApi.ts';
import { setDateHours, setDateMinutes } from '../../api/slices/timeFormSlice.ts';

export const RadiosTime: FC = () => {
    const dispatch = useAppDispatch()
    const timeSlice = useTypedSelector(state => state.timeFormReducer)
    const [radioSelectedTime, setRadioSelectedTime] = useState('')
    const { data: timeData=[], refetch } = useGetTimeQuery({
        idEmployee: timeSlice.idEmployee,
        idService: timeSlice.idService,
        dateYear: timeSlice.dateYear,
        dateMonth: timeSlice.dateMonth,
        dateDay: timeSlice.dateDay
    })

    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.currentTarget.getAttribute('id');

        if (id) {
            dispatch(setDateHours(e.currentTarget.getAttribute('data-hours')));
            dispatch(setDateMinutes(e.currentTarget.getAttribute('data-minutes')));
            console.log(timeSlice.dateDay + "." + timeSlice.dateMonth)
            setRadioSelectedTime(id);
        }
    }

    return (
        <motion.div className={"radios-wrapper form-elem"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
            <div className={"radios-label__wrapper"}>
                <span className="label">Время</span>
            </div>
            <div className="radios">
                {
                    timeData.map((time, key) => (
                        <>
                            <input key={key} type={"radio"} name={"timeSelectorButton"} id={`time${key}`}
                                   data-hours={time.timeHours}
                                   data-minutes={time.timeMinutes}
                                   onChange={handleRadioClick}
                                   checked={radioSelectedTime === `time${key}`}
                                   disabled={time.isLocked}
                            />
                            <label htmlFor={`time${key}`}>{time.time}</label>
                        </>
                    ))
                }
            </div>
        </motion.div>
    )
}