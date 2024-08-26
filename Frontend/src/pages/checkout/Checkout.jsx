import React, { useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState(null);
  const addresses = useSelector((state) => state.addresses.addresses);

  const location = useLocation();

  const { products, productPrice, discountAmount, deliveryCharge } =
    location.state || {};

  return (
    <>
      <Header />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="container my-3 mb-5">
        <div>
          {!address ? (
            <>
              <p className="fw-semibold fs-4 text-center m-0">Select Address</p>
              {addresses &&
                addresses.map((address) => (
                  <div
                    key={address._id}
                    className="card mb-3 p-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setAddress(address)}>
                    <h4 className="fw-semibold fs-5">{address.name}</h4>
                    <p className="fs-6 m-0">
                      {address.houseNo} {address.street} {address.city},
                      {address.state} - {address.postalCode}
                    </p>
                    <p className="fs-6">{address.country}</p>
                    <p className="fs-6 m-0">
                      Mobile Number: {address.mobileNumber}
                    </p>
                  </div>
                ))}
            </>
          ) : (
            <div className="card p-3 " style={{ width: "30rem" }}>
              <p className="text-center m-0 fs-4 fw-semibold ">Order Summary</p>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p className=" m-0 fs-6 fw-bold ">Items</p>
                  {products.map((prod) => (
                    <p key={prod._id} className=" m-0 fs-6 fw-semibold ">
                      {prod.name}
                    </p>
                  ))}
                </div>
                <div>
                  <p className=" m-0 fs-6 fw-bold">QTY</p>
                  {products.map((prod) => (
                    <p
                      key={prod._id}
                      className=" text-center m-0 fs-6 fw-semibold ">
                      {prod.quantity}
                    </p>
                  ))}
                </div>
              </div>
              <hr />
              <p className="text-center m-0 fs-5 fw-semibold ">Price Details</p>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p className=" m-0 fs-6 fw-semibold ">Price</p>
                  <p className=" m-0 fs-6 fw-semibold ">Discount</p>
                  <p className=" m-0 fs-6 fw-semibold ">Delivery Charges</p>
                  <p className=" my-2 fs-6 fw-bold ">Total Amount</p>
                </div>
                <div>
                  <p className=" m-0 fs-6 fw-semibold">
                    ${(productPrice + discountAmount).toFixed(2)}
                  </p>
                  <p className=" m-0 fs-6 fw-semibold">
                    ${discountAmount.toFixed(2)}
                  </p>
                  <p className=" m-0 fs-6 fw-semibold">
                    ${deliveryCharge.toFixed(2)}
                  </p>
                  <p className=" my-2 fs-6 fw-bold">
                    ${(productPrice + deliveryCharge).toFixed(2)}
                  </p>
                </div>
              </div>
              <hr />
              <p className="text-center m-0 fs-5 fw-semibold ">Deliver To</p>
              <hr />
              <div>
                <h4 className="fw-semibold fs-5">{address.name}</h4>
                <p className="fs-6 m-0">
                  {address.houseNo} {address.street} {address.city},
                  {address.state} - {address.postalCode}
                </p>
                <p className="fs-6 m-0">{address.country}</p>
                <p className="fs-6 m-0">
                  Mobile Number: {address.mobileNumber}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Checkout;
