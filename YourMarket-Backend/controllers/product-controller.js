import product from "./../infrastrcture/models/product.js";
import Product from "./../infrastrcture/models/product.js";

export const addProduct = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    productId: req.body.productId,
  });
  product.save()
    .then(result => {
      res.status(201).json({
        message: "Product created!",
        result: result,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

export const getAllProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

export const getProductById = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

export const updateProductById = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => {
      res.status(200).json({
        message: "Product updated!",
        result: result,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

export const deleteProductById = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json({
        message: "Product deleted!",
        result: result,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};
