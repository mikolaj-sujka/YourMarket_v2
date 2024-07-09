import { Router } from "express";
import Product, { find, findById, findByIdAndUpdate, findByIdAndRemove } from "../models/product";

const router = Router();

// Add a new product
router.post("/", (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    category: req.body.category
  });
  product.save()
    .then(result => {
      res.status(201).json({
        message: "Product created!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Get all products
router.get("/", (req, res, next) => {
  find()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Get a single product by ID
router.get("/:id", (req, res, next) => {
  findById(req.params.id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Update a product by ID
router.put("/:id", (req, res, next) => {
  findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => {
      res.status(200).json({
        message: "Product updated!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Delete a product by ID
router.delete("/:id", (req, res, next) => {
  findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json({
        message: "Product deleted!",
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
