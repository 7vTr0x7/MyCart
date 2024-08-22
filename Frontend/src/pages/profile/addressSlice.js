import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addAddress = createAsyncThunk(
  "addAddress/user",
  async ({ userId, newAddress }) => {
    try {
      const res = fetch(`/api/users/user/${userId}/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAddress),
      });

      if (!res.ok) {
        console.log("Failed to add address");
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
  reducers: {
    editAddress: (state, action) => {
      const index = state.addresses.findIndex(
        (addr) => addr._id == action.payload.id
      );
      state.addresses[index] = action.payload.newAddress;
    },
    deleteAddress: (state, action) => {
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address._id != action.payload
        ),
      };
    },
  },
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
  },
});

export const { editAddress, deleteAddress } = addressSlice.actions;

export default addressSlice.reducer;
