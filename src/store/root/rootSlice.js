import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    age: '10'
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setOpen: (state) => {
            state.isOpen = !state.isOpen
        },
        setAge: (state, action) => {
            state.age = action.payload
        }
    }
})

export const { setOpen, setAge } = rootSlice.actions;

export default rootSlice.reducer;