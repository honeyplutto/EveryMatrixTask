import { configureStore } from "@reduxjs/toolkit"
import rootReducer from './root/rootSlice'

export const store = configureStore({
    reducer: {
        root: rootReducer
    }
})