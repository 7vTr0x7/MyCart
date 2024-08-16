import React from "react";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import Wishlist from "./pages/whishlist/Wishlist";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productDetails/:prodId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
