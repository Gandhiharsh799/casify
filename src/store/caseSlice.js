import { createSlice } from "@reduxjs/toolkit";

export const casesSlice = createSlice({
  name: "cases",
  initialState: {
    cases: [],
  },
  reducers: {
    addCase: (state, action) => {
      return {
        ...state,
        cases: [...state.cases, action.payload],
      };
    },
  },
});

export const { addCase } = casesSlice.actions;

export default casesSlice.reducer;
