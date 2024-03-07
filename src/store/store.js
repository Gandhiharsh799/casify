import { configureStore } from "@reduxjs/toolkit";
import casesReducer from './caseSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        cases: casesReducer,
        authentication: authReducer
    }
})