require("dotenv").config({ path: "D:/mycart/backend/.env" });
const mongoose = require("mongoose");

const mongoUrl = process.env.MONGODB;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.log("Failed to connect to MongoDB");
  }
};

module.exports = { initializeDatabase };
