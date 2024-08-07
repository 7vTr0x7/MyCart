import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";

const Products = () => {
  const location = useLocation();
  const { category } = location.state || {};
  console.log(category);

  const products = useFetchProducts();
  const productsData = category
    ? products?.data?.products.filter(
        (prod) => prod.categories.category === category
      )
    : products?.data?.products;

  console.log(productsData);
  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default Products;
