import express from "express";
import { json, urlencoded } from "body-parser";
import { connect } from "mongoose";

import authRoutes from "./routes/auth";
import productRoutes from "./routes/product";
import basketRoutes from "./routes/basket";

const app = express();

connect(
    "mongodb+srv://admin123:Password123@cluster0.yiaj1.mongodb.net/yourMarketDb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(json());
app.use(urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/basket", basketRoutes);

export default app;