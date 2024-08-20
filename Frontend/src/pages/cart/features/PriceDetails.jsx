import React from "react";

const PriceDetails = ({ products }) => {
  const productPrice = products.reduce((acc, curr) => {
    curr.discountPercent
      ? (acc +=
          (curr.price - curr.price * (curr.discountPercent / 100)) *
          curr.quantity)
      : (acc += curr.price * curr.quantity);
    return acc;
  }, 0);

  const discountAmount = products.reduce((acc, curr) => {
    curr.discountPercent &&
      (acc += curr.price * (curr.discountPercent / 100) * curr.quantity);
    return acc;
  }, 0);

  const deliveryCharge = 5;

  return (
    <>
      {products.length > 0 && (
        <div className="card rounded-0 p-4">
          <p className="fw-bold fs-5 mb-0">Price Details</p>
          <hr />
          <div className="d-flex justify-content-between">
            <span className="fs-6 fw-semibold m-0">
              Price (
              {` ${products.length} ${products.length > 1 ? "Items" : "item"} `}
              )
            </span>
            <span className="fs-6 fw-semibold m-0">
              ${`${productPrice.toFixed(2)}`}
            </span>
          </div>
          {discountAmount && (
            <div className="d-flex justify-content-between my-2">
              <span className="fs-6 fw-semibold m-0">Discount</span>
              <span className="fs-6 fw-semibold m-0">
                ${`${discountAmount.toFixed(2)}`}
              </span>
            </div>
          )}

          <div className="d-flex justify-content-between mb-2">
            <span className="fs-6 fw-semibold m-0">Delivery Charges</span>
            <span className="fs-6 fw-semibold m-0">
              ${`${deliveryCharge.toFixed(2)}`}
            </span>
          </div>

          <hr />

          <div className="d-flex justify-content-between mb-1">
            <span className=" fw-bold fs-6 m-0">Total Amount</span>
            <span className="fs-6 fw-semibold m-0">
              ${`${(productPrice + deliveryCharge).toFixed(2)}`}
            </span>
          </div>
          <hr />

          <p className="fs-6 fw-semibold">
            You Will Save ${discountAmount.toFixed(2)} on This Order
          </p>

          <button className="btn btn-light fw-bold w-100 ">Place Order</button>
        </div>
      )}
    </>
  );
};

export default PriceDetails;
