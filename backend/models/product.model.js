const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercent: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
