import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
