import { Router } from "express";
import { addProductToBasket, getBasketForUser, updateBasketForUser, deleteBasketForUser } from "../controllers/basket-controller.js";

const router = Router();

router.post("/", addProductToBasket);
router.get("/:userId", getBasketForUser);
router.put("/:userId", updateBasketForUser);
router.delete("/:userId", deleteBasketForUser);

export default router;
