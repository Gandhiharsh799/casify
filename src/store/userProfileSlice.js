import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "userprofile",
  initialState: {
    userData: {
      username: "",
      email: "",
      mobileNumber: "",
      companyAddress: "",
      vatNumber: "",
      crNumber: "",
    },
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userProfileSlice.actions;

export default userProfileSlice.reducer;
