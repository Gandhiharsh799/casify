import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
  },
  reducers: {
    addService: (state, action) => {
      return {
        ...state,
        services: [...state.services, action.payload],
      };
    },
  },
});

export const { addService } = serviceSlice.actions;

export default serviceSlice.reducer;
