import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const users = async () => {
  try {
    const res = await fetch(`https://mycartbackend.vercel.app/api/users`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = createAsyncThunk(
  "Login/user",
  async ({ email, pass }) => {
    try {
      const res = await axios.get(
        `https://mycartbackend.vercel.app/api/users/user/${email}`
      );
      const data = res.data;
      if (data.password !== pass) {
        const res = {
          rejected: true,
          message: "Wrong password",
        };
        return res;
      } else {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const signUpUser = createAsyncThunk("SignUp/user", async (newUser) => {
  try {
    const usersData = await users();
    const exists =
      usersData.length > 0 &&
      usersData.find((user) => user.email == newUser.email);
    if (exists) {
      const res = {
        rejected: true,
        message: "Already have account please login",
      };

      return res;
    } else {
      const res = await axios.post(
        "https://mycartbackend.vercel.app/api/users",
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    }
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
  reducers: {
    deleteProfile: (state, action) => {
      return {
        ...state,
        profile: {},
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload?.rejected) {
        state.error = action.payload.message;
      } else {
        state.status = "Success";
        state.profile = action.payload;
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "Error";
      state.error = "Failed to login";
    });
    builder.addCase(signUpUser.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      if (action.payload?.rejected) {
        state.error = action.payload.message;
      } else {
        state.status = "Success";
        state.profile = action.payload;
      }
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.status = "Error";
      state.error = "Failed to Sign up";
    });
  },
});

export const { deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
