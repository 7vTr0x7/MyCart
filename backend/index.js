const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.connect");
const Product = require("./models/product.model");
const Category = require("./models/category.model");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

initializeDatabase();

const readProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/products", async (req, res) => {
  try {
    const products = await readProducts();
    if (products.length > 0) {
      res.json({ data: { products } });
    } else {
      res.status(404).json({ error: `products not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get products ${error}` });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
