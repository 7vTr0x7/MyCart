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

export const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async ({ userId, prodId }) => {
    try {
      const res = await fetch(
        `https://mycartbackend.vercel.app/api/users/user/${userId}/cart`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ prodId }),
        }
      );

      if (!res.ok) {
        console.log("Failed to remove from cart");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const readCart = createAsyncThunk("readCart", async (userId) => {
  try {
    const res = await fetch(
      `https://mycartbackend.vercel.app/api/users/user/${userId}/cart`
    );

    if (!res.ok) {
      console.log("Failed to read cart");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    productIds: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addProductsToCart: (state, action) => {
      const products = action.payload.map((prod) => ({ ...prod, quantity: 1 }));
      return {
        ...state,
        cart: [...products],
      };
    },
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
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.status = "Success";
      state.productIds = action.payload;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.status = "failed";
      state.error = "failed";
    });
    builder.addCase(readCart.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(readCart.fulfilled, (state, action) => {
      state.status = "Success";
      state.productIds = action.payload;
    });
    builder.addCase(readCart.rejected, (state, action) => {
      state.status = "failed";
      state.error = "failed";
    });
    builder.addCase(removeFromCart.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.status = "Success";
      state.productIds = action.payload;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.status = "failed";
      state.error = "failed";
    });
  },
});

export const { addProductsToCart, incQuantity, decQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
