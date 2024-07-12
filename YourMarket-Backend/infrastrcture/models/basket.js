import mongoose from 'mongoose';

const basketItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const basketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [basketItemSchema],
});

const Basket = mongoose.model('Basket', basketSchema);

export default Basket;