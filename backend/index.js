const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.connect");
const Product = require("./models/product.model");
const Category = require("./models/category.model");
const Users = require("./models/user.model");
const Addresses = require("./models/address.model");

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

const addMultipleProducts = async (products) => {
  try {
    const productsArray = [];
    if (products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        const newProduct = new Product(products[i]);
        const savedProd = await newProduct.save();
        productsArray.push(savedProd);
      }
    }

    return productsArray;
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/products/multiple", async (req, res) => {
  try {
    const products = await addMultipleProducts(req.body);
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: "Product not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to add product ${error}` });
  }
});

const readUsers = async () => {
  try {
    const users = await Users.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/users", async (req, res) => {
  try {
    const users = await readUsers();
    if (users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ error: `Users not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get users ${error}` });
  }
});

const addUser = async (userData) => {
  try {
    const newUser = new Users(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/users", async (req, res) => {
  try {
    const user = await addUser(req.body);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: `User not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to save user ${error}` });
  }
});

const readUserByEmail = async (email) => {
  try {
    const user = await Users.findOne({ email: email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/users/user/:email", async (req, res) => {
  try {
    const user = await readUserByEmail(req.params.email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: `User not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get user ${error}` });
  }
});

const readUserAddress = async (userId) => {
  try {
    const addresses = await Addresses.find({ userId: userId });
    return addresses;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/users/user/:userId/address", async (req, res) => {
  try {
    const addresses = await readUserAddress(req.params.userId);
    if (addresses.length > 0) {
      res.json(addresses);
    } else {
      res.status(404).json({ error: `Address not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get address ${error}` });
  }
});

const addUserAddress = async (data) => {
  try {
    const newAddress = new Addresses(data);
    const savedAddress = await newAddress.save();
    return savedAddress;
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/users/user/:userId/address", async (req, res) => {
  try {
    const address = await addUserAddress(req.body);
    if (address) {
      res.json(address);
    } else {
      res.status(404).json({ error: `Address not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to add address ${error}` });
  }
});

const deleteAddress = async (id) => {
  try {
    const address = await Addresses.findByIdAndDelete(id);
    return address;
  } catch (error) {
    console.log(error);
  }
};

app.delete("/api/users/user/:userId/address/:addressId", async (req, res) => {
  try {
    const address = await deleteAddress(req.params.addressId);
    if (address) {
      res.json(address);
    } else {
      res.status(404).json({ error: `Address not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to delete address ${error}` });
  }
});

const updateAddress = async (id, data) => {
  try {
    const address = await Addresses.findByIdAndUpdate(id, data, { new: true });
    return address;
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/users/user/:userId/address/:addressId", async (req, res) => {
  try {
    const address = await updateAddress(req.params.addressId, req.body);
    if (address) {
      res.json(address);
    } else {
      res.status(404).json({ error: `Address not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to update address ${error}` });
  }
});

const readAddresses = async (userId) => {
  try {
    const addresses = await Addresses.find({ userId: userId });
    return addresses;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/users/user/:userId/address", async (req, res) => {
  try {
    const addresses = await readAddresses(req.params.userId);
    if (addresses.length > 0) {
      res.json(addresses);
    } else {
      res.status(404).json({ error: `Address not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get address ${error}` });
  }
});

const readWishlist = async (userId) => {
  try {
    const user = await Users.findById(userId);
    return user.wishlist;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/users/user/:userId/wishlist", async (req, res) => {
  try {
    const products = await readWishlist(req.params.userId);
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: `products not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get wishlist ${error}` });
  }
});

const addToWishlist = async (userId, prodId) => {
  try {
    const user = await Users.findById(userId);
    user.wishlist.push(prodId);
    const updated = await user.save();
    return updated.wishlist;
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/users/user/:userId/wishlist", async (req, res) => {
  try {
    const products = await addToWishlist(req.params.userId, req.body._id);
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ error: `product not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to add to wishlist ${error}` });
  }
});

const removeFromWishlist = async (userId, prodId) => {
  try {
    const user = await Users.findById(userId);
    user.wishlist = user.wishlist.filter((id) => id != prodId);
    const updated = await user.save();
    return updated.wishlist;
  } catch (error) {}
};

app.delete("/api/users/user/:userId/wishlist", async (req, res) => {
  try {
    const products = await removeFromWishlist(
      req.params.userId,
      req.body.prodId
    );
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: `products not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to remove from wishlist ${error}` });
  }
});

const readCart = async (userId) => {
  try {
    const user = await Users.findById(userId);
    return user.cart;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/users/user/:userId/cart", async (req, res) => {
  try {
    const products = await readCart(req.params.userId);
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: `products not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to get cart ${error}` });
  }
});

const addToCart = async (userId, prodId) => {
  try {
    const user = await Users.findById(userId);
    user.cart.push(prodId);
    const updated = await user.save();
    return updated.cart;
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/users/user/:userId/cart", async (req, res) => {
  try {
    const products = await addToCart(req.params.userId, req.body._id);
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ error: `product not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to add to cart ${error}` });
  }
});

const removeFromCart = async (userId, prodId) => {
  try {
    const user = await Users.findById(userId);
    user.cart = user.cart.filter((id) => id != prodId);
    const updated = await user.save();
    return updated.cart;
  } catch (error) {}
};

app.delete("/api/users/user/:userId/cart", async (req, res) => {
  try {
    const products = await removeFromCart(req.params.userId, req.body.prodId);
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: `products not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed to remove from cart ${error}` });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
