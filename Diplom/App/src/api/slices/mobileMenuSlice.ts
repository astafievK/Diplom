import {createSlice} from "@reduxjs/toolkit";

interface IMobileMenuSlice {
    isOpen: boolean;
}

const mobileMenuSlice = createSlice({
    name: 'selects',
    initialState: {
        isOpen: false
    } as IMobileMenuSlice,
    reducers: {
        swap: (state) => {
            state.isOpen = !state.isOpen
        },
    }
})

export const {
    swap
} = mobileMenuSlice.actions
export default mobileMenuSlice.reducer