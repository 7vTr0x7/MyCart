import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToWishlist = createAsyncThunk(
  "addToWishlist",
  async ({ userId, prodId }) => {
    try {
      const res = await fetch(
        `https://mycartbackend.vercel.app/api/users/user/${userId}/wishlist`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prodId }),
        }
      );

      if (!res.ok) {
        console.log("Failed to add to wishlist");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    wishlistProductIds: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToWishlist.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.status = "Success";

      state.wishlistProductIds = [...state.wishlistProductIds, action.payload];
    });
    builder.addCase(addToWishlist.rejected, (state, action) => {
      state.status = "failed";
      state.error = "failed to add to wishlist";
    });
  },
});

export const { removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
