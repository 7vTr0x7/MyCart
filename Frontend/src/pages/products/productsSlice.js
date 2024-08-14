import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    addProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    filteredProducts: (state, action) => {
      return {
        ...state,
        filteredProducts: action.payload,
      };
    },
  },
});

export const { addProducts, filteredProducts } = productSlice.actions;
export default productSlice.reducer;
