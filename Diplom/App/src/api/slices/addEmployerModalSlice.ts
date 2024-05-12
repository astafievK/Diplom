import { createSlice } from '@reduxjs/toolkit';

interface IAddEmployerModalSlice {
    isOpen: boolean;
    name: string
    surname: string
    patronymic: string
    experience: number
    servicesIds: number[]
}

const addEmployerModalSlice = createSlice({
    name: 'modalAddEmployer',
    initialState: {
        isOpen: false,
        servicesIds: [] as number[]
    } as IAddEmployerModalSlice,
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
} = addEmployerModalSlice.actions;

export default addEmployerModalSlice.reducer;
