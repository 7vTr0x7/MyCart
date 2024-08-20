import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {
      firstName: "Non",
      lastName: "Non",
      email: "non@gmail.com",
      password: "1234",
    },
  },
});

export default profileSlice.reducer;
