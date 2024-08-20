import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "./AddressForm";
import { Toaster } from "react-hot-toast";

const ProfileDetails = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const user = useSelector((state) => state.profile.profile);
  const addresses = useSelector((state) => state.addresses.addresses);

  return (
    <>
      <main className="my-4" style={{ height: "40vh" }}>
        <div className="d-flex justify-content-center align-content-center">
          {!toggleForm ? (
            <div
              className="card px-3 py-2 rounded-0"
              style={{ width: "30rem" }}>
              <div className="row text-center">
                <span
                  className=" col-md-6 fs-5 fw-semibold"
                  style={{ cursor: "pointer" }}
                  onClick={() => setToggle(false)}>
                  Profile
                </span>
                <span
                  className=" col-md-6  fs-5 fw-semibold"
                  style={{ cursor: "pointer" }}
                  onClick={() => setToggle(true)}>
                  Address
                </span>
              </div>
              <hr />
              {toggle && (
                <>
                  <div className="row text-center">
                    <span
                      className=" col-md-6 fs-5 fw-semibold"
                      style={{ cursor: "pointer" }}
                      onClick={() => setToggleForm(false)}>
                      My Addresses
                    </span>
                    <span
                      className=" col-md-6  fs-5 fw-semibold"
                      style={{ cursor: "pointer" }}
                      onClick={() => setToggleForm(true)}>
                      Add New Address
                    </span>
                  </div>
                  <hr />
                </>
              )}

              <div className="card-body p-0">
                {!toggle ? (
                  <>
                    <p className="fs-5 fw-semibold ">Profile Details</p>
                    <p className="fs-6 fw-semibold my-3">
                      Name: {user.firstName + user.lastName}
                    </p>
                    <p className="fs-6 fw-semibold my-3">Email: {user.email}</p>
                  </>
                ) : (
                  <>
                    {addresses.map((address) => (
                      <div key={address.userId}>
                        <p className="fs-5 fw-semibold m-0">{address.name}</p>
                        <p className="fs-6 fw-semibold my-1">
                          {`${address.houseNo}, ${address.street}`}
                        </p>
                        <p className="fs-6 fw-semibold my-1">
                          {` ${address.city}, ${address.state} - ${address.postalCode}`}
                        </p>
                        <p className="fs-6 fw-semibold my-1">
                          {`  ${address.country}`}
                        </p>
                        <p className="fs-6 fw-semibold my-1">
                          {` Contact: ${address.mobileNumber}`}
                        </p>
                        <hr />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ) : (
            <AddressForm setToggleForm={setToggleForm} />
          )}
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default ProfileDetails;
