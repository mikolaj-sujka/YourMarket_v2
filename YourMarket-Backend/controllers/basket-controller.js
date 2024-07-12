import mongoose from "mongoose";
import Basket from "../infrastrcture/models/basket.js";

export const addProductToBasket = async (req, res) => {
  try {
    const { userId, productId, name, price, quantity } = req.body;

    // Validate productId as ObjectId if it's supposed to be one
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid productId' });
    }

    // Ensure userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid userId' });
    }

    let basket = await Basket.findOne({ userId });

    if (!basket) {
      basket = new Basket({ userId, items: [] });
    }

    const existingItemIndex = basket.items.findIndex(item => item.productId && item.productId.equals(productId));

    if (existingItemIndex >= 0) {
      basket.items[existingItemIndex].quantity += quantity;
    } else {
      basket.items.push({ productId: mongoose.Types.ObjectId(productId), name, price, quantity });
    }

    const result = await basket.save();
    res.status(201).json({
      message: "Product added to basket!",
      result: result,
    });
  } catch (err) {
    console.error('Error adding product to basket:', err);
    res.status(500).json({
      message: 'Error adding product to basket',
      error: err.message,
    });
  }
};
export const getBasketForUser = async (req, res) => {
  try {
    const basket = await Basket.findOne({ userId: req.params.userId });
    if (!basket) {
      return res.status(404).json({ message: "Basket not found" });
    }
    res.status(200).json(basket);
  } catch (err) {
    console.error("Error fetching basket for user:", err);
    res.status(500).json({
      message: "Error fetching basket for user",
      error: err.message,
    });
  }
};

export const updateBasketForUser = async (req, res) => {
  try {
    const result = await Basket.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Basket updated!",
      result: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

export const deleteBasketForUser = async (req, res) => {
  try {
    const result = await Basket.findOneAndRemove({ userId: req.params.userId });
    res.status(200).json({
      message: "Basket deleted!",
      result: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
