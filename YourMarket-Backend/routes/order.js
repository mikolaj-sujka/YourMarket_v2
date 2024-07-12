import express from 'express';
import { createOrder, getOrderHistory } from '../controllers/order-controller.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/history', getOrderHistory);

export default router;
