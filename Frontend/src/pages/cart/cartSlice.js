import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    productIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.find((prod) => prod._id == action.payload._id);
      if (!exists) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          productIds: [...state.productIds, action.payload._id],
        };
      }
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((prod) => prod._id != action.payload),
        productIds: state.productIds.filter((id) => id != action.payload),
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
