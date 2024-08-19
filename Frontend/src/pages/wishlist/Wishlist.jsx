import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist);

  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default Wishlist;
