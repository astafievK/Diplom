import { createSlice } from '@reduxjs/toolkit';

interface IEditEmployeeModalSlice {
    isOpen: boolean;
    idEmployee: number;
    name: string
    surname: string
    patronymic: string
    experience: number
}

const editEmployeeModalSlice = createSlice({
    name: 'modalEditEmployee',
    initialState: {
        isOpen: false,
    } as IEditEmployeeModalSlice,
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
            action.payload ?
                document.getElementById('body')!.classList.add('scroll-locked') :
                document.getElementById('body')!.classList.remove('scroll-locked')
        },
        setEmployerId: (state, action) => {
            state.idEmployee = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setSurname: (state, action) => {
            state.surname = action.payload;
        },
        setPatronymic: (state, action) => {
            state.patronymic = action.payload;
        },
        setExperience: (state, action) => {
            state.experience = action.payload;
        },
    },
});

export const {
    setIsOpen,
    setEmployerId,
    setName,
    setPatronymic,
    setExperience,
    setSurname
} = editEmployeeModalSlice.actions;

export default editEmployeeModalSlice.reducer;
