import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    wishlistProductIds: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (prod) => prod._id == action.payload._id
      );
      if (!exists) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
          wishlistProductIds: [...state.wishlistProductIds, action.payload._id],
        };
      }
    },
    removeFromWishlist: (state, action) => {
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (prod) => prod._id != action.payload._id
        ),
        wishlistProductIds: state.wishlistProductIds.filter(
          (id) => id != action.payload._id
        ),
      };
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
