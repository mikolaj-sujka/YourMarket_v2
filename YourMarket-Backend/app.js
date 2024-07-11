import express from "express";
import bodyParser from "body-parser"; // Import body-parser as a default import
import mongoose from "mongoose";
import dotenv from "dotenv";
import events from 'events';

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import basketRoutes from "./routes/basket.js";

dotenv.config();
console.log('Environment variables loaded:', process.env.MONGODB_URI);

const app = express();

// Increase the max listeners limit
events.EventEmitter.defaultMaxListeners = 15;

const { connect } = mongoose;
const { json, urlencoded } = bodyParser; // Destructure json and urlencoded from body-parser

connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

app.use(json());
app.use(urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

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
