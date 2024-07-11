import Basket from "./../infrastrcture/models/basket.js";

export const addProductToBasket = (req, res, next) => {
  const basket = new Basket({
    userId: req.body.userId,
    products: req.body.products,
  });
  basket.save()
    .then(result => {
      res.status(201).json({
        message: "Basket created!",
        result: result,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

export const getBasketForUser = (req, res, next) => {
  Basket.findOne({ userId: req.params.userId })
    .populate("products.productId")
    .then(basket => {
      res.status(200).json(basket);
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

export const updateBasketForUser = (req, res, next) => {
  Basket.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true })
    .then(result => {
      res.status(200).json({
        message: "Basket updated!",
        result: result,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

export const deleteBasketForUser = (req, res, next) => {
  Basket.findOneAndRemove({ userId: req.params.userId })
    .then(result => {
      res.status(200).json({
        message: "Basket deleted!",
        result: result,
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};
