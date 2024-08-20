import React from "react";

const ProfileDetails = () => {
  return (
    <>
      <main className="my-5" style={{ height: "40vh" }}>
        <div className="d-flex justify-content-center align-content-center">
          <div className="card px-3 py-2 rounded-0" style={{ width: "30rem" }}>
            <div className="row text-center">
              <span className=" col-md-6 fs-5 fw-semibold">Profile</span>
              <span className=" col-md-6  fs-5 fw-semibold">Address</span>
            </div>
            <hr />
            <div className="card-body p-0">
              <p className="fs-5 fw-semibold ">Profile Details</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileDetails;
