import React, { FC, useEffect, useState } from 'react';
import {motion} from "framer-motion";

import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {SelectMonth} from "./SelectMonth.tsx";
import { useGetDatesQuery } from '../../api/methods/timeApi.ts';
import { setDateDay, setDateHours, setDateMinutes } from '../../api/slices/timeFormSlice.ts';

export const RadiosDate: FC = () => {
    const dispatch = useAppDispatch()
    const timeSlice = useTypedSelector(state => state.timeFormReducer)
    const [radioSelectedDate, setRadioSelectedDate] = useState('')
    const { data = [], refetch } = useGetDatesQuery({
        year: timeSlice.dateYear,
        month: timeSlice.dateMonth
    })

    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.currentTarget.getAttribute('id');

        if (id) {
            dispatch(setDateHours(undefined))
            dispatch(setDateMinutes(undefined))
            dispatch(setDateDay(e.currentTarget.getAttribute('data-day')));
            setRadioSelectedDate(id);
        }
    };

    return (
        <motion.div className={"radios-wrapper form-elem"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
            <div className={"radios-label__wrapper"}>
                <span className="label">Дата</span>
                <SelectMonth />
            </div>
            <div className="radios">
                {
                    data.map((date, key) => (
                        <>
                            <input key={key} type={"radio"} name={"dateSelectorButton"} id={`date${key + 1}`}
                                   data-day={date.dateDay} data-month={date.dateMonth}
                                   onChange={handleRadioClick}
                                   checked={radioSelectedDate === `date${key + 1}`} />
                            <label htmlFor={`date${key + 1}`}>{date.date}</label>
                        </>
                    ))
                }
            </div>
        </motion.div>
    )
}