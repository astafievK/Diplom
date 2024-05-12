import { createSlice } from '@reduxjs/toolkit';

interface IChangeEmployerModalSlice {
    isOpen: boolean;
    employerId: number;
}

const editEmployerModalSlice = createSlice({
    name: 'modalChangeEmployer',
    initialState: {
        isOpen: false,
    } as IChangeEmployerModalSlice,
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
            action.payload ?
                document.getElementById('body')!.classList.add('scroll-locked') :
                document.getElementById('body')!.classList.remove('scroll-locked')
        },
        setEmployerId: (state, action) => {
            state.employerId = action.payload;
        },
    },
});

export const {
    setIsOpen,
    setEmployerId
} = editEmployerModalSlice.actions;

export default editEmployerModalSlice.reducer;
