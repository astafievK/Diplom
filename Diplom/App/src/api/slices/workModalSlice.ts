import {createSlice} from "@reduxjs/toolkit";

interface IAdminPanelSlice {
    isOpen: boolean
    workId: number | null
}

const adminPanelSlice = createSlice({
    name: 'mobileMenu',
    initialState: {
        isOpen: false,
        workId: null
    } as IAdminPanelSlice,
    reducers: {
        open: (state, action) => {
            state.workId = action.payload
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
            state.workId = null
        }
    }
})

export const {
    open,
    close,
} = adminPanelSlice.actions

export default adminPanelSlice.reducer