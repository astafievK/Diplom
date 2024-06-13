import { createSlice } from '@reduxjs/toolkit';

interface IAddEmployeeModalSlice {
    isOpen: boolean;
    name: string
    surname: string
    patronymic: string
    experience: number
    servicesIds: number[]
}

const addEmployeeModalSlice = createSlice({
    name: 'modalAddEmployee',
    initialState: {
        isOpen: false,
        servicesIds: [] as number[]
    } as IAddEmployeeModalSlice,
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
            action.payload ?
                document.getElementById('body')!.classList.add('scroll-locked') :
                document.getElementById('body')!.classList.remove('scroll-locked')
        },
    },
});

export const {
    setIsOpen
} = addEmployeeModalSlice.actions;

export default addEmployeeModalSlice.reducer;
