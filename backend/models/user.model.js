const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: [{ type: Object }],
  cart: [{ type: Object }],
});
const Users = mongoose.model("Users", userSchema);

module.exports = Users;
