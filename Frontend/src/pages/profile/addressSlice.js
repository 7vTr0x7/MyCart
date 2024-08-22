import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addAddress = createAsyncThunk(
  "addAddress/user",
  async ({ userId, newAddress }) => {
    try {
      const res = await fetch(
        `https://mycartbackend.vercel.app/api/users/user/${userId}/address`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAddress),
        }
      );

      if (!res.ok) {
        console.log("Failed to add address");
      }

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const readAddress = createAsyncThunk(
  "readAddresses/user",
  async (userId) => {
    try {
      const res = await fetch(
        `https://mycartbackend.vercel.app/api/users/user/${userId}/address`
      );

      if (!res.ok) {
        console.log("Failed to get addresses");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editAddress = createAsyncThunk(
  "editAddress/user",
  async ({ userId, addressId, newAddress }) => {
    try {
      const res = await fetch(
        `https://mycartbackend.vercel.app/api/users/user/${userId}/address/${addressId}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newAddress),
        }
      );

      if (!res.ok) {
        console.log("Failed to edit address");
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const addressSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [
      {
        _id: "1",
        name: "vtr0x _",
        houseNo: "42",
        street: "MG Road",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        postalCode: "560001",
        mobileNumber: 1234567890,
      },
    ],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAddress.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.status = "Success";
      state.addresses = [...state.addresses, action.payload];
    });
    builder.addCase(addAddress.rejected, (state, action) => {
      state.status = "Loading";
      state.error = "Failed to add Address";
    });
    builder.addCase(readAddress.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(readAddress.fulfilled, (state, action) => {
      state.status = "Success";
      if (action.payload.length > 0) {
        state.addresses = action.payload;
      } else {
        return state;
      }
    });
    builder.addCase(readAddress.rejected, (state, action) => {
      state.status = "Loading";
      state.error = "Failed to read Address";
    });
    builder.addCase(editAddress.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(editAddress.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(editAddress.rejected, (state, action) => {
      state.status = "Loading";
      state.error = "Failed to edit Address";
    });
  },
});

export default addressSlice.reducer;
