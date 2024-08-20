import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.profile.profile);

  return (
    <>
      <main className="my-5" style={{ height: "40vh" }}>
        <div className="d-flex justify-content-center align-content-center">
          <div className="card px-3 py-2 rounded-0" style={{ width: "30rem" }}>
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
                    onClick={() => setToggle(false)}>
                    My Addresses
                  </span>
                  <span
                    className=" col-md-6  fs-5 fw-semibold"
                    onClick={() => setToggle(true)}>
                    Add New Address
                  </span>
                </div>
                <hr />
              </>
            )}
            {!toggle && (
              <div className="card-body p-0">
                <p className="fs-5 fw-semibold ">Profile Details</p>
                <p className="fs-6 fw-semibold my-3">
                  Name: {user.firstName + user.lastName}
                </p>
                <p className="fs-6 fw-semibold my-3">Email: {user.email}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileDetails;
