import { Router } from "express";
import Basket, { findOne, findOneAndUpdate, findOneAndRemove } from "../models/basket";

const router = Router();

// Add a product to the basket
router.post("/", (req, res, next) => {
  const basket = new Basket({
    userId: req.body.userId,
    products: req.body.products
  });
  basket.save()
    .then(result => {
      res.status(201).json({
        message: "Basket created!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Get the basket for a user
router.get("/:userId", (req, res, next) => {
  findOne({ userId: req.params.userId })
    .populate("products.productId")
    .then(basket => {
      res.status(200).json(basket);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Update the basket for a user
router.put("/:userId", (req, res, next) => {
  findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true })
    .then(result => {
      res.status(200).json({
        message: "Basket updated!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Delete the basket for a user
router.delete("/:userId", (req, res, next) => {
  findOneAndRemove({ userId: req.params.userId })
    .then(result => {
      res.status(200).json({
        message: "Basket deleted!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

export default router;
