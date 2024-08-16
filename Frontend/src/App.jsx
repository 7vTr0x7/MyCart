import React from "react";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetails/:prodId" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
