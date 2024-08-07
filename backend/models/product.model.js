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
  rating: {
    type: Number,
    required: true,
  },
  categories: {
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;