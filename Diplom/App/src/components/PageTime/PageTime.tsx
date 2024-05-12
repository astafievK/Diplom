import React, {FC} from "react";
import {motion} from "framer-motion";
import {SelectEmployer} from "./SelectEmployer.tsx";
import {SelectService} from "./SelectService.tsx";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {RadiosDate} from "./RadiosDate.tsx";
import {RadiosTime} from "./RadiosTime.tsx";
import {
    setClientName,
    setClientNameIsFilled,
    setPhoneIsFilled,
    setPhoneNumber
} from "../../api/slices/timeFormSlice.ts";
import {formatDateMySql} from "../../utils/dateFormatter.ts"

const PageTime: FC = () => {
    const {serviceId, employerId, dateDay, dateMonthNumber, dateMonthFormatted, dateYear, timeHours, timeMinutes, phoneNumber, phoneIsFilled, clientName, clientNameIsFilled} = useTypedSelector(state => state.timeFormReducer);
    const dispatch = useAppDispatch()
    console.log(formatDateMySql(dateDay, dateMonthFormatted, dateYear, timeHours, timeMinutes))

    const phoneHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPhoneNumber(e.currentTarget.value))
        dispatch(setPhoneIsFilled(e.currentTarget.value.length === 11))
    }

    const clientNameHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setClientName(e.currentTarget.value))
        dispatch(setClientNameIsFilled(e.currentTarget.value.length > 0))
        console.log("ClientName: " + clientName)
        console.log("ClientNameIsFilled: " + clientNameIsFilled)
    }

    return(
        <motion.div
            className="page time-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Записаться</h1>
            <div className="time">
                <SelectService/>
                {
                    serviceId != null && <SelectEmployer/>
                }
                {
                    employerId != null && <RadiosDate/>
                }
                {
                    dateDay && dateMonthNumber && dateYear && <RadiosTime/>
                }
                {
                    timeHours && timeMinutes &&
                    <motion.div className={"client-info"}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}>
                        <input className={"number form-elem"} type={"tel"} value={phoneNumber}
                               placeholder={"71234567890"} maxLength={11} onChange={phoneHandleChange}/>
                        <input className={"name form-elem"} type={"text"} value={clientName}
                               placeholder={"Имя"} onChange={clientNameHandleChange}/>
                    </motion.div>
                }
                {
                    phoneIsFilled && clientNameIsFilled &&
                    <motion.button className="confirm" id="timeConfirm"
                                       initial={{opacity: 0}}
                                       animate={{opacity: 1}}
                                       exit={{opacity: 0}}>Подтвердить запись</motion.button>
                }
            </div>
        </motion.div>
    )
}

export default PageTime