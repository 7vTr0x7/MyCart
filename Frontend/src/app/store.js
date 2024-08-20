import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/products/productsSlice";
import wishlistReducer from "../pages/wishlist/wishlistSlice";
import cartReducer from "../pages/cart/cartSlice";
import profileReducer from "./../pages/profile/profileSlice";
import addressReducer from "./../pages/profile/addressSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    profile: profileReducer,
    address: addressReducer,
  },
});

export default store;
