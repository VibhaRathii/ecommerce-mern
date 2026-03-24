const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ADD TO CART
router.post("/add", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const newCart = new Cart({
      userId,
      productId,
      quantity
    });

    await newCart.save();

    res.json({ message: "Added to cart" });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET CART
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId })
      .populate("productId"); // 🔥 IMPORTANT

    res.json(cart);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;