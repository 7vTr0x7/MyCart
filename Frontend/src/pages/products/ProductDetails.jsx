import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

const ProductDetails = () => {
  const products = useSelector((state) => state.products.products);

  const prodId = useParams();

  const product = products.find((prod) => prodId.prodId == prod._id);

  return (
    <>
      <Header />
      <main
        className="d-flex align-items-center justify-content-center"
        style={{ height: "60vh" }}>
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
            <ProductCard product={product} />
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default ProductDetails;
