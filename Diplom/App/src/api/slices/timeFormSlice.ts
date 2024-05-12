import {createSlice} from "@reduxjs/toolkit";
import {getMonthByNumber} from "../../utils/dateFormatter.ts";

const currentDate = new Date();

interface ITimeFormSlice {
    serviceId: number
    employerId: number
    serviceName: string
    employerName: string
    dateDay: string
    dateMonthNumber: number
    dateMonthFormatted: string
    dateMonthString: string
    dateYear: number
    timeHours: string
    timeMinutes: string
    radioSelectedDate: string
    radioSelectedTime: string
    phoneNumber: string
    phoneIsFilled: boolean
    clientName: string
    clientNameIsFilled: boolean
}

const timeFormSlice = createSlice({
    name: 'timeForm',
    initialState: {
        dateYear: currentDate.getFullYear(),
        dateMonthNumber: currentDate.getMonth() + 1,
        dateMonthString: getMonthByNumber(currentDate.getMonth() + 1),
        phoneIsFilled: false,
        clientNameIsFilled: false
    } as ITimeFormSlice,
    reducers: {
        setServiceId: (state, action) => {
            state.serviceId = action.payload
        },
        setServiceName: (state, action) => {
            state.serviceName = action.payload
        },
        setEmployerId: (state, action) => {
            state.employerId = action.payload
        },
        setEmployerName: (state, action) => {
            state.employerName = action.payload
        },
        setDateDay: (state, action) => {
            state.dateDay = action.payload
        },
        setDateMonthNumber: (state, action) => {
            state.dateMonthNumber = action.payload
        },
        setDateMonthFormatted: (state, action) => {
            state.dateMonthFormatted = action.payload
        },
        setDateMonthString: (state, action) => {
            state.dateMonthString = action.payload
        },
        setTimeHours: (state, action) => {
            state.timeHours = action.payload
        },
        setTimeMinutes: (state, action) => {
            state.timeMinutes = action.payload
        },
        setRadioSelectedDate: (state, action) => {
            state.radioSelectedDate = action.payload
        },
        setRadioSelectedTime: (state, action) => {
            state.radioSelectedTime = action.payload
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        setPhoneIsFilled: (state, action) => {
            state.phoneIsFilled = action.payload
        },
        setClientName: (state, action) => {
            state.clientName = action.payload
        },
        setClientNameIsFilled: (state, action) => {
            state.clientNameIsFilled = action.payload
        },
    }
})

export const {
    setEmployerId,
    setEmployerName,
    setServiceId,
    setServiceName,
    setDateDay,
    setDateMonthNumber,
    setDateMonthFormatted,
    setDateMonthString,
    setTimeHours,
    setTimeMinutes,
    setRadioSelectedDate,
    setRadioSelectedTime,
    setPhoneNumber,
    setPhoneIsFilled,
    setClientName,
    setClientNameIsFilled,

} = timeFormSlice.actions

export default timeFormSlice.reducer