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

const addProduct = async (product) => {
  try {
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/products", async (req, res) => {
  try {
    const product = await addProduct(req.body);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to add product ${error}` });
  }
});

const readProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/products/:productId", async (req, res) => {
  try {
    const product = await readProductById(req.params.productId);
    if (product) {
      res.json({ data: { product } });
    } else {
      res.status(404).json({ error: "Product not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get product ${error}` });
  }
});

const readCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/categories", async (req, res) => {
  try {
    const categories = await readCategories();
    if (categories.length > 0) {
      res.json({ data: { categories } });
    } else {
      res.status(404).json({ error: "Categories not found" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get categories ${error}` });
  }
});

const readCategoryById = async (id) => {
  try {
    const category = await Category.findById(id);
    return category;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/categories/:categoryId", async (req, res) => {
  try {
    const category = await readCategoryById(req.params.categoryId);
    if (category) {
      res.json({ data: { category } });
    } else {
      res.status(404).json({ error: "Category not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get category ${error}` });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
