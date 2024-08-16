import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/products/productsSlice";
import wishlistReducer from "../pages/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
