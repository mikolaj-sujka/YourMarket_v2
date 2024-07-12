import express from 'express';
import { createOrder, getOrderHistory } from '../controllers/order-controller.js';
import { authMiddleware } from '../middleware/auth-middleware.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/history', getOrderHistory, authMiddleware);

export default router;
