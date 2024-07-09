import { Router } from "express";
import { hash as _hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import User, { findOne, find, findById, updateOne } from "../models/user";

const router = Router();

router.post("/signup", (req, res, next) => {
  _hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      nip: req.body.nip,
      city: req.body.city,
      postalCode: req.body.postalCode,
      nameOfCompany: req.body.nameOfCompany,
      password: hash,
    });
    console.log(user);
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User created!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
});

router.post("/signin", (req, res, next) => {
  let fetchedUser;
  findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return user.status(401).json({
          message: "Auth failed",
        });
      }
      fetchedUser = user;
      return compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
        message: "Successfully logged in!"
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Auth failed",
      });
    });
});

router.get("/find/:name", (req, res, next) => {
  let email = req.params.email;

  if (email === "any") email = ".";

  find({ email: new RegExp(email) })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Find Error",
        error: error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Find Error",
        error: error,
      });
    });
});

router.post("/:id", (req, res, next) => {
  updateOne(
    { email: req.body.email },
    {
      $set: {
        email: req.body.email,
        nip: req.body.nip,
        city: req.body.city,
        postalCode: req.body.postalCode,
        password: req.body.password
      },
    }
  )
    .then((result) => {
      if (result.matchedCount > 0) {
        res.status(204).json({ message: "Update successful!" });
      } else {
        console.log(result);
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Couldn't update user!",
        error: error,
      });
    });
});

export default router;