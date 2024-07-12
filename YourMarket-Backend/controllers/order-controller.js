import mongoose from 'mongoose';
import Order from './../infrastrcture/models/order.js';
import Basket from './../infrastrcture/models/basket.js';
import { v4 as uuidv4 } from 'uuid';

export const createOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    // Find the basket for the user
    const basket = await Basket.findOne({ userId });

    if (!basket || basket.items.length === 0) {
      return res.status(400).json({ message: 'Basket is empty' });
    }

    // Calculate total order value
    const totalValue = basket.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Map basket items to order items
    const orderItems = basket.items.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    // Create a new order
    const order = new Order({
      userId: mongoose.Types.ObjectId(userId),
      items: orderItems,
      totalValue,
      orderNumber: uuidv4(), // Generate a unique order number
    });

    // Save the order
    const savedOrder = await order.save();

    // Clear the basket
    basket.items = [];
    await basket.save();

    res.status(201).json({
      message: 'Order created successfully!',
      order: savedOrder,
    });
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({
      message: 'Error creating order',
      error: err.message,
    });
  }
};

export const getOrderHistory = async (req, res) => {
  try {
    const userId = req.query.userId; // Get userId from query parameters
    console.log('Fetching order history for userId:', userId);

    // Ensure userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid userId' });
    }

    const orders = await Order.find({ userId: mongoose.Types.ObjectId(userId) }).sort({ orderDate: -1 });

    if (!orders.length) {
      console.log('No orders found for userId:', userId);
    } else {
      console.log('Orders found:', orders);
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching order history:', error);
    res.status(500).json({ message: 'Error fetching order history', error });
  }
};