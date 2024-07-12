import pkg from 'mongoose';

const { Schema, model } = pkg;

const ProductSchema = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  productId: { type: String, required: true },
});

export default model("Product", ProductSchema);