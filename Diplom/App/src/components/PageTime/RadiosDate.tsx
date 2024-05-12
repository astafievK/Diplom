import React, {FC, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {
    setDateDay,
    setDateMonthFormatted,
    setDateMonthNumber,
    setRadioSelectedDate
} from "../../api/slices/timeFormSlice.ts";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {SelectMonth} from "./SelectMonth.tsx";
import {formatMonth} from "../../utils/dateFormatter.ts";

interface Day {
    day: string;
    month: string;
    formattedDate: string;
}

export const RadiosDate: FC = () => {
    const dispatch = useAppDispatch()
    const {radioSelectedDate, dateMonthNumber, dateMonthFormatted} = useTypedSelector(state => state.timeFormReducer);

    const useNextTwoWeeksDates = (targetMonth: number): Day[] => {
        const [dates, setDates] = useState<Day[]>([]);

        useEffect(() => {
            const today = new Date();
            const currentMonth = today.getMonth() + 1;
            const nextTwoWeeks: Day[] = [];

            const targetDate = new Date(today.getFullYear(), targetMonth - 1, 1);
            const isCurrentMonth = targetMonth === currentMonth;

            const startDate = isCurrentMonth ? today : targetDate;
            let endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 14)

            if(!isCurrentMonth) {
                endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 28);
            }

            for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const formattedDate = `${day}.${month}`;

                nextTwoWeeks.push({ day, month, formattedDate });
            }

            setDates(nextTwoWeeks);
        }, [targetMonth]);

        return dates;
    };

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setDateDay(e.currentTarget.getAttribute('data-day')))
        dispatch(setDateMonthNumber(formatMonth(e.currentTarget.getAttribute('data-month')!)))
        dispatch(setDateMonthFormatted(e.currentTarget.getAttribute('data-month')))
        dispatch(setRadioSelectedDate(e.currentTarget.getAttribute('id')))
    }

    const dates = useNextTwoWeeksDates(dateMonthNumber);
    console.log(`dateMonthNumber: ${dateMonthNumber}`)
    console.log(`dateMonthFormatted: ${dateMonthFormatted}`)

    return (
        <motion.div className={"radios-wrapper form-elem"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className={"radios-label__wrapper"}>
                <span className="label">Дата</span>
                <SelectMonth/>
            </div>
            <div className="radios">
                {
                    dates.map((date, key) => (
                        <>
                        <input type={"radio"} name={"dateSelectorButton"} id={`date${key+1}`} data-day={date.day} data-month={date.month}
                                   onChange={handleRadioClick}
                                   checked={radioSelectedDate === `date${key+1}`}/>
                            <label htmlFor={`date${key+1}`}>{date.formattedDate}</label>
                        </>
                    ))
                }
            </div>
        </motion.div>
    )
}