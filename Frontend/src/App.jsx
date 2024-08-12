import React from "react";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetails" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
