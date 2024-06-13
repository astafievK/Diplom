import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAdminPanelSlice {
    sectionName: string
}

const adminPanelSlice = createSlice({
    name: 'adminPanel',
    initialState: {
        sectionName: "statistic"
    } as IAdminPanelSlice,
    reducers: {
        setSection: (state, action: PayloadAction<string>) => {
            state.sectionName = action.payload
        },
    }
})

export const {
    setSection,
} = adminPanelSlice.actions

export default adminPanelSlice.reducer