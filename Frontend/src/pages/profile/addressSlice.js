import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const addressSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [
      {
        name: "John Doe",
        userId: "1",
        houseNo: "123A",
        street: "Elm Street",
        city: "Springfield",
        state: "Illinois",
        country: "USA",
        postalCode: "62704",
        mobileNumber: 1234567890,
      },
    ],
  },
  reducers: {
    addAddress: (state, action) => {
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
    },
    editAddress: (state, action) => {
      const index = state.addresses.findIndex(
        (addr) => addr.userId == action.payload.id
      );
      state.addresses[index] = action.payload.newAddress;
    },
  },
});

export const { addAddress, editAddress } = addressSlice.actions;

export default addressSlice.reducer;
