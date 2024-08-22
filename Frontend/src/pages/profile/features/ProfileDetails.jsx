import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressForm from "./AddressForm";
import toast, { Toaster } from "react-hot-toast";
import { readAddress } from "../addressSlice";
import { Link } from "react-router-dom";
import { deleteProfile } from "../profileSlice";

const ProfileDetails = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.profile.profile);
  const { _id } = user;
  const addresses = useSelector((state) => state.addresses.addresses);

  const editAddressHandler = (_id) => {
    setToggleEditForm(true);
    setToggleForm(true);
    setId(_id);
  };

  const deleteAddressHandler = (_id) => {
    //    dispatch(deleteAddress(_id));
    toast.success("Address Deleted");
  };

  const logoutHandler = () => {
    dispatch(deleteProfile());
  };

  useEffect(() => {
    dispatch(readAddress(_id));
  }, [_id, dispatch]);

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
                      My Address
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
                      Name: {`${user.firstName} ${user.lastName}`}
                    </p>
                    <div className="d-flex justify-content-between mt-3">
                      <span className="fs-6 fw-semibold ">
                        Email: {user.email}
                      </span>
                      <button
                        onClick={logoutHandler}
                        className="btn btn-light fs-6 fw-semibold">
                        <Link className="nav-link" to="/login" state={true}>
                          Log Out
                        </Link>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {addresses.map((address) => (
                      <div key={address._id}>
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
                        <div className="my-3">
                          <button
                            onClick={() => editAddressHandler(address._id)}
                            className="btn btn-light fs-6 fw-semibold">
                            Edit
                          </button>
                          <button
                            onClick={() => deleteAddressHandler(address._id)}
                            className="btn btn-light fs-6 fw-semibold mx-3">
                            Delete
                          </button>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ) : (
            <AddressForm
              setToggleForm={setToggleForm}
              toggleEditForm={toggleEditForm}
              id={id}
              setToggleEditForm={setToggleEditForm}
            />
          )}
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default ProfileDetails;
