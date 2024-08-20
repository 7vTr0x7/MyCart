import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/products/productsSlice";
import wishlistReducer from "../pages/wishlist/wishlistSlice";
import cartReducer from "../pages/cart/cartSlice";
import profileReducer from "./../pages/profile/features/profileSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    profile: profileReducer,
  },
});

export default store;
