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
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          productIds: [...state.productIds, action.payload._id],
        };
      } else {
        const index = state.cart.findIndex(
          (prod) => prod._id === action.payload
        );
        state.cart[index] = {
          ...state.cart[index],
          quantity: state.cart[index].quantity + 1,
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
    increaseQuantity: (state, action) => {
      const index = state.cart.findIndex((prod) => prod._id === action.payload);
      state.cart[index] = {
        ...state.cart[index],
        quantity: state.cart[index].quantity + 1,
      };
    },
    decreaseQuantity: (state, action) => {
      const index = state.cart.findIndex((prod) => prod._id === action.payload);
      state.cart[index] = {
        ...state.cart[index],
        quantity: state.cart[index].quantity - 1,
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
