import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import FiltersSection from "./features/FiltersSection";
import ProductsSection from "./features/ProductsSection";
import { addProducts, filteredProducts } from "./productsSlice";

const Products = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { category } = location.state || {};

  const allProds = useFetchProducts();

  useEffect(() => {
    const productsArray = category
      ? allProds.filter((prod) => prod.categories.category === category)
      : allProds;

    dispatch(addProducts(productsArray));
    dispatch(filteredProducts(productsArray));
  }, [allProds, category]);

  return (
    <>
      <Header />
      <main>
        <div className="row ">
          <div className="col-md-3">
            <FiltersSection />
          </div>
          <div className="col-md-9 ">
            <ProductsSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
