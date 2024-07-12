import Basket from '../infrastrcture/models/basket.js';
import Order from '../infrastrcture/models/order.js';
import { v4 as uuidv4 } from 'uuid';

export const createOrder = async (req, res) => {
  try {
    const userId = req.userId; // Assume userId is obtained from auth middleware

    const basket = await Basket.findOne({ userId }).populate('items.productId');

    if (!basket || basket.items.length === 0) {
      return res.status(400).json({ message: 'Basket is empty' });
    }

    const orderItems = basket.items.map(item => ({
      productId: item.productId._id,
      quantity: item.quantity,
    }));

    const totalValue = basket.items.reduce((total, item) => total + item.productId.price * item.quantity, 0);

    const order = new Order({
      userId,
      items: orderItems,
      totalValue,
      orderNumber: uuidv4(), // Generate a unique order number
    });

    await order.save();
    await Basket.findByIdAndDelete(basket._id);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

export const getOrderHistory = async (req, res) => {
  try {
    const userId = req.userId; // Assume userId is obtained from auth middleware
    const orders = await Order.find({ userId }).sort({ orderDate: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order history', error });
  }
};
