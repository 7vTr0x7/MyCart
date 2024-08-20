import React, { useState } from "react";

const AddressForm = () => {
  const [name, setName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [contact, setContact] = useState("");

  return (
    <div className="px-3 py-2 rounded-0 border " style={{ width: "30rem" }}>
      <p className="fw-bold fs-5 text-center my-3">Add new Address</p>
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

        <div className="my-4 d-flex justify-content-between text-center">
          <button className="btn btn-light  mx-2  ">Add</button>
          <button className="btn btn-light  mx-3  ">Dummy Data</button>
          <button className="btn btn-light  mx-2 ">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
