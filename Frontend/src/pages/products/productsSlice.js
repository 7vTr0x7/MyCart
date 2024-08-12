import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    allProducts: (state, action) => {
      return {
        ...state,
        products: [...state.products],
      };
    },
  },
});

export const { allProducts } = productSlice.actions;
export default productSlice.reducer;
