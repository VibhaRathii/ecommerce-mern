const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // tumhara Product model

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product (for frontend testing)
router.post("/add", async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const newProduct = new Product({ name, price, image });
    await newProduct.save();
    res.status(200).json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", error: err });
  }
});

module.exports = router;