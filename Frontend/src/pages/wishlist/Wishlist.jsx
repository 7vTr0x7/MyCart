import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="row">
          {wishlist.map((prod) => (
            <div key={prod._id} className="col-md-3">
              <div className="card"></div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Wishlist;
