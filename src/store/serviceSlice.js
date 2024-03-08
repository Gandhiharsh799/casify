import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
  },
  reducers: {
    addService: (state, action) => {
      state.services.push(action.payload);
    },
  },
});

export const { addService } = serviceSlice.actions;

export default serviceSlice.reducer;
