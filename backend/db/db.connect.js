require("dotenv").config({ path: "D:/mycart/backend/.env" });
const mongoose = require("mongoose");

const mongoUrl =
  process.env.MONGODB ||
  "mongodb+srv://neoGStudent:vTroxGAMING@neog.vf9x0bo.mongodb.net/?retryWrites=true&w=majority&appName=neoG";

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoUrl);
    if (connection) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.log("Failed to connect to MongoDB");
  }
};

module.exports = { initializeDatabase };
