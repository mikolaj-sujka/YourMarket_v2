import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  totalValue: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  orderNumber: { type: String, required: true, unique: true },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;