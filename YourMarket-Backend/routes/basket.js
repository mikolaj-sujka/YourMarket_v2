import express from 'express';
import { addProductToBasket, getBasketForUser, updateBasketForUser, deleteBasketForUser } from '../controllers/basket-controller.js';

const router = express.Router();

router.post('/add', addProductToBasket);
router.get('/:userId', getBasketForUser);
router.put('/:userId', updateBasketForUser);
router.delete('/:userId', deleteBasketForUser);

export default router;
