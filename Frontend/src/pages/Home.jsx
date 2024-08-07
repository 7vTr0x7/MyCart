import React, { useEffect } from "react";
import Header from "../components/Header";
import { useFetchCategories } from "../hooks/useFetchCategories";
import Categories from "./../components/Categories";
import { Link } from "react-router-dom";

const Home = () => {
  const data = useFetchCategories();

  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <Categories categories={data?.data?.categories} />
        </div>
        <div className="my-3">
          <img
            alt="product"
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg"
            className="img-fluid"
          />
        </div>
        <div className="text-center">
          <button className="btn btn-light">
            <Link to="/products">All Products</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
