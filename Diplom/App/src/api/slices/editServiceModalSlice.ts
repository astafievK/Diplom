import { createSlice } from '@reduxjs/toolkit';

interface IEditServiceModalSlice {
    isOpen: boolean;
    imagePath: string;
    title: string;
    description: string;
}

const editServiceModalSlice = createSlice({
    name: 'modalAddService',
    initialState: {
        isOpen: false,
    } as IEditServiceModalSlice,
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
} = editServiceModalSlice.actions;

export default editServiceModalSlice.reducer;
