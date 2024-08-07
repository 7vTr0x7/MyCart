import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import Categories from "./features/Categories";
import { Link } from "react-router-dom";
import img from "../../utils/iphone-15.jpeg";

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
          <img alt="product" src={img} className="img-fluid" />
        </div>
        <div className="text-center">
          <button className="btn btn-light">
            <Link className="nav-link" to="/products">
              All Products
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
