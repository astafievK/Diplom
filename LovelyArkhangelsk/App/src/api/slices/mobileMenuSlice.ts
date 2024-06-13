import {createSlice} from "@reduxjs/toolkit";

interface IMobileMenuSlice {
    isOpen: boolean;
}

const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState: {
        isOpen: false
    } as IMobileMenuSlice,
    reducers: {
        swap: (state) => {
            state.isOpen = !state.isOpen
        },
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
            action.payload ?
                document.getElementById('body')!.classList.add('scroll-locked') :
                document.getElementById('body')!.classList.remove('scroll-locked')
        },
    }
})

export const {
    swap,
    setIsOpen,
} = mobileMenuSlice.actions
export default mobileMenuSlice.reducer