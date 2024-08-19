import React from "react";

const CartProduct = ({ prod }) => {
  return (
    <>
      <div className="card mx-5 h-auto mb-3">
        <div className="row">
          <div className="col-md-4">
            <img
              src={`${prod.imageUrl}${prod.name}`}
              alt={prod.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8 p-2">
            <p>{prod.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
