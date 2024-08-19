import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import toast, { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <>
      <Header />
      <main className="container my-4">
        <p className="text-center fs-4  fw-bold">My Wishlist</p>
        <div className="row mt-2 mb-3">
          {wishlist.map((prod) => (
            <div key={prod._id} className="col-md-3 mt-3">
              <div className="card">
                <Card prod={prod} />
              </div>
            </div>
          ))}
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default Wishlist;
