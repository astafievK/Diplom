import { createSlice } from '@reduxjs/toolkit';

interface IAddServiceModalSlice {
    isOpen: boolean;
    imagePath: string;
    title: string;
    description: string;
}

const addServiceModalSlice = createSlice({
    name: 'modalAddService',
    initialState: {
        isOpen: false,
    } as IAddServiceModalSlice,
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
} = addServiceModalSlice.actions;

export default addServiceModalSlice.reducer;
