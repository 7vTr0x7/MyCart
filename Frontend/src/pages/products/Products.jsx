import React from "react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import FilterSection from "./features/FilterSection";
import ProductsSection from "./features/ProductsSection";

const Products = () => {
  const location = useLocation();
  const { category } = location.state || {};

  const products = useFetchProducts();
  const productsData = category
    ? products?.data?.products.filter(
        (prod) => prod.categories.category === category
      )
    : products?.data?.products;

  return (
    <>
      <Header />
      <main>
        <div className="row ">
          <div className="col-md-3">
            <FilterSection products={productsData} />
          </div>
          <div className="col-md-9 p-0">
            <ProductsSection products={productsData} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
