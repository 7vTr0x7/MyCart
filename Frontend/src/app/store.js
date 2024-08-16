import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/products/productsSlice";
import wishlistReducer from "../pages/wishlist/wishlistSlice";
import cartReducer from "../pages/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;
