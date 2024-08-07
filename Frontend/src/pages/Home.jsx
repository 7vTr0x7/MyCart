import React, { useEffect } from "react";
import Header from "../components/Header";
import { useFetchCategories } from "../hooks/useFetchCategories";

const Home = () => {
  const data = useFetchCategories();
  console.log(data);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
