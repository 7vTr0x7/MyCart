import React, { useEffect } from "react";
import Header from "../components/Header";
import { useFetchCategories } from "../hooks/useFetchCategories";
import Categories from "./../components/Categories";

const Home = () => {
  const data = useFetchCategories();
  console.log(data);

  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <Categories categories={data.data.categories} />
        </div>
      </main>
    </>
  );
};

export default Home;
