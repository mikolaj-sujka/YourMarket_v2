import { Schema, model } from "mongoose";

const BasketSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true }
    }
  ]
});

export default model("Basket", BasketSchema);