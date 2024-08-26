import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "addToCart",
  async ({ userId, prodId }) => {
    try {
      const res = await fetch(
        `https://mycartbackend.vercel.app/api/users/user/${userId}/cart`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ prodId }),
        }
      );

      if (!res.ok) {
        console.log("Failed to add to cart");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    productIds: [],
  },
  reducers: {
    incQuantity: (state, action) => {
      const index = state.cart.findIndex((prod) => prod._id === action.payload);

      if (state.cart[index].quantity > 0) {
        state.cart[index].quantity = state.cart[index].quantity + 1;
      } else {
        return state;
      }
    },
    decQuantity: (state, action) => {
      const index = state.cart.findIndex((prod) => prod._id === action.payload);

      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity = state.cart[index].quantity - 1;
      } else {
        return state;
      }
    },
  },
});

export const { removeFromCart, incQuantity, decQuantity } = cartSlice.actions;

export default cartSlice.reducer;
