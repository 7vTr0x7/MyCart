import React from "react";
import { useSelector } from "react-redux";

import { Toaster } from "react-hot-toast";
import Card from "../../../components/Card";

const ProductsSection = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  return (
    <div className="bg-body-tertiary py-4 px-5 mx-3">
      <p>
        <b>Showing All Products</b> ( showing {products && products.length}{" "}
        products )
      </p>

      <div className="row">
        {products.length > 0 &&
          products.map((prod) => (
            <div key={prod._id} className="col-md-3">
              <div className="card rounded-0 mt-3 ">
                <Card prod={prod} />
              </div>
            </div>
          ))}
      </div>
      <Toaster />
    </div>
  );
};

export default ProductsSection;
