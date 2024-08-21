import React from "react";
import Home from "./pages/home/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import ProductDetails from "./pages/products/ProductDetails";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import Wishlist from "./pages/wishlist/Wishlist";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path={"/products"} element={<Products />} />
            <Route
              path="/productDetails/:prodId"
              element={<ProductDetails />}
            />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
