import {createSlice} from "@reduxjs/toolkit";

interface IPriceListModalSlice {
    isPriceListOpen: boolean
    priceListIdService: number
}

const priceListModalSlice = createSlice({
    name: 'priceLise',
    initialState: {
        isPriceListOpen: false
    } as IPriceListModalSlice,
    reducers: {
        setPriceListIsOpen: (state, action) => {
            state.isPriceListOpen = action.payload;
            action.payload ?
                document.getElementById('body')!.classList.add('scroll-locked') :
                document.getElementById('body')!.classList.remove('scroll-locked')
        },
        setPriceListIdService: (state, action) => {
            state.priceListIdService = action.payload
        },
    }
})

export const {
    setPriceListIsOpen,
    setPriceListIdService
} = priceListModalSlice.actions

export default priceListModalSlice.reducer