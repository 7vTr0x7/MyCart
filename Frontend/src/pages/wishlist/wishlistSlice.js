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
export const removeFromWishlist = createAsyncThunk(
  "removeFromWishlist",
  async ({ userId, prodId }) => {
    try {
      const res = await fetch(
        `https://mycartbackend.vercel.app/api/users/user/${userId}/wishlist`,
        {
          method: "DELETE",
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

export const readWishlist = createAsyncThunk("readWishlist", async (userId) => {
  try {
    const res = await fetch(
      `https://mycartbackend.vercel.app/api/users/user/${userId}/wishlist`
    );

    if (!res.ok) {
      console.log("Failed to read wishlist");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    wishlistProductIds: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addProductsToWishlist: (state, action) => {
      return {
        ...state,
        wishlist: [...action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToWishlist.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(addToWishlist.rejected, (state, action) => {
      state.status = "failed";
      state.error = "failed to add to wishlist";
    });
    builder.addCase(readWishlist.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(readWishlist.fulfilled, (state, action) => {
      state.status = "Success";
      if (action.payload && action.payload.length > 0) {
        state.wishlistProductIds = action.payload;
      }
    });
    builder.addCase(readWishlist.rejected, (state, action) => {
      state.status = "failed";
      state.error = "failed to read wishlist";
    });
    builder.addCase(removeFromWishlist.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(removeFromWishlist.fulfilled, (state, action) => {
      state.status = "Success";
    });
    builder.addCase(removeFromWishlist.rejected, (state, action) => {
      state.status = "failed";
      state.error = "failed to remove from wishlist";
    });
  },
});

export const { addProductsToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
