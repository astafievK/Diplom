import {createSlice} from "@reduxjs/toolkit"

const currentDate = new Date();

interface ITimeFormSlice {
    idService: number,
    idEmployee: number
    nameEmployee: string
    nameService: string
    dateYear: number,
    dateMonth: number,
    dateDay: number
    dateHours: number
    dateMinutes: number
}


const timeFormSlice = createSlice({
    name: 'timeForm',
    initialState: {
        dateYear: currentDate.getFullYear(),
        dateMonth: currentDate.getMonth() + 1,
    } as ITimeFormSlice,
    reducers: {
        setIdService: (state, action) => {
            state.idService = action.payload
        },
        setIdEmployee: (state, action) => {
            state.idEmployee = action.payload
        },
        setNameEmployee: (state, action) => {
            state.nameEmployee = action.payload
        },
        setNameService: (state, action) => {
            state.nameService = action.payload
        },
        setDateYear: (state, action) => {
            state.dateYear = action.payload
        },
        setDateMonth: (state, action) => {
            state.dateMonth = action.payload
        },
        setDateDay: (state, action) => {
            state.dateDay = action.payload
        },
        setDateHours: (state, action) => {
            state.dateHours = action.payload
        },
        setDateMinutes: (state, action) => {
            state.dateMinutes = action.payload
        },
    }
})

export const {
    setIdService,
    setIdEmployee,
    setNameEmployee,
    setNameService,
    setDateMinutes,
    setDateHours,
    setDateYear,
    setDateMonth,
    setDateDay,
} = timeFormSlice.actions

export default timeFormSlice.reducer