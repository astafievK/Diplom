import { createSlice } from '@reduxjs/toolkit';

interface IEditServiceModalSlice {
    isOpen: boolean;
    idService: number
    title: string;
    description: string;
    price: number,
    duration: number
}

const editServiceModalSlice = createSlice({
    name: 'modalEditService',
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
        setIdService: (state, action) => {
            state.idService = action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setDuration: (state, action) => {
            state.duration = action.payload
        },
    },
});

export const {
    setIsOpen,
    setIdService,
    setTitle,
    setDescription,
    setPrice,
    setDuration
} = editServiceModalSlice.actions;

export default editServiceModalSlice.reducer;
