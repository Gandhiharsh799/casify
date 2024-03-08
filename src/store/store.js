import { configureStore } from "@reduxjs/toolkit";
import casesReducer from './caseSlice'
import authReducer from './authSlice'
import userprofileReducer from './userProfileSlice'

export const store = configureStore({
    reducer: {
        cases: casesReducer,
        authentication: authReducer,
        userprofile: userprofileReducer
    }
})