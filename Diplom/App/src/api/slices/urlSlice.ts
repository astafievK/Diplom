import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUrlSlice {
    url: string;
}

const urlSlice = createSlice({
    name: 'url',
    initialState: {
        url: "home"
    } as IUrlSlice,
    reducers: {
        setUrl: (state, action: PayloadAction<string>) => {
            state.url = action.payload
        },
    }
})

export const {
    setUrl
} = urlSlice.actions
export default urlSlice.reducer