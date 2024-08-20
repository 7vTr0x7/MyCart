const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  houseNo: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
});

const Addresses = mongoose.model("Addresses", addressSchema);

module.exports = Addresses;
