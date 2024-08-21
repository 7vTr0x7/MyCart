import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [
      {
        name: "John Doe",
        _id: "1",
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
    deleteAddress: (state, action) => {
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.userId != action.payload
        ),
      };
    },
  },
});

export const { addAddress, editAddress, deleteAddress } = addressSlice.actions;

export default addressSlice.reducer;
