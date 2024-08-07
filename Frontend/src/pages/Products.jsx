import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const category = location.state || {};
  console.log(category);

  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default Products;
