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
    updateQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (prod) => prod._id === action.payload._id
      );
      if (state.cart[index].quantity >= 0) {
        state.cart[index] = {
          ...state.cart[index],
          quantity: action.payload.quantity,
        };
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
