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
        close: (state) => {
            state.isOpen = false;
        },
    }
})

export const {
    swap,
    close
} = mobileMenuSlice.actions
export default mobileMenuSlice.reducer