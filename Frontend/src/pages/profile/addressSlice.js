import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { addAddress } = addressSlice.actions;

export default addressSlice.reducer;
