import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find((id) => id == action.payload);
      if (!exists) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      }
    },
    removeFromWishlist: (state, action) => {
      return {
        ...state,
        wishlist: state.wishlist.filter((id) => id != action.payload),
      };
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
