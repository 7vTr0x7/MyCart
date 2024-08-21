import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from "axios";

export const loginUser = createAsyncThunk("Login/user", async (email) => {
  try {
    const res = await axios.get(
      `https://mycartbackend.vercel.app//api/users/user/${email}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {
      _id: "1",
      firstName: "Non",
      lastName: "Non",
      email: "non@gmail.com",
      password: "1234",
    },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "Success";
      state.profile = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "Error";
      state.error = action.payload?.message;
    });
  },
});

export default profileSlice.reducer;
