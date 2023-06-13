import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '../slices/contactsSlice'

 export const store = configureStore({
    reducer: {
        contactReducer:contactReducer
    }
})