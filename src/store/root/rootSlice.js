import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { setOpen } = rootSlice.actions;

export default rootSlice.reducer;