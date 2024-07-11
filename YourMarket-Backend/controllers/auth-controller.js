import User from "./../infrastrcture/models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        nip: req.body.nip,
        city: req.body.city,
        postalCode: req.body.postalCode,
        nameOfCompany: req.body.nameOfCompany,
        password: hash,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "User created successfully!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "User creation failed",
        error: err.message,
      });
    });
};

export const signin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication failed: User not found",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Authentication failed: Password incorrect",
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
      return res.status(200).json({
        userId: fetchedUser._id,
        message: "Successfully logged in!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Authentication failed",
        error: err.message,
      });
    });
};

export const signout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Successfully signed out!' });
};

export const checkAuth = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(200).json({ isAuthenticated: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(200).json({ isAuthenticated: false });
    }
    return res.status(200).json({ isAuthenticated: true, userId: decoded.userId });
  });
};