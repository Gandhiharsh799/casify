import { createSlice } from "@reduxjs/toolkit";

export const casesSlice = createSlice({
    name: 'cases',
    initialState: {
        cases: [],
    },
    reducers: {
        addCase: (state,action)=>{
            state.cases.push(action.payload)
        }
    }
})

export const {addCase} = casesSlice.actions;

export default casesSlice.reducer;