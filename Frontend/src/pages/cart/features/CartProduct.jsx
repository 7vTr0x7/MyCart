import React from "react";

const CartProduct = (prod) => {
  return (
    <>
      <div className="card mx-5">
        <div className="col-md-4">
          <img src={prod.imageUrl} alt={prod.name} className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default CartProduct;
