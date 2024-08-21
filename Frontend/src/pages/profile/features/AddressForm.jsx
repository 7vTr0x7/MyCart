import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, editAddress } from "../addressSlice";

const AddressForm = ({
  setToggleForm,
  toggleEditForm,
  id,
  setToggleEditForm,
}) => {
  const [name, setName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useDispatch();

  const addresses = useSelector((state) => state.addresses.addresses);

  const dataHandler = (e) => {
    if (addresses.length > 0) {
      const {
        name,
        street,
        houseNo,
        city,
        state,
        country,
        postalCode,
        mobileNumber,
      } = addresses[0];

      setName(name);
      setStreet(street);
      setHouseNo(houseNo);
      setCity(city);
      setState(state);
      setCountry(country);
      setCode(postalCode);
      setContact(mobileNumber);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100).toString();
    const newAddress = {
      name,
      userId: id,
      houseNo,
      street,
      city,
      state,
      country,
      postalCode: code,
      mobileNumber: Number(contact),
    };

    if (toggleEditForm) {
      dispatch(addAddress(newAddress));
      toast.success("Address Added");
    } else {
      dispatch(editAddress(newAddress));
      toast.success("Address Edited");
    }
    setToggleForm(false);
    setToggleEditForm(false);
  };

  const cancelHandler = () => {
    setToggleEditForm(false);
    setToggleForm(false);
  };

  useEffect(() => {
    if (toggleEditForm && id) {
      const address = addresses.find((add) => add.userId == id);

      const {
        name,
        street,
        houseNo,
        city,
        state,
        country,
        postalCode,
        mobileNumber,
      } = address;

      setName(name);
      setStreet(street);
      setHouseNo(houseNo);
      setCity(city);
      setState(state);
      setCountry(country);
      setCode(postalCode);
      setContact(mobileNumber);
    }
  }, []);

  return (
    <div className="px-3 py-2 rounded-0 border " style={{ width: "30rem" }}>
      <p className="fw-bold fs-5 text-center my-3">
        {toggleEditForm ? "Edit Address" : "Add New Address"}
      </p>
      <form>
        <input
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="House No."
          value={houseNo}
          onChange={(e) => setHouseNo(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </form>
      <div className="my-4 d-flex justify-content-between text-center">
        <button className="btn btn-light  mx-2" onClick={submitHandler}>
          {toggleEditForm ? "Edit" : "Add"}
        </button>
        {!toggleEditForm && (
          <button className="btn btn-light  mx-3 " onClick={dataHandler}>
            Dummy Data
          </button>
        )}
        <button className="btn btn-light  mx-2" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
