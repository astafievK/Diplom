import React, {FC} from "react";
import {motion} from "framer-motion";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setRadioSelectedTime,setTimeHours,setTimeMinutes} from "../../api/slices/timeFormSlice.ts";

export const RadiosTime: FC = () => {
    const dispatch = useAppDispatch()
    const {radioSelectedTime} = useTypedSelector(state => state.timeFormReducer);

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTimeHours(e.currentTarget.getAttribute('data-hours')))
        dispatch(setTimeMinutes(e.currentTarget.getAttribute('data-minutes')))
        dispatch(setRadioSelectedTime(e.currentTarget.getAttribute('id')))
    }

    return (
        <motion.div className={"radios-wrapper form-elem"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className={"radios-label__wrapper"}>
                <span className="label">Время</span>
            </div>
            <div className="radios">
                <input type={"radio"} name={"timeSelectorButton"} id={"time1"} data-hours={"14"} data-minutes={"00"}
                       onChange={handleRadioClick}
                       checked={radioSelectedTime === `time1`}/>
                <label htmlFor={"time1"}>14:00</label>
            </div>
        </motion.div>
    )
}