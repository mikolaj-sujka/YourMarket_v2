import { Schema, model } from "mongoose";

const ProductSchema = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true }
});

export default model("Product", ProductSchema);