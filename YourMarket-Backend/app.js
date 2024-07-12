import express from "express";
import bodyParser from "body-parser"; // Import body-parser as a default import
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import events from "events";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import basketRoutes from "./routes/basket.js";
import userRoutes from "./routes/user.js"; 
import orderRoutes from "./routes/order.js"; 

dotenv.config();
// console.log('Environment variables loaded:', process.env.MONGODB_URI);

const app = express();

// Increase the max listeners limit
events.EventEmitter.defaultMaxListeners = 15;

const { connect } = mongoose;
const { json, urlencoded } = bodyParser; // Destructure json and urlencoded from body-parser

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

app.use(cookieParser());
app.use(express.json());
app.use(json());
app.use(urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:4200", // Replace with your frontend's origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(3005, () => {
  console.log("Server listening on port 3005");
});
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/basket", basketRoutes);
app.use("/api/user", userRoutes); 
app.use("/api/order", orderRoutes); // Use the new order routes

export default app;
